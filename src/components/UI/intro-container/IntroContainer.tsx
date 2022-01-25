import { FC } from "react";
import classes from "./IntroContainer.module.css";
import image from "../../../assets/DJI_0169_sign.jpg";

type IntroContainerProps = {
  title: string;
  imageUrl: string;
};

const IntroContainer: FC<IntroContainerProps> = ({ title }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{title}</h1>
      <img className={classes.imageStyle} src={image} alt="" />
    </div>
  );
};

export default IntroContainer;
