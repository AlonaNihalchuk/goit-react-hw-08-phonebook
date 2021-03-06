import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import * as authOperations from "../../redux/Auth/authOperarions";
import defaultAvatar from "./default-avatar.png";
import styles from "./UserMenu.module.css";
import { Button } from "@material-ui/core";

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="contained"
        size="small"
        type="button"
        onClick={() => dispatch(authOperations.logoutUser())}
      >
        Logout
      </Button>
    </div>
  );
}
export default UserMenu;
