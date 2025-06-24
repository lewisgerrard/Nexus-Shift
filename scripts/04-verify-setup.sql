-- Verify all tables exist and have data
SELECT 'admin_users' as table_name, COUNT(*) as record_count FROM admin_users
UNION ALL
SELECT 'clients' as table_name, COUNT(*) as record_count FROM clients
UNION ALL
SELECT 'contacts' as table_name, COUNT(*) as record_count FROM contacts;

-- Show sample data
SELECT 'ADMIN USERS:' as info;
SELECT id, email, created_at FROM admin_users;

SELECT 'CLIENTS:' as info;
SELECT id, contact_name, company_name, client_type, status FROM clients ORDER BY id;

SELECT 'CONTACTS:' as info;
SELECT id, client_id, first_name, last_name, role FROM contacts ORDER BY client_id, id;
