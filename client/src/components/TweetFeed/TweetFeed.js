import React from "react";
import Tweet from "../Tweet/Tweet";

const TweetFeed = (props) => {
  const { feed } = props;

  return (
    <div>
      {feed.map((tweet, index) => (
        <div key={index}>
          <Tweet pfpLink={tweet.pfpLink} displayName={tweet.displayName} username={tweet.username} text={tweet.text} />
        </div>
      ))}
    </div>
  );
};

export default TweetFeed;
