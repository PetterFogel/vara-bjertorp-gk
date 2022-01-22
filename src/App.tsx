import { useState } from "react";
import "./App.css";
import AdminProvider from "./components/Contexts/adminContext";
import Header from "./components/layout/header/Header";
import Pages from "./components/layout/pages/Pages";
import SideMenu from "./components/manage-header/side-menu/SideMenu";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuTogglerHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AdminProvider>
      <Header onToggleMenuChange={menuTogglerHandler} />
      <SideMenu onToggleMenuChange={menuTogglerHandler} isOpen={isOpen} />
      <main className="main">
        <Pages />
      </main>
    </AdminProvider>
  );
}

export default App;
