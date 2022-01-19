import axios from "axios";
import React, { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Redirect } from "react-router";
import classes from "./Login.module.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  const submit = async () => {
    try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}api/Login`,
      {
        data: {
          email: email,
          password: password,
        },
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );
    console.log(response.data);
    history('/');
    }
    catch(error){
      console.log(error)
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
          <button className={classes.button}>
            Logga in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
