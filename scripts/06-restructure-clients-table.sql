-- Restructure clients table to match the new 4-field system
-- This will preserve existing data while updating the structure

-- Step 1: Create a backup of existing data
CREATE TABLE IF NOT EXISTS clients_backup AS 
SELECT * FROM clients;

-- Step 2: Add the new 'name' column if it doesn't exist
ALTER TABLE clients 
ADD COLUMN IF NOT EXISTS name VARCHAR(255);

-- Step 3: Populate the 'name' column with existing data
-- Use company_name if available, otherwise use contact_name
UPDATE clients 
SET name = COALESCE(company_name, contact_name, 'Unnamed Client')
WHERE name IS NULL;

-- Step 4: Ensure the 'size' column exists (from previous script)
-- If the previous script wasn't run, this will handle it
DO $$ 
BEGIN
    -- Check if client_type column exists and size doesn't
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'clients' AND column_name = 'client_type') 
       AND NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'clients' AND column_name = 'size') THEN
        
        -- Add size column
        ALTER TABLE clients ADD COLUMN size VARCHAR(100);
        
        -- Migrate data from client_type to size
        UPDATE clients SET size = CASE 
            WHEN client_type ILIKE '%enterprise%' THEN 'Medium (51–250 employees)'
            WHEN client_type ILIKE '%startup%' THEN 'Micro (1–10 employees)'
            WHEN client_type ILIKE '%smb%' OR client_type ILIKE '%small%' THEN 'Small (11–50 employees)'
            WHEN client_type ILIKE '%agency%' THEN 'Small (11–50 employees)'
            ELSE 'Micro (1–10 employees)'
        END;
        
    END IF;
END $$;

-- Step 5: Ensure address column exists and is properly sized
ALTER TABLE clients 
ALTER COLUMN address TYPE TEXT;

-- Step 6: Make sure status column exists with proper values
UPDATE clients 
SET status = LOWER(status)
WHERE status IS NOT NULL;

-- Step 7: Set default values for any NULL fields
UPDATE clients 
SET 
    name = COALESCE(name, 'Unnamed Client'),
    size = COALESCE(size, 'Micro (1–10 employees)'),
    address = COALESCE(address, ''),
    status = COALESCE(status, 'pending');

-- Step 8: Make the core fields NOT NULL
ALTER TABLE clients 
ALTER COLUMN name SET NOT NULL,
ALTER COLUMN size SET NOT NULL,
ALTER COLUMN status SET NOT NULL;

-- Step 9: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_clients_name ON clients(name);
CREATE INDEX IF NOT EXISTS idx_clients_size ON clients(size);
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);

-- Step 10: Show the updated structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;

-- Step 11: Show sample data with the new structure
SELECT 
    id,
    name,
    size,
    address,
    status,
    created_at
FROM clients 
ORDER BY created_at DESC 
LIMIT 5;
