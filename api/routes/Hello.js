const express = require('express');
const router = express.Router();

const HelloService = require('../services/HelloService.js');

router.get('/', (req, res) => {
    return res.status(200).send(HelloService.sayHello());
})

module.exports = router;