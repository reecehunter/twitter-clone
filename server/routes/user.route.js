const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.findAll);
  app.get("/api/users/isAuthenticated", UserController.isAuthenticated);
  app.post("/api/users/login", UserController.login);
  app.get("/api/users/:username", UserController.findOne);
  app.post("/api/users/tweet/:id", UserController.updateOne);
  app.post("/api/users", UserController.createOne);
  app.delete("/api/users/:id", UserController.deleteOne);
};
