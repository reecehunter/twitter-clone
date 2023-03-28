import React from "react";
import styles from "./TweetForm.module.css";

const TweetForm = () => {
  return (
    <form className={styles.form}>
      <textarea className={styles.input} placeholder="What's happening?"></textarea>
      <input className={`btn btn-primary ${styles.button}`} value="Tweet" />
    </form>
  );
};

export default TweetForm;
