import style from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors";
import * as actions from "../../redux/contacts/actions";
import { Button } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      // width: 200,
    },
    marginBottom: 15,
    // width: 320,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function Filter() {
  const value = useSelector(getFilter);

  const classes = useStyles();

  const dispatch = useDispatch();
  return (
    <form className={classes.root}>
      {/* <TextField
        id="filled-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      /> */}

      <TextField
        fullWidth
        // required
        className={clsx(classes.margin)}
        id="outlined-basic"
        label="Find contact by name"
        variant="outlined"
        type="text"
        name="name"
        value={value}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      {/* <Button
        className={clsx(classes.margin)}
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SearchIcon />}
      >
        search
      </Button> */}
    </form>
  );
}

export default Filter;
