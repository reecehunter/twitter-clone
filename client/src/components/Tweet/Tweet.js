import React from "react";
import styles from "./Tweet.module.css";

const Tweet = (props) => {
  const { pfpLink, displayName, username, text, date } = props;
  return (
    <div className={styles.tweet}>
      <div className="mb-3">
        <img className="feed-pfp" src={pfpLink} />
        <div className={`d-flex flex-column`}>
          <p>{displayName}</p>
          <p>@{username}</p>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Tweet;
