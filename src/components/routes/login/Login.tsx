import React, {
  ChangeEvent,
  FC,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../Contexts/adminContext";
import classes from "./Login.module.css";

const Login: FC = () => {
  const {
    handleEmailLogin,
    handlePasswordLogin,
    loginRequest,
    loginError,
    errorTxt,
  } = useContext(AdminContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const history = useNavigate();

  const handleEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setEmailError("Field cannot be empty");
    } else {
      setEmailError("");
      handleEmailLogin(e);
    }
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPasswordError("Field cannot be empty");
    } else {
      setPasswordError("");
      handlePasswordLogin(e);
    }
  };

  const handleLoginClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const loggedIn = await loginRequest();
    if (loggedIn) {
      history("/nyheter");
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
            onChange={handleEmailInput}
          />

          <input
            required
            type="password"
            placeholder="Lösenonord..."
            className={classes.input}
            onChange={handlePasswordInput}
          />
          {loginError ? (
            <div style={{marginTop: "1rem"}}>
              <p style={{ color: "#ff1f5a" }}>{errorTxt}</p>
            </div>
          ) : (
            <></>
          )}
          <button onClick={handleLoginClick} className={classes.button}>
            Logga in
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
