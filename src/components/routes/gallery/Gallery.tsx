import React, { FC } from "react";
import classes from "./Gallery.module.css";
import Divider from "../../UI/divider/Divider";

const Gallery: FC = () => {
  return (
    <section>
      <div className={classes.galleryContainer}>
        <h2 className={classes.title}>Galleri</h2>
        <div className={classes.container}>
          <div className={classes.imageContainer} id={classes.imageOne}></div>
          <div className={classes.imageContainer} id={classes.imageTwo}></div>
        </div>
        <div className={classes.infoContainer}>
          <Divider title={"Golfbanan"}></Divider>
          <p className={classes.paragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            similique vitae sint aut! Aspernatur vitae possimus, quo iste
            distinctio temporibus magni sapiente vero? Ea officiis nihil
            voluptatem neque veniam similique?
          </p>
        </div>
        <div className={classes.container}>
          <div className={classes.imageContainer} id={classes.imageThree}></div>
          <div className={classes.imageContainer} id={classes.imageFour}></div>
        </div>
        <div className={classes.infoContainer}>
          <Divider title={"Restaurangen"}></Divider>
          <p className={classes.paragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            similique vitae sint aut! Aspernatur vitae possimus, quo iste
            distinctio temporibus magni sapiente vero? Ea officiis nihil
            voluptatem neque veniam similique?
          </p>
        </div>
        <div className={classes.container}>
          <div className={classes.imageContainer} id={classes.imageFive}></div>
          <div className={classes.imageContainer} id={classes.imageSix}></div>
        </div>
        <div className={classes.infoContainer}>
          <Divider title={"Slottet"}></Divider>
          <p className={classes.paragraph}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            similique vitae sint aut! Aspernatur vitae possimus, quo iste
            distinctio temporibus magni sapiente vero? Ea officiis nihil
            voluptatem neque veniam similique?
          </p>
        </div>
        <div className={classes.container}>
          <div className={classes.imageContainer} id={classes.imageSeven}></div>
          <div className={classes.imageContainer} id={classes.imageEight}></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
