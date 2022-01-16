import React, { createContext, useState } from "react";

// export interface Admin {
//   id: string;
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
//   const login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [redirect, setRedirect] = useState(false);
//   };

//   return (
//     <AdminContext.Provider value={(login, logout)}>
//       {children}
//     </AdminContext.Provider>
//   );
// };

// export default AdminProvider;