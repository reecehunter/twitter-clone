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
        <Link to="/home">
          <div className={styles.navrow}>
            <UserIcon />
            Home
          </div>
        </Link>

        <Link to="/profile">
          <div className={styles.navrow}>
            <GearIcon />
            Profile
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
