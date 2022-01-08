import React, { FC, useState } from "react";
import classes from "./News.module.css";
import posts from './assets/news.json'
import { SingleNews } from "./assets/types";
import { NewsContainer } from "./components/NewsContainer";
import Divider from "../../UI/divider/Divider";
import { Modal } from "../../UI/modal/Modal";

const News: FC = () => {
  const postsArray = posts.news
  const lastPost = postsArray.slice(-1)[0] 
  const oldPosts = postsArray.slice(0, -5) 
  const latestOldPosts = oldPosts.slice(Math.max(oldPosts.length - 3, 0))
  const latestPosts = postsArray.slice(Math.max(postsArray.length - 5, 0))
  const allButLast = latestPosts.slice(0, -1);
  const [isOpen, setIsOpen] = useState(false); 
  const [singlePost, setSinglePost] = useState<any>();

  const handleNewsClick = (post: SingleNews) => {
    setSinglePost(post)
    setIsOpen(true)
  }

  return(
    <section>
      {isOpen && <Modal onClose={() => setIsOpen(!isOpen)} image={singlePost.image} headline={singlePost.title} isOpen={isOpen} closeText={'Avbryt'} description={singlePost.content}/>}
      <div className={classes.newsContainer}>
        <div className={classes.recentNewsContainer}>
          <div className={classes.image}>
            <h2 className={classes.title}>Nyheter</h2>
          </div>
          <div className={classes.mappedValuesContainer}>
            <div className={classes.lastPostContainer} onClick={() => handleNewsClick(lastPost)}>
              <NewsContainer withContent isBig isImage news={lastPost}/>
            </div>
            <div className={classes.oldPostContainer}>
              {allButLast.map((post: SingleNews) => (
                <div onClick={() => handleNewsClick(post)}>
                  <NewsContainer withContent news={post} />
                </div>
                ))}
            </div>
          </div>
        </div>
        <section style={{marginBottom: '5rem'}}>
          <Divider title={"Äldre nyheter"}></Divider>
        </section>
        <div className={classes.oldNewsContainer}>
          {latestOldPosts.map((post: SingleNews) => (
            <div style={{width: '33%', margin: '0 2rem'}} onClick={() => handleNewsClick(post)}>
              <NewsContainer isMargin isImage news={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
