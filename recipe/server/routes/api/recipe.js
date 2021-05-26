const recipeRoutes = (app) => {
  app.get("/api/recipe", (req, res) => {
    res.send("hello");
  });
};
module.exports = { recipeRoutes };
