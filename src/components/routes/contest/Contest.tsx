import React, { FC } from "react";
import classes from "./Contest.module.css";

const Contest: FC = () => {
  return (
    <section>
      <div className={classes.contestContainer}>
        <div className={classes.image}>
          <h2 className={classes.title}>Tävling</h2>
        </div>
        <div className={classes.infoContainer}>
          <p className={classes.paragraph}>
            2015 var fjärde året i rad som vi anordnade vår omtyckta Stenhaga
            Open som i år var en SGF-tävling med en prissumma på totalt 150 000
            kr. Vinnaren kvitterade ut hela 110 000 kr och förutom det hade vår
            sponsor kryddat med 100 000 kr för ett nytt banrekord och 10 000 kr
            för en HIO. Banrekordet var nära att ryka då Per Längfors sköt 64
            slag. Vinnaren av årets upplaga av Stenhaga Open blev Ola Johansson,
            Trummenäs GK på 136 slag.
          </p>
          <p className={classes.paragraph}>
            Här kan du titta på filmen som Alexander Ellhage och Filip Hagbert
            gjort om Stenhaga Open 2013. Vi tackar Alexander och Filip, Tack!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contest;
