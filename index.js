const express = require('express');

const app = express();
const port = 3000;

app.get('/app', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`I listen in port ${port}`);
});
