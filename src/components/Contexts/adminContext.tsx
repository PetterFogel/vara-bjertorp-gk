import axios from "axios";
import { responseInterceptor } from "http-proxy-middleware";
import React, {
  createContext,
  FC,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

export interface Admin {
  email: string;
  password: string;
}

export interface Options {
  login: (userObject: Admin) => void;
  logout: () => void;
}

export const AdminContext = createContext<Options>({
  login: () => {},
  logout: () => {},
});

const AdminProvider: FC<{}> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<unknown>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const history = useNavigate();

  const userObject = {
    email: email,
    password: password,
  }

  const login = async (userObject: Admin) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}api/login?email=${email}&password=${password}`
      );
      history("/nyheter");
      setIsLoggedIn(true);
    } catch (error) {
      setError(error);
      <div>
        <p>Du angav fel E-postadress eller lösenord</p>
      </div>;
    }
  };

  const logout = async () => {
    console.log("Logout!");
  };

  const ContextValue: Options = {
    login,
    logout,
  };

  return (
    <AdminContext.Provider value={ContextValue}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
