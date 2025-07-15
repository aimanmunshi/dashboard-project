-- PostgreSQL schema for users table

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email_address TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

-- Sample dummy user data
INSERT INTO users (name, email_address, password) VALUES
('John Doe', 'john.doe@example.com', 'john123'),
('Emily Clark', 'emily.clark@mail.com', 'emily#pass'),
('Ravi Kumar', 'ravi.kumar@domain.in', 'rk@2023'),
('Sophia Zhang', 'sophia.zhang@outlook.com', 'sophiaZ!'),
('Carlos Rivera', 'carlos.rivera@correo.mx', 'cr_pass01'),
('Fatima Ali', 'fatima.ali@edu.org', 'fatimaEdu45'),
('Leo Martin', 'leo.martin@company.com', 'martinSecure'),
('Ayesha Khan', 'ayesha.khan@gmail.com', 'ayesha123'),
('Tom Walker', 'tom.walker@live.com', 'twalker789'),
('Nina Patel', 'nina.patel@xyz.org', 'ninaP@007'),
('Omar Hassan', 'omar.hassan@mail.io', 'omarSecure'),
('Grace Lin', 'grace.lin@example.net', 'glin#pass');
