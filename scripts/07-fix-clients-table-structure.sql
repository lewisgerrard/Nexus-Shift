-- Fix the clients table structure to match our simplified 4-field form
-- This script will safely migrate from the old structure to the new one

-- First, let's see what we're working with
SELECT 'Current table structure:' as info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;

-- Add the new columns if they don't exist
ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS name VARCHAR(255);

ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS size VARCHAR(255);

-- Update existing data to populate the new columns
UPDATE clients 
SET name = COALESCE(company_name, contact_name, 'Unnamed Client')
WHERE name IS NULL;

UPDATE clients 
SET size = COALESCE(client_type, 'Unknown')
WHERE size IS NULL;

-- Now make the old required columns nullable so we can use the new structure
ALTER TABLE clients 
ALTER COLUMN contact_name DROP NOT NULL;

ALTER TABLE clients 
ALTER COLUMN company_name DROP NOT NULL;

-- Make the new columns required
ALTER TABLE clients 
ALTER COLUMN name SET NOT NULL;

ALTER TABLE clients 
ALTER COLUMN size SET NOT NULL;

-- Verify the changes
SELECT 'Updated table structure:' as info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;

-- Show sample data
SELECT 'Sample data after migration:' as info;
SELECT id, name, size, address, status, created_at 
FROM clients 
LIMIT 3;
