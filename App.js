//backend only
const express = require("express");
const mongoose = require("mongoose");
const setupController = require("./controllers/setupControllers");
const apicontroller = require("./controllers/apiControllers");

const app = express();

const port = process.env.PORT || 5000;

const uri = "";

app.use(express.json());

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("MOVIES APP!");
});

setupController(app);
apicontroller(app);

app.listen(port, () => console.log("app is running on port: " + port));
