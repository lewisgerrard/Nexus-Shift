-- Test database connection and verify tables exist
SELECT 'Database connection successful' as status;

-- Check if clients table exists
SELECT 
  table_name,
  table_schema
FROM information_schema.tables 
WHERE table_name = 'clients';

-- Check table structure
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;

-- Count existing records
SELECT COUNT(*) as total_clients FROM clients;

-- Show sample data if any exists
SELECT 
  id,
  contact_name,
  company_name,
  client_type,
  status,
  created_at
FROM clients 
ORDER BY created_at DESC 
LIMIT 5;
