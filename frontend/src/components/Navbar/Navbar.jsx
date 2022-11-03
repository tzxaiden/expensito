import React from "react";

//importing styles
import styles from "../styles/Containers/Navbar/Navbar.module.scss";

// importing components
import ListItemLink from "./ListItemLink";

// utils
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <div>Tracker</div>
        </Link>
      </div>

      {/* {Navbar} */}
      <nav>
        <ul>
          {/* {Home} */}
          <ListItemLink url="">
            <h3>Home</h3>
          </ListItemLink>

          {/* {Categories} */}
          <ListItemLink url="categories">
            <h3>Categories</h3>
          </ListItemLink>

          {/* {Transactions} */}
          <ListItemLink url="transactions">
            <h3>Transactions</h3>
          </ListItemLink>

          {/* {Wallet} */}
          <ListItemLink url="wallet">
            <h3>Wallet</h3>
          </ListItemLink>

          {/* {Profile} */}
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="profile">
              <h3>Profile</h3>
            </ListItemLink>
          </div>

          {/* {Settings} */}
          <div className={styles.mobileMenuLinks}>
            <ListItemLink url="settings">
              <h3>Settings</h3>
            </ListItemLink>
          </div>

          <ListItemLink url="logout" >  {/* clickHandler={logoutHandler} */}
            <h3>Logout</h3>
          </ListItemLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
