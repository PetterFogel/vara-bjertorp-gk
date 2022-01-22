import { Component, createContext } from "react";
import axios from "axios";

export interface SessionUser {
  email: string;
}

interface State {
  emailLogin: string;
  passwordLogin: string;
  isLoggedIn: boolean;
  loginError: boolean;
  errorTxt: string;
  admin: boolean;
}

interface ContextProps extends State {
  handleEmailLogin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordLogin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  logoutRequest: () => void;
  loginRequest: () => Promise<boolean>;
}

export const AdminContext = createContext<ContextProps>({
  emailLogin: "",
  passwordLogin: "",
  isLoggedIn: false,
  loginError: false,
  errorTxt: "",
  admin: false,
  handleEmailLogin: () => {},
  handlePasswordLogin: () => {},
  loginRequest: () => Promise.resolve(true),
  logoutRequest: () => {},
});

class AdminProvider extends Component<{}, State> {
  handleEmailLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ emailLogin: event.target.value });
  };

  handlePasswordLoginInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ passwordLogin: event.target.value });
  };

  handleLoginRequest = async () => {
    try {
      const userLogin = {
        email: this.state.emailLogin,
        password: this.state.passwordLogin,
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}api/login?email=${userLogin.email}&password=${userLogin.password}`
      );
      this.setState({ isLoggedIn: true });
      this.setState({ loginError: false });
      return true;
    } catch (error) {
      this.setState({ loginError: true });
      this.setState({ errorTxt: "Felaktig e-postadress eller lösenord" });
      return false;
    }
  };

  handleLogoutRequest = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/logout`);
      this.setState({ isLoggedIn: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <AdminContext.Provider
        value={{
          ...this.state,
          handleEmailLogin: this.handleEmailLoginInput,
          handlePasswordLogin: this.handlePasswordLoginInput,
          loginRequest: this.handleLoginRequest,
          logoutRequest: this.handleLogoutRequest,
        }}
      >
        {this.props.children}
      </AdminContext.Provider>
    );
  }
}

export default AdminProvider;
