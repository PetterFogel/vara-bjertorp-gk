import React, { FC } from "react";
import Divider from "../../UI/divider/Divider";
import classes from "./Member.module.css";

const Member: FC = () => {
  return (
    <section>
      <div className={classes.memberContainer}>
        <div className={classes.image}>
          <h2 className={classes.title}>Bli medlem</h2>
        </div>
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
              className={classes.link}
            >
              0512-20261
            </a>{" "}
            eller skriv e-post till info@vara-bjertorpgk.se{" "}
            <a
              href="mailto: info@vara-bjertorpgk.se"
              target="_blank"
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
              <a href="#" className={classes.link}>
                Se våra årsavgifter
              </a>
            </li>
            <li>
              <a href="#" className={classes.link}>
                Frågor? Kontakta vårt kansli
              </a>
            </li>
          </ul>
        </div>
        <Divider title={"Medlemsavgifter 2022"}></Divider>
        <div className={classes.optionContainer}>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
          <div className={classes.optionBox}>
            <p>hello</p>
            <p>test</p>
            <p>hello</p>
            <p>test</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
