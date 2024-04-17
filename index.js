const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Bonjour le monde!');
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}`);
});