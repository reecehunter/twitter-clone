const mongoose = require("mongoose");
require("dotenv").config();

const dbName = process.env.DB;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.byawr.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) => console.log("Error connecting to the database", err));
