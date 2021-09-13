import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/selectors";
import { addContactOperacion } from "../../redux/contacts/operations";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    width: 340,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    width: 120,
    margin: theme.spacing(1),
  },
}));

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleNameChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    // const newContact = { name, number, id };

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContactOperacion({ name, number, id }));

    formReset();
  };

  return (
    <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        helperText="Name"
        className={clsx(classes.margin)}
        id="outlined-basic"
        label={<AccountCircleIcon />}
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <TextField
        fullWidth
        helperText="Phone"
        className={clsx(classes.margin)}
        id="outlined-basic2"
        label={<PhoneIcon />}
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleNameChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифер и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<SaveAltIcon />}
      >
        Save
      </Button>
    </form>
  );
}

export default Form;
