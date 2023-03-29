const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

module.exports.findAll = (req, res) => {
  console.log("Finding all");
  User.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOne = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((result) => {
      if (result) res.json(result);
      else res.status(400).json(err);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.login = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .then((result) => {
      result.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) return res.status(401).json("Invalid login credentials.");
        return res.json(jwt.sign({ displayName: result.displayName, username: result.username, _id: result._id }, jwtSecret));
      });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.createOne = async (req, res) => {
  User.create(req.body)
    .then((result) => res.json(jwt.sign({ displayName: result.displayName, username: result.username, _id: result._id }, jwtSecret)))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateOne = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteOne = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: `Deleted user with id: ${req.params.id}` }))
    .catch((err) => res.status(400).json(err));
};
