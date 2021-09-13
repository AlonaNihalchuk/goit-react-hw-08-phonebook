import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/selectors";
import * as actions from "../../redux/contacts/actions";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    marginBottom: 15,
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
      <TextField
        fullWidth
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
    </form>
  );
}

export default Filter;
