require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MONGO');
});

const Auth = require('./api/routes/Auth');

app.use(express.json());

app.use(cors());

// app.use('/hello', HelloRoute);

app.use('/auth', Auth);

app.get('/', (req, res) => res.status(200).send('lol'));

app.listen(5000, () => console.log('Server started on port 5000'));