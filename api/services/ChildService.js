const User = require('../schemas/UserSchema');
const jwt = require('jsonwebtoken');


const ChildService = {
    /*
        username
    */
    getChild: async (child) => {
        if(!User.find({'children.username': child.username}))
            return false;
            
        const foundChild = await User.aggregate([
            {$match: {'children.username': {$eq: child.username}}},
            {$unwind: '$children'},
            {$match: {'children.username': {$eq: child.username}}},
            {
                $project: {
                    username: '$children.username',
                    foods: '$children.foods',
                    activities: '$children.activities',
                    rewards: '$children.rewards',
                }}]);
        return foundChild;
    },

    getFood: async (child) => {
        const foundChild = await ChildService.getChild(child.user);
        if (foundChild) {
            return [200, foundChild[0].foods];
        }

        return [404, 'Child doesn\'t exist'];
    },

    getActivities: async (child) => {
        const foundChild = await ChildService.getChild(child.user);
        if (foundChild) {
            return [200, foundChild[0].activities];
        }

        return [404, 'Child doesn\'t exist'];
    },

    getRewards: async (child) => {
        const foundChild = await ChildService.getChild(child.user);

        if (foundChild) {
            return [200, foundChild[0].rewards];
        }

        return [404, 'Child doesn\'t exist'];
    },
}

module.exports = ChildService;