require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

const port = process.env.PORT || 8000;

// Connect to Database
connectDB();

// New route to check database connection status
app.get('/db-status', (req, res) => {
  const mongoose = require('mongoose');
  const status = mongoose.connection.readyState;
  const states = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting"
  };
  res.json({
    database: states[status] || "unknown",
    readyState: status
  });
});

// data base (JSON)
const studentss = [
  { id: 1, name: "Sameer", class: "Btexh" },
  { id: 2, name: "Sana", class: "Btech" }
]

// data read
app.get('/', (req, res) => {
  res.json(studentss);
})

app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = studentss.find(s => s.id === id);
  res.json(student);
});

app.post('/add', (req, res) => {
  const newstudent = {
    id: studentss.length + 1,
    name: req.body.name,
    class: req.body.class
  }
  studentss.push(newstudent);
  res.json(newstudent);
})

app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let student = studentss.filter((s) => s.id !== id);
  res.json({ message: "data deleted", student });
});

app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let student = studentss.find((s) => s.id === id);
  if (student) {
    student.name = req.body.name;
    student.class = req.body.class;
    res.json({ message: "data updated", student });
  }
  else {
    res.json({ message: "student not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})