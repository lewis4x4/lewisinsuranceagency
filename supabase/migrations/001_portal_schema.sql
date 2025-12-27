-- Portal Schema for Lewis Insurance Agency
-- This migration creates all tables needed for the customer portal

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- PORTAL CLIENTS (linked to auth.users)
-- ============================================
CREATE TABLE portal_clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT,
    phone TEXT,
    address_line1 TEXT,
    address_line2 TEXT,
    city TEXT,
    state TEXT DEFAULT 'FL',
    zip_code TEXT,
    status TEXT DEFAULT 'invited' CHECK (status IN ('invited', 'active', 'inactive')),
    invited_at TIMESTAMPTZ,
    activated_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster lookups
CREATE INDEX idx_portal_clients_email ON portal_clients(email);
CREATE INDEX idx_portal_clients_auth_user ON portal_clients(auth_user_id);

-- ============================================
-- POLICIES
-- ============================================
CREATE TABLE policies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES portal_clients(id) ON DELETE CASCADE,
    policy_number TEXT NOT NULL,
    policy_type TEXT NOT NULL, -- 'Homeowners', 'Auto', 'Flood', 'Commercial', etc.
    carrier TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'pending', 'cancelled', 'expired')),
    effective_date DATE,
    expiration_date DATE,
    premium DECIMAL(10, 2),
    deductible DECIMAL(10, 2),
    coverage_summary JSONB, -- Flexible storage for coverage details
    property_address TEXT, -- For property policies
    vehicles JSONB, -- For auto policies (array of vehicles)
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_policies_client ON policies(client_id);
CREATE INDEX idx_policies_status ON policies(status);
CREATE INDEX idx_policies_expiration ON policies(expiration_date);

-- ============================================
-- DOCUMENTS
-- ============================================
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES portal_clients(id) ON DELETE CASCADE,
    policy_id UUID REFERENCES policies(id) ON DELETE SET NULL,
    document_name TEXT NOT NULL,
    document_type TEXT NOT NULL, -- 'declaration', 'id_card', 'endorsement', 'invoice', etc.
    file_path TEXT NOT NULL, -- Path in Supabase Storage
    file_size INTEGER,
    mime_type TEXT,
    uploaded_by TEXT, -- 'agent' or 'client'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_documents_client ON documents(client_id);
CREATE INDEX idx_documents_policy ON documents(policy_id);

-- ============================================
-- SERVICE REQUESTS
-- ============================================
CREATE TABLE service_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES portal_clients(id) ON DELETE CASCADE,
    policy_id UUID REFERENCES policies(id) ON DELETE SET NULL,
    request_type TEXT NOT NULL, -- 'add_vehicle', 'remove_vehicle', 'address_change', etc.
    request_title TEXT NOT NULL,
    request_data JSONB, -- Flexible storage for request details
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'cancelled')),
    agent_notes TEXT,
    resolved_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_requests_client ON service_requests(client_id);
CREATE INDEX idx_requests_status ON service_requests(status);

-- ============================================
-- PORTAL INVITATIONS (for tracking invite links)
-- ============================================
CREATE TABLE portal_invitations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES portal_clients(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    token TEXT UNIQUE NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    used_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_invitations_token ON portal_invitations(token);
CREATE INDEX idx_invitations_email ON portal_invitations(email);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Enable RLS on all tables
ALTER TABLE portal_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_invitations ENABLE ROW LEVEL SECURITY;

-- Portal clients can only see their own data
CREATE POLICY "Clients can view own profile"
    ON portal_clients FOR SELECT
    USING (auth.uid() = auth_user_id);

CREATE POLICY "Clients can update own profile"
    ON portal_clients FOR UPDATE
    USING (auth.uid() = auth_user_id);

-- Policies: clients can only see their own policies
CREATE POLICY "Clients can view own policies"
    ON policies FOR SELECT
    USING (
        client_id IN (
            SELECT id FROM portal_clients WHERE auth_user_id = auth.uid()
        )
    );

-- Documents: clients can only see their own documents
CREATE POLICY "Clients can view own documents"
    ON documents FOR SELECT
    USING (
        client_id IN (
            SELECT id FROM portal_clients WHERE auth_user_id = auth.uid()
        )
    );

-- Service requests: clients can view and create their own requests
CREATE POLICY "Clients can view own requests"
    ON service_requests FOR SELECT
    USING (
        client_id IN (
            SELECT id FROM portal_clients WHERE auth_user_id = auth.uid()
        )
    );

CREATE POLICY "Clients can create requests"
    ON service_requests FOR INSERT
    WITH CHECK (
        client_id IN (
            SELECT id FROM portal_clients WHERE auth_user_id = auth.uid()
        )
    );

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_portal_clients_updated_at
    BEFORE UPDATE ON portal_clients
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_policies_updated_at
    BEFORE UPDATE ON policies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_service_requests_updated_at
    BEFORE UPDATE ON service_requests
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to link auth user to portal client after signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE portal_clients
    SET
        auth_user_id = NEW.id,
        status = 'active',
        activated_at = NOW()
    WHERE email = NEW.email;
    RETURN NEW;
END;
$$ language 'plpgsql' SECURITY DEFINER;

-- Trigger to auto-link users
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- ============================================
-- STORAGE BUCKET
-- ============================================
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policy: clients can only access their own documents
CREATE POLICY "Clients can access own documents"
    ON storage.objects FOR SELECT
    USING (
        bucket_id = 'documents' AND
        (storage.foldername(name))[1] IN (
            SELECT id::text FROM portal_clients WHERE auth_user_id = auth.uid()
        )
    );
