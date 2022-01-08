import React, { FC } from "react";
import classes from "./News.module.css";
import posts from './assets/news.json'
import { SingleNews } from "./assets/types";
import { NewsContainer } from "./components/NewsContainer";

const News: FC = () => {
  const lastPost = posts.news.slice(-1)[0] 
  console.log(lastPost)
  const allButLast = posts.news.slice(0, -1);
  console.log(allButLast)
  return(
    <section>
      <div className={classes.newsContainer}>
        <div className={classes.image}>
          <h2 className={classes.title}>Nyheter</h2>
        </div>
        <div className={classes.mappedValuesContainer}>
          <div className={classes.lastPostContainer}>
            <NewsContainer news={lastPost}/>
          </div>
          <div className={classes.oldPostContainer}>
            {allButLast.map((post: SingleNews) => (
              <NewsContainer news={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
