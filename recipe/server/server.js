const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(4000, () => console.log(`Server is running on port 4000...`));
