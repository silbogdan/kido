const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: String,
    ingredients: [
        {
            name: String,
            protein: Number,
            carbs: Number,
            fat: Number,
            kcal: Number
        }
    ],
    healthFactor: { type: Number, default: 0 }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;