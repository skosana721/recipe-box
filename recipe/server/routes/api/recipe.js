const recipeRoutes = (app) => {
  app.get("/recipe", (req, res) => {
    res.send("hello");
  });
};
module.exports = { recipeRoutes };
