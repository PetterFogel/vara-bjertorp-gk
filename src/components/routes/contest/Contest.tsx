import React, { FC } from "react";
import Divider from "../../UI/divider/Divider";
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
          <br />
          <p className={classes.paragraph}>
            Här kan du titta på filmen som Alexander Ellhage och Filip Hagbert
            gjort om Stenhaga Open 2013. <br /> Vi tackar Alexander och Filip,
            Tack!
          </p>
        </div>
      </div>
      <Divider title={"Kommande Tävlingar"}></Divider>
      <div className={classes.contestContainer}>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.boldText}
              id={classes.optionContainerBoldText}
            >
              Datum
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.boldText}
              id={classes.optionContainerBoldText}
            >
              Tävling
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.boldText}
              id={classes.optionContainerBoldText}
            >
              Tid
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.boldText}
              id={classes.optionContainerBoldText}
            >
              Spelform
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              2 Maj Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Icona Färg o Interör
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            ></p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Greensome
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              8 Maj Lör
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Race to Espana
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              10:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              2-manna scramble
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              23 Maj Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Madame Chic’s 2-manna scramble
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              2-manna scramble
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              30 Maj Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Ica´s Bästboll
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Bästboll
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              13 Juni Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Abacus Bästboll
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Bästboll
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              9 Juli Fre
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Semesterslaget
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              15:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              3-manna scramble
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              7 Aug Lör
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              KM Udda klasser samt kval
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Slagtävling
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              8 Aug Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              KM Final Herr o Dam
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Slagtävling
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              22 Aug Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Race to Espana
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Slagtävling
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              29 Aug Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              KM Bästboll
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Bästboll
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              5 Sept Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Mörups Fönster
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              10:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Singel Slaggolf
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              26 Sept Sön
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Abacus 3-manna scramble
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              08:00
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              3-manna scramble
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              2 Okt Lör
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Ica’s 2-manna scramble
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Shotgun2
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              manna scramble
            </p>
          </div>
        </div>
        <div className={classes.contestBox}>
          <div className={classes.contestBlockStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              10 Ojt Lör
            </p>
          </div>
          <div className={classes.contestBlockMiddleStart}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Ica´s Bästboll
            </p>
          </div>
          <div className={classes.contestBlockMiddleEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Shotgun
            </p>
          </div>
          <div className={classes.contestBlockEnd}>
            <p
              className={classes.paragraph}
              id={classes.optionContainerBoldText}
            >
              Bästboll
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contest;
