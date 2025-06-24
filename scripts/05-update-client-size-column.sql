-- Update the client_type column to be size with new options
ALTER TABLE clients RENAME COLUMN client_type TO size;

-- Update existing data to map to new size categories
UPDATE clients 
SET size = CASE 
  WHEN size IN ('startup', 'smb') THEN 'Micro (1–10 employees)'
  WHEN size IN ('consulting', 'agency') THEN 'Small (11–50 employees)'
  WHEN size IN ('enterprise', 'technology') THEN 'Medium (51–250 employees)'
  ELSE 'Micro (1–10 employees)'
END;

-- Verify the changes
SELECT id, company_name, contact_name, size, status FROM clients ORDER BY id;
