import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav/Nav";
import News from "../components/News/News";
import PageTitle from "../components/PageTitle/PageTitle";
import TweetFeed from "../components/TweetFeed/TweetFeed";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";

const ProfilePage = () => {
  const [userData, setUserData] = useState({ pfpLink: "", displayName: "", username: "" });
  const [feed, setFeed] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null) return navigate("/login");
    axios
      .get("http://localhost:8080/api/users/isAuthenticated", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setUserData(res.data))
      .catch((err) => navigate("/login"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userData.username}`)
      .then((res) => {
        if (!res.data.tweets) return;
        const feedData = res.data.tweets.map((t) => ({ ...t, pfpLink: userData.pfpLink, username: userData.username, displayName: userData.displayName }));
        setFeed(feedData.reverse());
      })
      .catch((err) => console.log(err));
  }, [userData]);

  return (
    <div className="layout">
      <Nav />
      <div className="content">
        <PageTitle title="Profile" />
        <ProfileInfo pfpLink={userData.pfpLink} displayName={userData.displayName} username={userData.username} />
        <TweetFeed feed={feed} />
      </div>
      <News />
    </div>
  );
};

export default ProfilePage;
