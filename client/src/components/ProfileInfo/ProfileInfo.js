import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  const { pfpLink, displayName, username } = props;

  return (
    <div className={styles.container}>
      <div className={styles.banner}></div>
      <div className={styles.subcontainer}>
        <img className={styles.pfp} src={pfpLink} />
        <h3>{displayName}</h3>
        <p className="text-secondary">@{username}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
