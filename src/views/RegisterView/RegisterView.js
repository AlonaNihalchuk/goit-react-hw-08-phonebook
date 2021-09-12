import * as authOperations from "../../redux/Auth/authOperarions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./RegisterView.module.css";

function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
    <>
      <h1>It is RegisterView</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.registerForm}
        autoComplete="off"
      >
        <label className={styles.registerLabel}>
          Имя*
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.registerLabel}>
          Почта*
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.registerLabel}>
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
