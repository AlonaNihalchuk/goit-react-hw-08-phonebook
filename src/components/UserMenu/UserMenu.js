import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import * as authOperations from "../../redux/Auth/authOperarions";
import defaultAvatar from "./default-avatar.png";

function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const avatar = defaultAvatar;

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
    },
    avatar: {
      marginRight: 4,
    },
    name: {
      fontWeight: 700,
      marginRight: 12,
    },
  };

  return (
    <div>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <img alt="" width="32" style={styles.avatar} />

      <span style={styles.name}>Welcome, {name}</span>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logoutUser())}
      >
        Logout
      </button>
    </div>
  );
}
export default UserMenu;
