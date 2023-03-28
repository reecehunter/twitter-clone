import React, { useState, useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";
import Tweet from "../Tweet/Tweet";
import styles from "./News.module.css";

const News = () => {
  const [news, setNews] = useState([
    {
      displayName: "Example news 1",
      username: "CNN",
      pfpLink: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
      text: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in",
    },
    {
      displayName: "Example news 2",
      username: "CNN",
      pfpLink: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
      text: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in",
    },
    {
      displayName: "Example news 3",
      username: "CNN",
      pfpLink: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
      text: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in",
    },
  ]);

  useEffect(() => {
    // Fetch news
  }, []);

  return (
    <div>
      <PageTitle title="News" />
      {news.map((article, index) => (
        <Tweet key={index} pfpLink={article.pfpLink} displayName={article.displayName} username={article.username} text={article.text} />
      ))}
    </div>
  );
};

export default News;
