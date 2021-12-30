import { FC } from "react";
import classes from "./Divider.module.css";

interface DividerProps {
  title: string;
}

const Divider: FC<DividerProps> = ({ title }: DividerProps) => {
  return (
    <div className={classes.dividerContainer}>
      <div className={classes.dividerBar}></div>
      <h2 className={classes.dividerTitle}>{title}</h2>
      <div className={classes.dividerBar}></div>
    </div>
  );
};

export default Divider;
