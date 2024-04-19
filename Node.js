// Install dependencies: express, body-parser, mysql
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json()); // Parse JSON body data

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'students_db'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Create an endpoint to receive form data
app.post('/submit-form', (req, res) => {
    const { name, class, division, rollNumber, subject1, subject2 } = req.body;

    // Insert data into the database
    const query = 'INSERT INTO students (name, class, division, rollNumber, subject1, subject2) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, class, division, rollNumber, subject1, subject2], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Data inserted successfully');
            res.json({ message: 'Form submitted successfully!' });
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
