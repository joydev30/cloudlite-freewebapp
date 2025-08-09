const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running smoothly!' });
});

// For any other request, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`CloudLite app listening at http://localhost:${port}`);
});
