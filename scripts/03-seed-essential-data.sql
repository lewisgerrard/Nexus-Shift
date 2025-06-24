-- Insert admin user (password is 'admin123' hashed)
INSERT INTO admin_users (email, password_hash) VALUES 
('admin@nexusshift.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Insert sample clients
INSERT INTO clients (contact_name, company_name, email, phone, client_type, status, notes) VALUES 
('John Smith', 'Tech Innovations Ltd', 'john@techinnovations.com', '+44 20 7123 4567', 'Enterprise', 'active', 'Primary contact for enterprise solutions'),
('Sarah Johnson', 'StartupCo', 'sarah@startupco.com', '+44 161 234 5678', 'Startup', 'active', 'Fast-growing startup in fintech'),
('Mike Davis', 'Local Business Solutions', 'mike@localbiz.com', '+44 113 345 6789', 'SMB', 'pending', 'Small business looking for digital transformation'),
('Emma Wilson', 'Creative Agency Plus', 'emma@creativeplus.com', '+44 117 456 7890', 'Agency', 'active', 'Design agency specializing in branding');

-- Insert sample contacts
INSERT INTO contacts (client_id, first_name, last_name, role, email, phone) VALUES 
(1, 'John', 'Smith', 'CEO', 'john@techinnovations.com', '+44 20 7123 4567'),
(1, 'Alice', 'Brown', 'CTO', 'alice@techinnovations.com', '+44 20 7123 4568'),
(2, 'Sarah', 'Johnson', 'Founder', 'sarah@startupco.com', '+44 161 234 5678'),
(3, 'Mike', 'Davis', 'Owner', 'mike@localbiz.com', '+44 113 345 6789'),
(4, 'Emma', 'Wilson', 'Creative Director', 'emma@creativeplus.com', '+44 117 456 7890');
