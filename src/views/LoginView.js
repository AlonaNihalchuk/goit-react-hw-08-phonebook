import * as authOperations from "../redux/Auth/authOperarions";
import { useDispatch } from "react-redux";
import { useState } from "react";

function LoginView() {
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
    dispatch(authOperations.loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>It is LoginView</h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </>
  );
}
export default LoginView;
