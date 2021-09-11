import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import * as authOperations from "../../redux/Auth/authOperarions";
import defaultAvatar from "./default-avatar.png";

// import { authSelectors, authOperations } from "../../redux/auth";

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
// import React from "react";
// import { connect } from "react-redux";
// import { authSelectors, authOperations } from "../../redux/auth";
// import defaultAvatar from "./default-avatar.png";

// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//   },
//   avatar: {
//     marginRight: 4,
//   },
//   name: {
//     fontWeight: 700,
//     marginRight: 12,
//   },
// };

// const UserMenu = ({ avatar, name, onLogout }) => (
//   <div style={styles.container}>
//     <img src={avatar} alt="" width="32" style={styles.avatar} />
//     <span style={styles.name}>Welcome, {name}</span>
//     <button type="button" onClick={onLogout}>
//       Logout
//     </button>
//   </div>
// );
// const mapStateToProps = (state) => ({
//   name: authSelectors.getUsername(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
