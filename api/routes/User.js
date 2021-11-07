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
    const token = req.headers.authorization.split(' ')[1];

    const foodResult = await ChildService.getFood(jwt.verify(token, process.env.JWT_SECRET));

    return res.status(foodResult[0]).send(foodResult[1]);
});

router.get('/getActivities', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    const user = jwt.verify(token, process.env.JWT_SECRET).user;

    console.log(user);

    let activitiesResult = await ChildService.getActivities(jwt.verify(token, process.env.JWT_SECRET));
    if (user) {
        if (user.role === 'child')
            activitiesResult = await ChildService.getActivities(user);
        else {
            if (user.children) {
                if (user.children[0]) {
                    activitiesResult = await ChildService.getActivities(user.children[0]);
                } else {
                    return res.status(400).send('Aoleu maica');
                }
            } else {
                return res.status(204).send([]);
            }
        }
    } else {
        return res.status(204).send([]);
    }

    return res.status(activitiesResult[0]).send(activitiesResult[1]);
});

router.get('/getRewards', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];

    const user = jwt.verify(token, process.env.JWT_SECRET).user;

    let rewardsResult;

    console.log(user);

    if (user.role === 'child')
        rewardsResult = await ChildService.getRewards(user);
    else {
        if (user.children[0]) {
            rewardsResult = await ChildService.getRewards(user.children[0]);
        } else {
            return res.status(400).send('Aoleu maica');
        }
    }

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

router.get('/', async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const getResult = await UserService.getUser(jwt.verify(token, process.env.JWT_SECRET).user);
    return res.status(200).send(getResult);
})

module.exports = router;