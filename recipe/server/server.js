const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const { recipeRoutes } = require("./routes/api/recipe");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
recipeRoutes(app);
app.listen(4000, () => console.log(`Server is running on port 4000...`));
