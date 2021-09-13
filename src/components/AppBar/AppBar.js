import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import * as authSelectors from "../../redux/Auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";
import AppBarr from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const classes = useStyles();

  return (
    <AppBarr position="static">
      <Toolbar className={styles.header}>
        <Typography variant="h6" className={classes.title}>
          <Navigation />
        </Typography>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBarr>
  );
}
export default AppBar;
