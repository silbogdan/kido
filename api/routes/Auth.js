const express = require('express');
const router = express.Router();

const AuthService = require('../services/AuthService');

/*
    user:
    {
        firstName,
        lastName,
        email,
        username,
        password,
        role
    }
*/
router.post('/register', async (req, res) => {
    const user = req.body;
    const regResult = await AuthService.register(user);
    return res.status(regResult[0]).send(regResult[1]);
});

router.post('/login', async (req, res) => {
    const user = req.body;
    const logResult = await AuthService.login(user);
    return res.status(logResult[0]).send(logResult[1]);
});

router.get('/', (req, res) => {
    return res.status(200).send('Api works');
});

module.exports = router;