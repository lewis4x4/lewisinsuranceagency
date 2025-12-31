-- Leads table for contact form submissions
-- This stores leads from the website contact forms

CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    zip_code TEXT,
    insurance_type TEXT,
    message TEXT,
    source TEXT NOT NULL, -- page path where form was submitted
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    consent_timestamp TIMESTAMPTZ NOT NULL,
    ip_hash TEXT, -- hashed IP for fraud prevention, never store raw IP
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for common queries
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_created ON leads(created_at);
CREATE INDEX idx_leads_source ON leads(source);

-- Enable RLS but allow inserts from anonymous users (for contact form)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Anyone can submit leads"
    ON leads FOR INSERT
    WITH CHECK (true);

-- Only authenticated service role can read leads (admin access)
-- Note: In production, you'd use a service role key for reading leads
CREATE POLICY "Service role can read leads"
    ON leads FOR SELECT
    USING (auth.role() = 'service_role');
