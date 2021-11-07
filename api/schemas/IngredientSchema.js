const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    name: String,
    protein: Number,
    carbs: Number,
    fat: Number,
    kcal: Number
});

const Ingredient = mongoose.model('ingredient', IngredientSchema);

module.exports = Ingredient;