const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const fs = require('fs');
const path = require('path');

app.post('/create', (req, res) => {
  const { text } = req.body;
  const filePath = path.join(__dirname, 'hello.txt');

  fs.writeFile(filePath, text, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error writing to file' });
    }
    res.json({ message: 'File created successfully' });
  });
});

app.get('/read', (req, res) => {
  const filePath = path.join(__dirname, 'hello.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error reading file' });
    }
    res.json({ message: data });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
