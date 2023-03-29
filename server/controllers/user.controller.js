const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

module.exports.findAll = (req, res) => {
  User.find()
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOne = (req, res) => {
  User.findOne({ username: req.params.username })
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
        const user = { displayName: result.displayName, username: result.username, _id: result._id };
        const token = jwt.sign(user, jwtSecret, { expiresIn: "1d" });
        return res.json({ token: token, user: result });
      });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports.isAuthenticated = (req, res) => {
  fetchByUserToken(req)
    .then((user) => {
      res.json(user);
    })
    .catch((e) => res.status(403));
};

const fetchByUserToken = (req) => {
  return new Promise((resolve, reject) => {
    if (req.headers && req.headers.authorization) {
      const authorization = req.headers.authorization;
      let decoded;

      try {
        decoded = jwt.verify(authorization, jwtSecret);
      } catch (err) {
        reject("Invalid token");
        return;
      }

      let userId = decoded._id;
      User.findOne({ _id: userId })
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject("Token error");
        });
    } else {
      reject("No token found");
    }
  });
};

module.exports.createOne = async (req, res) => {
  User.create(req.body)
    .then((result) => {
      const user = { displayName: result.displayName, username: result.username, _id: result._id };
      res.json(jwt.sign(user, jwtSecret));
    })
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
