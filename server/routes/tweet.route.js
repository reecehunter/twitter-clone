const TweetController = require("../controllers/tweet.controller");

module.exports = (app) => {
  app.get("/api/tweets", TweetController.findAll);
  app.get("/api/tweets/:id", TweetController.findOne);
  app.put("/api/tweets/:id", TweetController.updateOne);
  app.post("/api/tweets", TweetController.createOne);
  app.delete("/api/tweets/:id", TweetController.deleteOne);
};
