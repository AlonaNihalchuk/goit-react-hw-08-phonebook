import * as authOperations from "../../redux/Auth/authOperarions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./LoginView.module.css";
import { Button } from "@material-ui/core";

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: 340,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    width: 100,
    margin: theme.spacing(1),
  },
}));

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Please Login</h1>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          className={clsx(classes.margin)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          className={clsx(classes.margin)}
          id="outlined-basic2"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit" className={classes.button}>
          login
        </Button>
      </form>
    </div>
  );
}
export default LoginView;
