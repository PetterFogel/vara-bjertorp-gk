import React, { FC } from "react";
import classes from "./News.module.css";
import posts from './assets/news.json'
import { SingleNews } from "./assets/types";
import { NewsContainer } from "./components/NewsContainer";
import Divider from "../../UI/divider/Divider";

const News: FC = () => {
  const postsArray = posts.news
  const lastPost = postsArray.slice(-1)[0] 
  const oldPosts = postsArray.slice(0, -5) 
  const latestOldPosts = oldPosts.slice(Math.max(oldPosts.length - 3, 0))
  const latestPosts = postsArray.slice(Math.max(postsArray.length - 5, 0))
  const allButLast = latestPosts.slice(0, -1);
  return(
    <section>
      <div className={classes.newsContainer}>
        <div className={classes.recentNewsContainer}>
          <div className={classes.image}>
            <h2 className={classes.title}>Nyheter</h2>
          </div>
          <div className={classes.mappedValuesContainer}>
            <div className={classes.lastPostContainer}>
              <NewsContainer withContent isBig isImage news={lastPost}/>
            </div>
            <div className={classes.oldPostContainer}>
              {allButLast.map((post: SingleNews) => (
                <NewsContainer withContent news={post} />
                ))}
            </div>
          </div>
        </div>
        <section style={{marginBottom: '5rem'}}>
          <Divider title={"Äldre nyheter"}></Divider>
        </section>
        <div className={classes.oldNewsContainer}>
          {latestOldPosts.map((post: SingleNews) => (
            <NewsContainer isMargin isImage news={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
