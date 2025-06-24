-- Drop the existing clients table and recreate with the correct structure
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS clients CASCADE;

-- Create the new simplified clients table structure
CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    size VARCHAR(100) NOT NULL,
    address TEXT,
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
    role VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_created_at ON clients(created_at);
CREATE INDEX idx_contacts_client_id ON contacts(client_id);

-- Insert some sample data
INSERT INTO clients (name, size, address, status) VALUES
('Acme Corporation', 'Medium (51–250 employees)', '123 Business St, City, State 12345', 'active'),
('Tech Startup Inc', 'Small (11–50 employees)', '456 Innovation Ave, Tech City, TC 67890', 'pending'),
('Global Enterprises', 'Large (250+ employees)', '789 Corporate Blvd, Metro City, MC 54321', 'active');

-- Add some contacts for the sample clients
INSERT INTO contacts (client_id, first_name, last_name, role, email, phone) VALUES
(1, 'John', 'Smith', 'CEO', 'john.smith@acme.com', '555-0101'),
(1, 'Jane', 'Doe', 'CTO', 'jane.doe@acme.com', '555-0102'),
(2, 'Mike', 'Johnson', 'Founder', 'mike@techstartup.com', '555-0201'),
(3, 'Sarah', 'Wilson', 'VP Operations', 'sarah.wilson@global.com', '555-0301');
