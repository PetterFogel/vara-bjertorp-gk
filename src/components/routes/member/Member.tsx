import React, { FC } from "react";
import { Link } from "react-router-dom";
import Divider from "../../UI/divider/Divider";
import classes from "./Member.module.css";

const Member: FC = () => {
  return (
    <section>
      <div className={classes.memberContainer}>
        <div className={classes.image}>
          <div className={classes.title}>Bli medlem</div>
        </div>
        <p className={classes.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sit
          architecto, inventore qui corporis totam labore facere impedit
          tempora, quis quidem cum, optio doloribus incidunt eum quam explicabo
          rem veritatis.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed
          earum fugit tenetur, non magnam, placeat ducimus error u
        </p>
      </div>
    </section>
  );
};

export default Member;
