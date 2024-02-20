const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(cors());

// Server Port
const port = 4000;

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mern-crud',
});

// Routings
// Get Route
app.get('/', (req, res) => {
  const sql = 'SELECT * FROM student';
  db.query(sql, (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});
// Create New Student Route
app.post('/student', (req, res) => {
  const sql = 'INSERT INTO student (`Name`,`Email`) VALUES(?)';
  const values = [req.body.name, req.body.email];
  db.query(sql, [values], (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});
// Get Specific Student Route
app.get('/read/:id', (req, res) => {
  const sql = 'SELECT * FROM student WHERE ID=?';
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});
// Update Student Route
app.put('/update/:id', (req, res) => {
  const sql = 'UPDATE student SET `Name`=?, `Email`=? WHERE ID=?';
  const id = req.params.id;
  db.query(sql, [req.body.name, req.body.email, id], (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Delete Student Route
app.delete('/delete/:id', (req, res) => {
  const sql = 'DELETE FROM student WHERE ID=?';
  const id = req.params.id;

  db.query(sql, [id], (err, result) => {
    try {
      return res.json(result);
    } catch (error) {
      return res.json({ message: 'Error inside server!' });
    }
  });
});

// Server Listen
app.listen(port, () => {
  console.log(`Express Server is Run at http://localhost:${port}`);
});
