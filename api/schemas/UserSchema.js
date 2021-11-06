const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	username: String,
	password: String,
	role: { type: String, default: 'child' },
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
