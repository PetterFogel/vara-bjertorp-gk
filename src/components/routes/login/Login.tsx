import axios from "axios";
import React, { FC, SyntheticEvent, useState } from "react";
// import { Redirect } from "react-router";
import classes from "./Login.module.css";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [redirect, setRedirect] = useState(false);

  // const submit = async (e: SyntheticEvent) => {
  //   const response = await axios.post(
  //     `${process.env.REACT_APP_API_URL}api/login`,
  //     {
  //       email: email,
  //       password: password,
  //     }
  //   );
  //   console.log(response);

  //   // setRedirect(true);
  // };

  const submit = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}api/login`,
      {
        headers: {
          "content-type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      }
    );
    console.log(response)
  };

  // if (redirect) {
  //   // return <Redirect to="/"/>
  // }

  return (
    <section>
      <div className={classes.mainContainer}>
        <form onSubmit={submit} className={classes.inputContainer}>
          <h2 className={classes.loginTitle}>Logga in</h2>
          <input
            type="email"
            placeholder="E-mail..."
            className={classes.input}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Lösenonord..."
            className={classes.input}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button className={classes.button}>Logga in</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
