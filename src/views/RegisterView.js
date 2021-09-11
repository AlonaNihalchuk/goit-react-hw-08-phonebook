import * as authOperations from "../redux/Auth/authOperarions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const styles = {
    form: {
      width: 320,
    },
    label: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 15,
    },
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
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

  // const handleChange = (e) => {
  //   switch (e.target.name) {
  //     case "name":
  //       return setName(e.target.value);
  //     case "email":
  //       return setEmail(e.target.value);
  //     case "password":
  //       return setPassword(e.target.value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.registerUser({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>It is RegisterView</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Имя*
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label style={styles.label}>
          Почта*
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label style={styles.label}>
          Пароль*
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}
export default RegisterView;
