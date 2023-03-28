const User = require("../models/user.model");

module.exports.findAll = (req, res) => {
  User.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOne = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.createOne = (req, res) => {
  User.create(req.body)
    .then((result) => res.json(result))
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
