import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
export default AppBar;
