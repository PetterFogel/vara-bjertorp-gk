import React, { FC } from "react";
import Divider from "../../UI/divider/Divider";
import IntroContainer from "../../UI/intro-container/IntroContainer";
import classes from "./Member.module.css";
import image from "../../../assets/DJI_0177_sign.jpg";

const Member: FC = () => {
  return (
    <section>
      <div className={classes.memberContainer}>
        <IntroContainer title="Bli medlem" imageUrl={image} />
        <div className={classes.infoContainer}>
          <p className={classes.paragraph}>
            Vara-Bjertorp Golfklubb bildades 1987 och banan invigdes 1990 och är
            en park och skogsbana i slottsmiljö med personlig service. Bli
            medlem i Vara-Bjertorp GK – det finns olika alternativ och vi hoppas
            något ska passa just dig. För mer info eller anmälan var god
            kontakta kansliet på{" "}
            <a
              href="tel:+0512-20261"
              target="_blank"
              rel="noopener noreferrer"
              type="phone"
              className={classes.link}
            >
              0512-20261
            </a>{" "}
            eller skriv e-post till info@vara-bjertorpgk.se{" "}
            <a
              href="mailto: info@vara-bjertorpgk.se"
              target="_blank"
              type="mail"
              rel="noopener noreferrer"
              className={classes.link}
            >
              info@vara-bjertorpgk.se
            </a>{" "}
          </p>
          <br />
          <p className={classes.paragraph}>
            Vi är den lilla klubben med en härlig stämning. Här är alla
            välkomna! Med vårt fina klubbhus och vår fina och utmanande bana kan
            alla känna sig som hemma här
          </p>
          <br />
          <p className={classes.boldText}>
            Som medlem i Vara-Bjertorp GK har du nytta av samarbeten som vi har
            med andra klubbar. Dessa samarbeten gäller alla fullbetalande
            medlemmar i klubben.
          </p>
          <br />
          <ul className={classes.list}>
            <li>
              <a href="''" className={classes.link}>
                Se våra årsavgifter
              </a>
            </li>
            <li>
              <a href="''" className={classes.link}>
                Frågor? Kontakta vårt kansli
              </a>
            </li>
          </ul>
        </div>
        <Divider title={"Medlemsavgifter 2022"}></Divider>
        <div className={classes.optionContainer}>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                Medlemskapstyp
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                Spelavgift
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                Medlemsavgift
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                Totalt
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                Fullvärdig ej lån {">"} 25 år*
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                5 000 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                595 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                5 595 kr*
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                22 - 24 år*
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                3 605 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                595 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                4 200 kr*
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                17 - 21 år*
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                2 350 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                250 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                2 6000 kr*
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                13 - 16 år
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                1 050 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                250 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                1 3000 kr
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                0 - 12 år
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                550 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                250 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                800 kr
              </p>
            </div>
          </div>
          <div className={classes.optionBox}>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                Stödmedlem
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              ></p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.paragraph}
                id={classes.optionContainerparagraph}
              >
                600 kr
              </p>
            </div>
            <div className={classes.optionBlock}>
              <p
                className={classes.boldText}
                id={classes.optionContainerBoldText}
              >
                600 kr
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
