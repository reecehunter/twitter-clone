import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import News from "../components/News/News";
import PageTitle from "../components/PageTitle/PageTitle";
import TweetFeed from "../components/TweetFeed/TweetFeed";
import TweetForm from "../components/TweetForm/TweetForm";

const ProfilePage = () => {
  const [feed, setFeed] = useState([{}]);

  useEffect(() => {
    // Get user by jwt token
    console.log(localStorage.getItem("user"));
    // Fetch all tweets by user
  }, []);

  return (
    <div className="layout">
      <Nav />
      <div className="content">
        <PageTitle title="Profile" />
        <TweetForm />
        <TweetFeed feed={feed} />
      </div>
      <News />
    </div>
  );
};

export default ProfilePage;
