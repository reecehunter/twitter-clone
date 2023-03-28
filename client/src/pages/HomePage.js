import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import News from "../components/News/News";
import PageTitle from "../components/PageTitle/PageTitle";
import TweetForm from "../components/TweetForm/TweetForm";
import TweetFeed from "../components/TweetFeed/TweetFeed";

const HomePage = () => {
  const [feed, setFeed] = useState([
    {
      pfpLink: "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640",
      displayName: "Reece Hunter",
      username: "reece",
      text: "Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in",
      date: "",
    },
  ]);

  const fetchFeed = () => {
    // Fetch feed
  };

  return (
    <div className="layout">
      <Nav />
      <div className="content">
        <PageTitle title="Home" />
        <TweetForm />
        <TweetFeed feed={feed} />
      </div>
      <News />
    </div>
  );
};

export default HomePage;
