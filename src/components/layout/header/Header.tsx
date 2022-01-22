import { FC, useEffect, useState } from "react";
import classes from "./Header.module.css";
import logoImg from "../../../assets/small-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdCreate } from "react-icons/md";

interface HeaderProps {
  onToggleMenuChange: () => void;
}

const Header: FC<HeaderProps> = ({ onToggleMenuChange }: HeaderProps) => {
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  const checkPathHandler = () => {
    if (offset <= 50) return true;
    return false;
  };

  const activeClass = checkPathHandler()
    ? classes.transparentHeader
    : classes.colorHeader;

  return (
    <header className={[classes.header, activeClass].join(" ")}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.logoHolder}>
          <img src={logoImg} alt="logo" className={classes.img} />
          <h3 className={classes.logo}>Vara-Bjertop GK</h3>
        </div>
      </Link>
      <nav className={classes.nav}>
        <MdCreate
          className={classes.postIcon}
          size={30}
          onClick={() => navigate("/create-posts")}
        />
        <div className={classes.burgerMenu} onClick={onToggleMenuChange}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
