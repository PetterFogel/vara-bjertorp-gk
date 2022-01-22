import React, { FC, SyntheticEvent, useContext, useState } from "react";
import { AdminContext } from "../../Contexts/adminContext";
import classes from "./Login.module.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminContext = useContext(AdminContext);

  const userObject = {
    email: email,
    password: password,
  }

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    adminContext.login(userObject);
  }

  return (
    <section>
      <div className={classes.mainContainer}>
        <form onSubmit={submit} className={classes.inputContainer}>
          <h2 className={classes.loginTitle}>Logga in</h2>
          <input
            required
            type="email"
            placeholder="E-mail..."
            className={classes.input}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <input
            required
            type="password"
            placeholder="Lösenonord..."
            className={classes.input}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button type="submit" className={classes.button}>
            Logga in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
