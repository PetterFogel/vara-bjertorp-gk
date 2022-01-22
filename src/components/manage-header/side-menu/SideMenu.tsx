import { FC, useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import classes from "./SideMenu.module.css";
import MenuItem from "../menu-Item/MenuItem";
import { AdminContext } from "../../Contexts/adminContext";

interface SideMenuProps {
  onToggleMenuChange: () => void;
  isOpen: boolean;
}

const SideMenu: FC<SideMenuProps> = ({
  onToggleMenuChange,
  isOpen,
}: SideMenuProps) => {
  const currentClass = isOpen ? classes.sideMenuIn : classes.sideMenuOut;
  const context = useContext(AdminContext);

  return (
    <div className={currentClass}>
      <div>
        <IoCloseOutline
          className={classes.closeIcon}
          onClick={onToggleMenuChange}
        />
      </div>
      <ul className={classes.navList}>
        <MenuItem
          title="Boka Tid"
          url="/boka-starttid"
          onToggleMenuChange={onToggleMenuChange}
        />
        <MenuItem
          title="Nyheter"
          url="/nyheter"
          onToggleMenuChange={onToggleMenuChange}
        />
        <MenuItem
          title="Tävling"
          url="/tavling"
          onToggleMenuChange={onToggleMenuChange}
        />
        <MenuItem
          title="Galleri"
          url="/galleri"
          onToggleMenuChange={onToggleMenuChange}
        />
        <MenuItem
          title="Medlem"
          url="/medlem"
          onToggleMenuChange={onToggleMenuChange}
        />
        {!context.isLoggedIn ? (
          <MenuItem
            title="Logga in"
            url="/login"
            onToggleMenuChange={onToggleMenuChange}
          />
        ) : (
          <MenuItem
            title="Logga ut"
            url="/"
            onToggleMenuChange={context.logoutRequest}
          />
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
