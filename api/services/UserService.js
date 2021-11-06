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
                "role": user.role
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
    }
};

module.exports = UserService;