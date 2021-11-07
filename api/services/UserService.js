const User = require('../schemas/UserSchema');
const bcrypt = require('bcrypt');

const UserService = {
    addUser: async (user) => {
        const salt = bcrypt.genSaltSync(10);
        const hashedPass = bcrypt.hashSync(user.password, salt);


        const foundUser = await User.findOne({
            $or: [
                { username: user.username }, 
                { email: user.email }
            ]
        });

        if (!foundUser) {
            const newUser = new User({
                "firstName": user.firstName,
                "lastName": user.lastName,
                "email": user.email,
                "username": user.username,
                "password": hashedPass,
                "role": user.role,
                "code": (Math.floor(Math.random() * (999999 - 100000) + 100000)).toString(),
                "children": []
            });

            newUser.save((err) => {
                if (err) {
                    return false;
                }
            });

            return true;
        } else {
            return false;
        }
    },

    getUser: async (user) => {
        const foundUser = await User.findOne({
            $or: [
                { username: user.username },
                { email: user.username }
            ]
        });

        return foundUser;
    },

    verifyUser: async (user) => {
        let foundUser = await UserService.getUser(user);
        foundUser = foundUser.toJSON();
        if (foundUser) {
            if (await bcrypt.compare(user.password, foundUser.password)) {
                delete foundUser.password;
                delete foundUser.__v;
                delete foundUser._id;
                return foundUser;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    addChild: async (childData) => {
        let parent = await User.findOne({ username: childData.username });

        if (parent)
            return [400, 'Username exists'];

        parent = await User.findOne().where({ code: childData.code })
            .where({ 'children.username': { $ne: childData.username }})
            .exec();

        if (parent) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPass = bcrypt.hashSync(childData.password, salt);

            parent.children.push({
                firstName: childData.firstName,
                lastName: childData.lastName,
                username: childData.username,
                password: hashedPass,
                role: 'child',
                activites: [],
                foods: [],
                rewards: [],
                points: 0
            });

            console.log(parent);


            parent.save();

            return [201, `Child ${childData.username} added`];
        }

        return [400, 'Invalid data'];
    }
};

module.exports = UserService;
