import { FC } from "react";
import classes from "./Header.module.css";
import logoImg from "../../../assets/small-logo.png";
import { Link } from "react-router-dom";

interface HeaderProps {
  onToggleMenuChange: () => void;
}

const Header: FC<HeaderProps> = ({ onToggleMenuChange }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.logoHolder}>
          <img src={logoImg} alt="logo" className={classes.img} />
          <h3 className={classes.logo}>Vara-Bjertop GK</h3>
        </div>
      </Link>
      <div className={classes.burgerMenu} onClick={onToggleMenuChange}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;