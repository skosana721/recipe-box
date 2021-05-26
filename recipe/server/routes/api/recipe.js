const Recipe = require("../../model/recipe");

const recipeRoutes = (app) => {
  app.get("/api/recipe", async (req, res) => {
    try {
      const results = await Recipe.find();
      res.status(200).send(results);
    } catch (error) {
      res.status(404).send(error);
    }
  });
  app.post("/api/recipe", async (req, res) => {
    const { recipe, ingredients } = req.body;
    try {
      const newRecipe = await Recipe({
        recipe,
        ingredients,
      }).save();
      res.status(201).send(newRecipe);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.delete("/api/recipe/:id", async (req, res) => {
    try {
      const recipe = await Recipe.findById({ _id: req.params.id });
      const deletedRecipe = await recipe.deleteOne();
      res.status(200).send(deletedRecipe);
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
module.exports = { recipeRoutes };
