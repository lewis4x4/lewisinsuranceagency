-- Enable RLS on leads table and add insert policy for anonymous users
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists (to make migration idempotent)
DROP POLICY IF EXISTS "Anyone can submit leads" ON leads;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Anyone can submit leads"
    ON leads FOR INSERT
    WITH CHECK (true);
