INSERT INTO testing.roles (role_name) VALUES 
('Admin'),
('Operations'),
('Employee');
select * from testing.roles;

INSERT INTO testing.users (email, password) VALUES 
('alice@example.com', 'hashedpassword1'),
('bob@example.com', 'hashedpassword2'),
('carol@example.com', 'hashedpassword3');
select * from testing.users;

INSERT INTO testing.user_roles (user_id, role_id) VALUES 
(1, 1),
(1, 3),
(2, 2),
(3, 3);
select * from testing.user_roles;

INSERT INTO testing.employee_details (user_id, first_name, last_name, date_of_birth, department, address) VALUES 
(1, 'Alice', 'Anderson', '1990-05-15', 'Engineering', '123 Main St, City A'),
(2, 'Bob', 'Brown', '1985-08-22', 'Sales', '456 Elm St, City B'),
(3, 'Carol', 'Clark', '1992-11-10', 'HR', '789 Oak St, City C');
select * from testing.employee_details;

INSERT INTO testing.leaves (employee_id, leave_type, start_date, end_date) VALUES 
(1, 'Sick Leave', '2025-05-10', '2025-05-12'),
(2, 'Vacation', '2025-06-01', '2025-06-10');
select * from testing.leaves;