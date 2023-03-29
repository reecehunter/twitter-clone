const { Tweet } = require("../models/tweet.model");
const User = require("../models/user.model");

module.exports.findAll = (req, res) => {
  Tweet.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOne = (req, res) => {
  Tweet.findOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.createOne = (req, res) => {
  Tweet.create(req.body)
    .then((result) => {
      User.findOneAndUpdate({ username: req.body.author }, { $push: { tweets: result } })
        .then((result2) => {
          const tweetData = {
            pfpLink: result2.pfpLink,
            displayName: result2.displayName,
            username: result2.username,
            text: result.text,
            createdAt: result.createdAt,
          };
          res.json(tweetData);
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.updateOne = (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteOne = (req, res) => {
  Tweet.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: `Deleted tweet with id: ${req.params.id}` }))
    .catch((err) => res.status(400).json(err));
};
