-- Force drop all related tables and recreate with correct structure
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS clients CASCADE;

-- Create the correct clients table structure
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    size VARCHAR(100) NOT NULL,
    address TEXT DEFAULT '',
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contacts table
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT '',
    email VARCHAR(255) DEFAULT '',
    phone VARCHAR(100) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_created_at ON clients(created_at);
CREATE INDEX idx_contacts_client_id ON contacts(client_id);

-- Insert sample data
INSERT INTO clients (name, size, address, status) VALUES
('Acme Corporation', 'Medium (51–250 employees)', '123 Business St, City, State 12345', 'active'),
('Tech Startup Inc', 'Small (11–50 employees)', '456 Innovation Ave, Tech City, TC 67890', 'pending'),
('Global Enterprises', 'Medium (51–250 employees)', '789 Corporate Blvd, Metro City, MC 54321', 'active'),
('Local Business LLC', 'Micro (1–10 employees)', '321 Main St, Small Town, ST 98765', 'completed');

-- Add sample contacts
INSERT INTO contacts (client_id, first_name, last_name, role, email, phone) VALUES
(1, 'John', 'Smith', 'CEO', 'john.smith@acme.com', '555-0101'),
(1, 'Jane', 'Doe', 'CTO', 'jane.doe@acme.com', '555-0102'),
(2, 'Mike', 'Johnson', 'Founder', 'mike@techstartup.com', '555-0201'),
(3, 'Sarah', 'Wilson', 'VP Operations', 'sarah.wilson@global.com', '555-0301'),
(4, 'Tom', 'Brown', 'Owner', 'tom@localbusiness.com', '555-0401');

-- Verify the structure
SELECT 'Clients table created successfully' as status;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'clients' 
ORDER BY ordinal_position;
