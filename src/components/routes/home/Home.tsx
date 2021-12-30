import { FC } from "react";
import { Link } from "react-router-dom";
import Divider from "../../UI/divider/Divider";
import classes from "./Home.module.css";

const Home: FC = () => {
  return (
    <section className={classes.section}>
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
        <p>Test</p>
      </div>
    </section>
  );
};

export default Home;
