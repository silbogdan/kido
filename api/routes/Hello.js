const express = require('express');
const router = express.Router();

const HelloController = require('../Controllers/HelloController.js');

router.get('/', (req, res) => {
    return res.status(200).send(HelloController.sayHello());
})

module.exports = router;