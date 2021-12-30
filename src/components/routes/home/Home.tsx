import { FC } from "react";
import { Link } from "react-router-dom";
import Divider from "../../UI/divider/Divider";
import classes from "./Home.module.css";

const Home: FC = () => {
  return (
    <section>
      <div className={classes.introContainer}>
        <h1 className={classes.homeTitle}>
          Varmt Välkommna till oss på <br /> Vara-Bjertorp GK
        </h1>
        <button className={classes.btn}>BOKA TID</button>
        <Link to="/medlem" className={classes.memberTag}>
          Inte medlem? Bli medlem här.
        </Link>
      </div>
      <div className={classes.homeContainer}>
        <Divider title="Om oss" />
        <p className={classes.paragraph}>
          Vår bana invigdes 1990 och några år tidigare bildades klubben, närmare
          bestämt 1987.
          <br />
          <br />
          Banan ligger i en fantastisk slottsmiljö mitt på Västgötaslätten. Men
          låt dig inte luras av det flacka landskapet. Banan ger alla en
          utmaning, oavsett handicap.
          <br />
          <br />
          Vi har av Golftidningen Golf Digest ranking av Sveriges bästa banor
          röstats fram hela 9 gånger som Västergötlands bästa bana.
        </p>
        <div className={classes.boxContainer}>
          <div className={classes.boxItem1}>
            <Link to="/nyheter">
              <button className={classes.boxBtn}>NYHETER</button>
            </Link>
          </div>
          <div className={classes.boxItem2}>
            <Link to="/boka-starttid">
              <button className={classes.boxBtn}>BOKA TID</button>
            </Link>
          </div>
          <div className={classes.boxItem3}>
            <Link to="/medlem">
              <button className={classes.boxBtn}>MEDLEM</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
