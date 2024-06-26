const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8081;
const url = 'http://localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static(path.join(__dirname, './public/img')));
app.use(cors());

const db = require('./app/models');
db.mongoose
    .connect(db.url)
    .then(res => {
        console.log('Database is connected.');
    }).catch(err => {
        console.log('Cannot connect to database.', err);
        process.exit();
    });

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Vue Store Server'
  });
});

require('./app/routes/product.route')(app);
require('./app/routes/order.route')(app);

app.listen(port, () => {
  console.log(`This app listening on ${url}:${port}.`)
});