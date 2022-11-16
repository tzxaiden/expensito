import React from "react";

//Styles
import styles from "../styles/Containers/Navbar/MobileNavbar.module.scss";
import { FaTimes, FaBars } from "react-icons/fa";

// Components

import ListItemLink from "./ListItemLink";

/// Utils

import { useState, useEffect } from "react";

const MobileNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <div className={styles.container}>
      <div>
        {/* BARSS */}
        <div
          className={`${styles.iconContainer} ${styles.bars}`}
          onClick={() => setNavOpen(true)}
        >
          <FaBars />
        </div>

        {/* NAVBAR */}
        <nav className={navOpen ? styles.navActive : undefined}>
            <ul>
              <div
                className={`${styles.iconContainer} ${styles.times}`}
                onClick={() => setNavOpen(false)}
              >
                <FaTimes />
              </div>

          {/* MENU */}
             {/* HOME */}
             <ListItemLink
                url=""
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Home</h3>
              </ListItemLink>

              {/* CATEGORIES */}
              <ListItemLink
                url="categories"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Categories</h3>
              </ListItemLink>

              {/* TRANSACTIONS */}
              <ListItemLink
                url="transactions"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Transactions</h3>
              </ListItemLink>

              {/* Wallet */}
              <ListItemLink
                url="wallet"
                optionClass={styles.linkColor}
                clickHandler={closeNav}
              >
                <h3>Wallet</h3>
              </ListItemLink>

              {/* Profile */}
              <div className={styles.mobileMenuLinks}>
                <ListItemLink
                  url="profile"
                  optionClass={styles.linkColor}
                  clickHandler={closeNav}
                >
                  <h3>Profile</h3>
                </ListItemLink>
              </div>

              {/* Settings */}
              <div className={styles.mobileMenuLinks}>
                <ListItemLink
                  url="settings"
                  optionClass={styles.linkColor}
                  clickHandler={closeNav}
                >
                  <h3>Settings</h3>
                </ListItemLink>
              </div>

              {/* AUTH MENU */}
              <ListItemLink
                url="logout"
                // clickHandler={logoutHandler}
                optionClass={styles.linkColor}
              >
                <h3>Logout</h3>
              </ListItemLink>
        </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
