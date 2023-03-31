const NewsController = require("../controllers/news.controller");

module.exports = (app) => {
  app.get("/api/news", NewsController.fetch);
};
