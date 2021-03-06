const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const path = require ('path');
const usersRouter = require('./routes/userRoute');
// const setupController = require("./controller/authControllers");

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(express.json());

const uri ="mongodb+srv://or:test@cluster0.jkazr.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// app.get("/", (req, res) => {
//   res.send("MOVIES APP!");
// });

// setupController(app);
// apicontroller(app);

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/users', usersRouter);
//  const { auth } = require("./middleware/auth")
//  const { RegisterUser, LoginUser, LogoutUser,getUserDetails } = require('./controller/authControllers');
//  app.post("/api/users/register",RegisterUser);
//  app.post("/api/users/login",LoginUser);
//  app.get("/authentication",auth,getUserDetails);
//  app.get("/uthentication", auth, LogoutUser);

app.listen(port, () => console.log("app is running on port: " + port));
