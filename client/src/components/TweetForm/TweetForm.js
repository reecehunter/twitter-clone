import React from "react";
import axios from "axios";
import styles from "./TweetForm.module.css";

const TweetForm = (props) => {
  const { feed, setFeed } = props;

  const postTweet = (e) => {
    e.preventDefault();

    const data = {
      text: e.target[0].value,
      author: "reece",
    };

    axios
      .post(`http://localhost:8080/api/tweets`, data)
      .then((res) => {
        console.log("#");
        console.log(res);
        e.target[0].value = "";
        setFeed([res.data, ...feed]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className={styles.form} onSubmit={(e) => postTweet(e)}>
      <textarea className={styles.input} placeholder="What's happening?"></textarea>
      <input type="submit" className={`btn btn-primary ${styles.button}`} defaultValue="Tweet" />
    </form>
  );
};

export default TweetForm;
