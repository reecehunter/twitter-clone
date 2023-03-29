import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav/Nav";
import News from "../components/News/News";
import PageTitle from "../components/PageTitle/PageTitle";
import TweetForm from "../components/TweetForm/TweetForm";
import TweetFeed from "../components/TweetFeed/TweetFeed";

const HomePage = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users")
      .then((res) => {
        console.log(res.data);
        const feedData = [];
        for (const user of res.data) {
          for (const tweet of user.tweets) {
            feedData.push({ pfpLink: user.pfpLink, username: user.username, displayName: user.displayName, text: tweet.text, createdAt: tweet.createdAt });
          }
        }
        // TODO: Sort by createdAt
        setFeed(feedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="layout">
      <Nav />
      <div className="content">
        <PageTitle title="Home" />
        <TweetForm feed={feed} setFeed={setFeed} />
        <TweetFeed feed={feed} />
      </div>
      <News />
    </div>
  );
};

export default HomePage;
