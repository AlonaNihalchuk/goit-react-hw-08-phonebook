import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import styles from "./Navigation.module.css";

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
