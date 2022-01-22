import axios from "axios";
// import React, { createContext, FC, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export interface Admin {
//   id: string;
//   email: string;
//   password: string;
// }

// export interface Options {
//   login: () => void;
//   logout: () => void;
// }

// export const AdminContext = createContext<Options>({
//   login: () => {},
//   logout: () => {},
// });

// const AdminProvider: FC<{}> = ({ children }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const history = useNavigate();

//   const login = async () => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}api/Login`,
//         {
//           data: {
//             email: email,
//             password: password,
//           },
//         },
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//           },
//         }
//       );
//       console.log(response.data);
//       history("/");
//     } catch (error) {
//       console.log(error);
//       <div>
//         <p>Den angav fel E-postadress eller lösenord</p>
//       </div>;
//     }
//   };

//   return (
//     <AdminContext.Provider value={{ login, logout }}>
//       {children}
//     </AdminContext.Provider>
//   );
// };

// export default AdminProvider;
