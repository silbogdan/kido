const UserService = require('./UserService');

const AuthService = {
    /*
        firstName,
        lastName,
        email,
        username,
        password,
        role
    */
    register: async (user) => {
        const savedResult = await UserService.addUser(user);
        if (savedResult) {
            return [201, user.username];
        }

        return [400, 'Username exists'];
    },

    /*
        username, - can be email too
        password
    */
    login: async (user) => {
        const loginRes = await UserService.verifyUser(user);
        if (loginRes) {
            return [200, ''];
        }

        return [401, 'Wrong username or password'];
    }
}

module.exports = AuthService;