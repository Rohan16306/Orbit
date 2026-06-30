const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// A simple API endpoint to verify connection
app.get('/api/status', (req, res) => {
  res.json({ message: 'Hello from the Node.js Express Backend!', status: 'connected' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
