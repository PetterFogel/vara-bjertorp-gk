import { FC } from "react";
import Divider from "../../UI/divider/Divider";
import classes from "./BookTeeTime.module.css";

const BookTeeTime: FC = () => {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.image}>
          <h2 className={classes.title}>Boka Starttid</h2>
        </div>
        <div className={classes.infoContainer}>
          <div className={classes.contentHolder}>
            <p className={classes.paragraph}>
              Vi har bokade starttider på vardagar mellan 8.00-18.00 och på
              helger mellan 8.00-17.00. Före och efter är det bollränna som
              gäller. Antingen bokar du din starttid via Min Golf eller så
              ringer du kansliet på 0512-20261 så hjälper vi dig. Det går också
              väldigt bra att mejla oss på info@vara-bjertorpgk.se Välkomna till
              <br />
              <br />
              Vara-Bjertorp GK !
            </p>
          </div>
          <div className={classes.contentHolder}>
            <div className={classes.widgetPrototype}>Widget</div>
          </div>
          <div className={classes.contentHolder}>
            <Divider title="Greenfee" />
          </div>
          <div className={classes.contentHolder}>
            <div className={classes.greenfeeContainer}>
              <div className={classes.optionContainer}>
                <div className={classes.optionBox}>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.boldText}
                      id={classes.optionContainerBoldText}
                    >
                      Greenfee
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.boldText}
                      id={classes.optionContainerBoldText}
                    >
                      Vardagar
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.boldText}
                      id={classes.optionContainerBoldText}
                    >
                      Helger
                    </p>
                  </div>
                </div>
                <div className={classes.optionBox}>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      Senior
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      400 kr
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      450 kr
                    </p>
                  </div>
                </div>
                <div className={classes.optionBox}>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      Junior
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      165 kr
                    </p>
                  </div>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.boldText}
                      id={classes.optionContainerBoldText}
                    >
                      200 kr
                    </p>
                  </div>
                </div>
                <div className={classes.optionBox}>
                  <div className={classes.optionBlock}>
                    <p
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      9 hål
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
                      className={classes.paragraph}
                      id={classes.optionContainerparagraph}
                    >
                      265 kr
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.collaborationsContainer}>
                <h2 className={classes.collabTitle}>Samarbeten 2021</h2>
                <p className={classes.paragraph}>
                  Innehavare av Skaraborgsgolfaren spelar för 100 kr på vardagar
                  och 125 kr på helg. Skaraborgsgolfaren är ett samarbete mellan
                  Billingens GK, Ekarnas GK, Lidköpings GK, Läckö GK och
                  Vara-Bjertorp GK. För mer info klicka på länken
                  Skaraborgsgolfaren 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTeeTime;
