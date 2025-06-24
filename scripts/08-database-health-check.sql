-- Database Health Check Script
-- This script checks the current state of the clients table and suggests fixes

SELECT 'CLIENTS TABLE HEALTH CHECK' as check_type;

-- Check if table exists
SELECT 
  CASE 
    WHEN EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'clients') 
    THEN '✅ Table exists' 
    ELSE '❌ Table missing' 
  END as table_status;

-- Check table structure
SELECT 'COLUMN STRUCTURE:' as info;
SELECT 
  column_name,
  data_type,
  CASE WHEN is_nullable = 'NO' THEN 'REQUIRED' ELSE 'optional' END as requirement,
  column_default
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;

-- Check for required columns
SELECT 'REQUIRED COLUMNS CHECK:' as info;
SELECT 
  CASE 
    WHEN EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'clients' AND column_name = 'name') 
    THEN '✅ name column exists' 
    ELSE '❌ name column missing' 
  END as name_check,
  CASE 
    WHEN EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'clients' AND column_name = 'size') 
    THEN '✅ size column exists' 
    ELSE '❌ size column missing' 
  END as size_check;

-- Check data sample
SELECT 'SAMPLE DATA:' as info;
SELECT id, 
       COALESCE(name, contact_name, company_name) as display_name,
       COALESCE(size, client_type) as display_size,
       status,
       created_at
FROM clients 
ORDER BY created_at DESC 
LIMIT 5;

-- Count records
SELECT 'RECORD COUNT:' as info, COUNT(*) as total_clients FROM clients;
