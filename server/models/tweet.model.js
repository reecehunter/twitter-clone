const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Tweet content is required!"],
      minlength: [1, "Tweet content must be at least 1 character!"],
    },
    author: {
      type: String,
      required: [true, "An author is required! You shouldn't be seeing this error."],
    },
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet;
