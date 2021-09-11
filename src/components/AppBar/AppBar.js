import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsisLoggedIn);

  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #2A363B",
    },
  };

  return (
    <header style={styles.header}>
      <Navigation />
      {/* <UserMenu />
      <AuthNav /> */}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}/
    </header>
  );
}
export default AppBar;
