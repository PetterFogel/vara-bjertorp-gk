import { FC } from "react";
import classes from "./IntroContainer.module.css";

type IntroContainerProps = {
  title: string;
  imageUrl: string;
};

const IntroContainer: FC<IntroContainerProps> = ({ title, imageUrl }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <img
        className={classes.imageStyle}
        src={imageUrl}
        alt="backgroundimage"
      />
    </div>
  );
};

export default IntroContainer;
