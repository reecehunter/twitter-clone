const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Display name is required!"],
    minlength: [3, "Display Name must be at least 3 characters!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    minlength: [3, "Username must be at least 3 characters!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minlength: [7, "Password must be at least 7 characters!"],
  },
  pfpLink: {
    type: String,
    default: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
  },
  headerLink: {
    type: String,
    default: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640https://pbs.twimg.com/media/DCU4xoLVwAAJWhH.jpg",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
