const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { TweetSchema } = require("./tweet.model");

const UserSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "Display name is required!"],
      minlength: [3, "Display Name must be at least 3 characters!"],
    },
    username: {
      type: String,
      required: [true, "Username is required!"],
      unique: [true, "Username is already taken!"],
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
    tweets: [TweetSchema],
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
