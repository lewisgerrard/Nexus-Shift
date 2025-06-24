-- First, let's check if we can connect and see existing data
SELECT 
  table_name, 
  column_name, 
  data_type 
FROM information_schema.columns 
WHERE table_name IN ('clients', 'contacts')
ORDER BY table_name, ordinal_position;
