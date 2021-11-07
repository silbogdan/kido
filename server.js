require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const expressJWT = require('express-jwt');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MONGO');
});

const Auth = require('./api/routes/Auth');
const User = require('./api/routes/User');

app.use(express.json());

app.use(cors());

app.use(
    expressJWT({
      secret: process.env.JWT_SECRET,
      algorithms: ['HS256'],
      getToken: (req) => {
          if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
              return req.headers.authorization.split(' ')[1];
          else if (req.query && req.query.token)
              return req.query.token;
  
          return null;
      }
    }).unless({ path: ['/auth/login', '/auth/register', '/user/addchild'] })
);

app.use('/auth', Auth);

app.use('/user', User);

app.get('/', (req, res) => res.status(200).send('lol'));

app.listen(5000, () => console.log('Server started on port 5000'));