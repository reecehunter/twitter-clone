const UserController = require("../controllers/user.controller");

module.exports = (app) => {
  app.get("/api/users", UserController.findAll);
  app.get("/api/users/:id", UserController.findOne);
  app.put("/api/users/:id", UserController.updateOne);
  app.post("/api/users", UserController.createOne);
  app.delete("/api/users/:id", UserController.deleteOne);
};
