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

        var objIndex = foundParent.children.findIndex((obj => obj.username == body.usernameChild));
        foundParent.children[objIndex].foods.push({ name: body.nameRecipe });

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

        var objIndex = foundParent.children.findIndex((obj => obj.username == body.usernameChild));
        foundParent.children[objIndex].activities.push({
            name: body.name,
            description: body.description,
            points: body.points
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

        var objIndex = foundParent.children.findIndex((obj => obj.username == body.usernameChild));
        foundParent.children[objIndex].rewards.push({
            name: body.name,
            cost: body.cost,
        });

        foundParent.save();

        return [200, 'Reward added successfully'];

    },
}

module.exports = ParentService;