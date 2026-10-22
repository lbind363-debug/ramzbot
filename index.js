const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('RamzBot is running! Bot online 24 jam');
});

app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
