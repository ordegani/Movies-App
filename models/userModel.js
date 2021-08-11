const mongoose = require("mongoose");
require("dotenv").config();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const SALT = 10;
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: string,
    required: true,
    unique: true,
    trim: true,
  },
});

// userSchema.pre("save", function (next) {
//     var user = this;
//     if (user.isModified("password")) {
//     bcrypt.genSalt(SALT, function (err, salt) {
//     if (err) return next(err)
//     bcrypt.hash(user.password, salt, function (err, hash) {
//     if (err) return next(err)
//     user.password = hash;
//     next();
//    });
//    });
//    } else {
//     next();
//     }
//    });
//    userSchema.methods.comparePassword = function (candidatePassword, callBack) {
//     bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
//     if (err) return callBack(err);
//     callBack(null, isMatch);
//    });
//    }
//    userSchema.methods.generateToken = function (callBack) {
//     var user = this;
//     var token = jwt.sign(user._id.toHexString(), process.env.SECRETE);
//     user.token = token;
//     user.save(function (err, user) {
//     if (err) return callBack(err)
//     callBack(null, user)
//    });
//    };
//    userSchema.statics.findByToken = function (token, callBack) {
//     var user = this;
//     jwt.verify(token, process.env.SECRETE, function (err, decode) {//this decode must give user_id if token is valid .ie decode=user_id

//     user.findOne({ "_id": decode, "token": token }, function (err, user) {
//     if (err) return callBack(err);
//     callBack(null, user);
//     });
//    });
//    };

const User = mongoose.model("User", userSchema);

module.exports = User;
