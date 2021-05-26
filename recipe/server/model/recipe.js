const Schema = require("mongoose").Schema;

const RecipeSchema = new Schema({
  recipe: {
    type: String,
    require: true,
  },
  ingredients: {
    type: String,
    require: true,
  },
}).model("Recipe", RecipeSchema);

module.exports = RecipeSchema;
