const UserService = require('./UserService');
const jwt = require('jsonwebtoken');

const AuthService = {
	/*
        firstName,
        lastName,
        email,
        username,
        password,
    */
	register: async (user) => {
		let savedResult;

		if (user.role === 'parent')
			savedResult = await UserService.addUser(user);
		else
			savedResult = await UserService.addChild(user);
			
		if (savedResult) {
			delete user.password;
			const token = jwt.sign({ user: user }, process.env.JWT_SECRET, {
				expiresIn: 3600,
			});
			return [201, token];
		}

		return [400, 'Username or email exists'];
	},

	/*
        username, - can be email too
        password
    */
	login: async (user) => {
		const loginRes = await UserService.verifyUser(user);
		if (loginRes) {
			delete loginRes.password;
			const token = jwt.sign({ user: loginRes }, process.env.JWT_SECRET, {
				expiresIn: 3600,
			});
			return [200, token];
		}

		return [401, 'Wrong username or password'];
	},
};

module.exports = AuthService;
