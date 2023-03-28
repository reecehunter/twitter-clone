import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import UserIcon from "../Icons/UserIcon";
import GearIcon from "../Icons/GearIcon";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <PageTitle title="Twitter" />
      <div className="mt-2 mx-3">
        <div className={styles.navrow}>
          <UserIcon />
          <Link to="/home">Home</Link>
        </div>
        <div className={styles.navrow}>
          <GearIcon />
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
