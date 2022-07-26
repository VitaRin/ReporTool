const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Listening on port ${port}...'));
