import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HomeView.module.css";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  },
}));

function HomeView() {
  const classes = useStyles();

  return (
    <div className={styles.homeContainer}>
      <Typography bold="true" variant="h3" className={classes.title}>
        Welcome!
      </Typography>
    </div>
  );
}
export default HomeView;
