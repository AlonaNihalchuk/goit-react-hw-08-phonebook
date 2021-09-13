import * as authOperations from "../../redux/Auth/authOperarions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./RegisterView.module.css";
import { Button } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    width: 320,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    width: 100,
    margin: theme.spacing(1),
  },
}));

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        return setName(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Please sign up</h1>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        // className={styles.registerForm}
        autoComplete="off"
      >
        {/* <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      > */}
        <TextField
          className={clsx(classes.margin)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <TextField
          className={clsx(classes.margin)}
          id="outlined-basic2"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          className={clsx(classes.margin)}
          id="outlined-basic3"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        {/* <label className={styles.registerLabel}>
          Name*
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.registerLabel}>
          Email*
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.registerLabel}>
          Password*
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label> */}
        <Button
          type="submit"
          variant="contained"
          size="medium"
          className={classes.button}
        >
          Sign up
        </Button>

        {/* <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button> */}
      </form>
    </div>
  );
}
export default RegisterView;
