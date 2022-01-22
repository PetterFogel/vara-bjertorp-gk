import axios from "axios";
import React, { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const userObject = {
    email: email, 
    password: password
  }

  const submit = async (userObject: Object) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/Login`,
        userObject,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      history("/");
    } catch (error) {
      console.log(error);
      <div>
        <p>Den angav fel E-postadress eller lösenord</p>
      </div>;
    }
  };

  return (
    <section>
      <div className={classes.mainContainer}>
        <form className={classes.inputContainer}>
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
          <button onClick={submit} className={classes.button}>Logga in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
