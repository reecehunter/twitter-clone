const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.NEWS_API_KEY;

let newsCache = [];

module.exports.fetch = (req, res) => {
  res.json(newsCache);
};

const cacheNews = async () => {
  try {
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    newsCache = res.data.articles;
  } catch (err) {
    console.log(err);
  }
  return newsCache;
};

cacheNews();
setTimeout(() => cacheNews, 600 * 1000); // 10 minutes
