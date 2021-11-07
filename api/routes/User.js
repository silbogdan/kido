const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const UserService = require('../services/UserService');

router.post('/addchild', async (req, res) => {
    const addResult = await UserService.addChild(req.body);

    return res.status(addResult[0]).send(addResult[1]);
});

module.exports = router;