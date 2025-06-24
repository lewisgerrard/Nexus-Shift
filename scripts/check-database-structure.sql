-- Check the actual structure of the clients table
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'clients'
ORDER BY ordinal_position;

-- Check existing data to see what columns have values
SELECT * FROM clients LIMIT 5;
