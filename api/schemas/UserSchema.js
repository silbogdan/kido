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
                    description: String,
                    points: { type: Number, default: 0 },
                    time: Number,
                    reps: Number,
                    isActive: Boolean
                }
            ],
            foods: [
                {
                    name: String,
                    description: String,
                    points: { type: Number, default: 0 },
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
                    },
                    isActive: Boolean
                }
            ],
            rewards: [
                {
                    name: String,
                    cost: { type: Number, default: 0 },
                    description: { type: String, default: 'Reward for being healthy' },
                    isActive: Boolean
                }
            ],
            points: Number
        }
    ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
