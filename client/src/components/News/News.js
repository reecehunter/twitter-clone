import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";
import Tweet from "../Tweet/Tweet";
import styles from "./News.module.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/news")
      .then((res) => {
        console.log(res.data);
        setNews(res.data.filter((a) => a.content !== null && a.source.id !== null));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <PageTitle title="News" />
      {news.map((article, index) => (
        <a key={index} href={article.url} className="link-no-decoration" rel="noreferrer" target="_blank">
          <Tweet pfpLink={article.urlToImage} displayName={article.source.name} username={article.source.id} text={article.content.split("…")[0] + "..."} />
        </a>
      ))}
    </div>
  );
};

export default News;
