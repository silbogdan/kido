const express = require('express');
const app = express();

const HelloRoute = require('./api/routes/Hello');

app.use(express.json());

app.use('/hello', HelloRoute);

app.get('/', (req, res) => res.status(200).send('lol'));

app.listen(5000, () => console.log('Server started on port 5000'));