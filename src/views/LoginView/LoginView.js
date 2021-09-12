import * as authOperations from "../../redux/Auth/authOperarions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import styles from "./LoginView.module.css";

function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
    <>
      <h1>It is LoginView</h1>
      <form
        onSubmit={handleSubmit}
        className={styles.loginForm}
        autoComplete="off"
      >
        <label className={styles.loginLabel}>
          Почта*
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>

        <label className={styles.loginLabel}>
          Пароль*
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </>
  );
}
export default LoginView;
