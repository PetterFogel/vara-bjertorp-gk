import React, { FC } from "react";
import classes from "./Gallery.module.css";
import Divider from "../../UI/divider/Divider";

const Gallery: FC = () => {
  return (
    <section>
      <div className={classes.galleryContainer}>
        <h2 className={classes.title}>Galleri</h2>
        <div className={classes.container}>
          <div className={classes.imageContainerOne} id={classes.imageOne}>
          </div>
          <div className={classes.imageContainerOne}>
          </div>
        </div>
        <div className={classes.container}>
            <p className={classes.paragraph}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              similique vitae sint aut! Aspernatur vitae possimus, quo iste
              distinctio temporibus magni sapiente vero? Ea officiis nihil
              voluptatem neque veniam similique?
            </p>  
        </div>
      </div>
    </section>
  );
};

export default Gallery;
