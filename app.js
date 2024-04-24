const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const url = 'http://localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Vue Store Server'
  });
});

app.listen(port, () => {
  console.log(`This app listening on ${url}:${port}`)
});