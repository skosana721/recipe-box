const recipeRoutes = (app) => {
  app.get((req, res) => {
    res.send("hello");
  });
};
module.exports = { recipeRoutes };
