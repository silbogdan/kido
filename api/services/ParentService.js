const User = require('../schemas/UserSchema');
const jwt = require('jsonwebtoken');


const ParentService = {
    /*
        usernameParent,
        usernameChild,
        nameRecipe,
    */
    addFood: async (body) => {
        const foundParent = await User.findOne({ username: body.usernameParent });
        if (!foundParent)
            return [404, 'Parent doesn\'t exist'];

        console.log(foundParent);
        foundParent.children[0].foods.push({ name: body.nameRecipe });

        foundParent.save();

        return [200, 'Food added successfully'];

    },

    /*
        usernameParent,
        usernameChild,
        name,
        time,
        reps
    */

    addActivity: async (body) => {
        const foundParent = await User.findOne({ username: body.usernameParent });
        if (!foundParent)
            return [404, 'Parent doesn\'t exist'];

        console.log(foundParent);
        foundParent.children[0].activities.push({
            name: body.name,
            time: body.time,
            reps: body.reps
        });

        foundParent.save();

        return [200, 'Activity added successfully'];

    },

    /*
        usernameParent,
        usernameChild,
        name,
        cost,
    */

    addReward: async (body) => {
        const foundParent = await User.findOne({ username: body.usernameParent });
        if (!foundParent)
            return [404, 'Parent doesn\'t exist'];

        console.log(foundParent);
        foundParent.children[0].rewards.push({
            name: body.name,
            cost: body.cost,
        });

        foundParent.save();

        return [200, 'Reward added successfully'];

    },
}

module.exports = ParentService;