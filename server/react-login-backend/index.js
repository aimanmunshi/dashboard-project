const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'user_login_db',
  password: 'aiman005',
  port: 5432,
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM logincredentials WHERE email_address = $1 AND password = $2',
      [email, password]
    );
    if (result.rows.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Checkemail has@'
  if (!email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Invalid email format' });
  }

  try {
    // Checkemail already exists
    const existingUser = await pool.query(
      'SELECT * FROM logincredentials WHERE email_address = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    // Insert new user
    await pool.query(
      'INSERT INTO logincredentials (name, email_address, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );

    res.status(201).json({ success: true, message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});


