import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./MenuItem.module.css";

interface MenuItemProps {
  title: string;
  url: string;
  onToggleMenuChange: () => void;
}

const MenuItem: FC<MenuItemProps> = ({
  title,
  url,
  onToggleMenuChange,
}: MenuItemProps) => {
  return (
    <Link to={url} className={classes.listItem} onClick={onToggleMenuChange}>
      {title}
    </Link>
  );
};

export default MenuItem;
