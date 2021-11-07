const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const ChildService = require('../services/ChildService');
const ParentService = require('../services/ParentService');
const UserService = require('../services/UserService');

router.post('/addchild', async (req, res) => {
    const addResult = await UserService.addChild(req.body);

    return res.status(addResult[0]).send(addResult[1]);
});

router.get('/getFood', async (req, res) => {
    const foodResult = await ChildService.getFood(req.body);

    return res.status(foodResult[0]).send(foodResult[1]);
});

router.get('/getActivities', async (req, res) => {
    const activitiesesult = await ChildService.getFood(req.body);

    return res.status(activitiesesult[0]).send(activitiesesult[1]);
});

router.get('/getRewards', async (req, res) => {
    const rewardsResult = await ChildService.getFood(req.body);

    return res.status(rewardsResult[0]).send(rewardsResult[1]);
});

router.post('/addFood', async (req, res) => {
    const rewardsResult = await ParentService.addFood(req.body);

    return res.status(rewardsResult[0]).send(rewardsResult[1]);
});

router.post('/addActivity', async (req, res) => {
    const rewardsResult = await ParentService.addActivity(req.body);

    return res.status(rewardsResult[0]).send(rewardsResult[1]);
});

router.post('/addReward', async (req, res) => {
    const rewardsResult = await ParentService.addReward(req.body);

    return res.status(rewardsResult[0]).send(rewardsResult[1]);
});

module.exports = router;