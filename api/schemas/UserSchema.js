const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    role: { type: String, default: 'parent' },
    code: String,
    children: [
        {
            firstName: String,
            lastName: String,
            username: String,
            password: String,
            role: { type: String, default: 'child' },
            activities: [
                {
                    name: String,
                    time: Number,
                    reps: Number
                }
            ],
            foods: [
                {
                    name: String,
                    rating: Number,
                    recipe: {
                        name: String,
                        ingredients: [
                            {
                                name: String,
                                protein: Number,
                                carbs: Number,
                                fat: Number,
                                kcal: Number
                            }
                        ]
                    }
                }
            ],
            rewards: [
                {
                    name: String,
                    cost: Number,
                }
            ],
            points: Number
        }
    ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;