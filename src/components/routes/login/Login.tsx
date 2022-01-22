import axios from "axios";
import React, { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  console.log(email, password);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}api/login?email=${email}&password=${password}`
      );
      history("/nyheter");
    } catch (error) {
      <div>
        <p>Du angav fel E-postadress eller lösenord</p>
      </div>;
    }
  };

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
