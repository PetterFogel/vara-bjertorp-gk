import React, { FC, useState } from "react";
import { Contact } from "../../UI/contact/Contact";
import Divider from "../../UI/divider/Divider";
import { Modal } from "../../UI/modal/Modal";
import { SingleNews } from './assets/types'
import { NewsContainer } from "./components/NewsContainer";
import classes from "./News.module.css";

interface NewsMapperProps {
  newsList: SingleNews[]
}

export const NewsMapper: FC<NewsMapperProps> = ({ newsList }) => {
  const postsArray = newsList;
  const lastPost = postsArray.slice(-1)[0] 
  const oldPosts = postsArray.slice(0, -5)
  const latestOldPosts = oldPosts.slice(Math.max(oldPosts.length - 3, 0))
  const latestPosts = postsArray.slice(Math.max(postsArray.length - 5, 0))
  const allButLast = latestPosts.slice(0, -1);
  const [isOpen, setIsOpen] = useState(false);
  const [singlePost, setSinglePost] = useState<any>();
  console.log(newsList)

  const handleNewsClick = (post: SingleNews) => {
    setSinglePost(post)
    setIsOpen(true)
  }
  return (
    <section>
      {isOpen &&
        <Modal
          onClose={() => setIsOpen(!isOpen)}
          image={singlePost.image}
          title={singlePost.title}
          isOpen={isOpen} closeText={'Avbryt'}
          text={singlePost.text}
        >
          <Contact />
        </Modal>
      }
      <div className={classes.recentNewsContainer}>
        <div className={classes.image}>
          <h2 className={classes.title}>Nyheter</h2>
        </div>
        <div className={classes.mappedValuesContainer}>
          <div className={classes.lastPostContainer}>
            <NewsContainer withContent isBig isImage news={lastPost} />
          </div>
          <div className={classes.oldPostContainer}>
            {allButLast.map((post: SingleNews) => (
              <div style={{ marginBottom: "2rem" }}>
                <NewsContainer withContent news={post} />
                <p className={classes.expandParagraph} onClick={() => handleNewsClick(post)}>Visa mer</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section style={{ marginBottom: '5rem' }}>
        <Divider title={"Äldre nyheter"}></Divider>
      </section>
      <div className={classes.oldNewsContainer}>
        {latestOldPosts.map((post: SingleNews) => (
          <div className={classes.mappedOldContainer}>
            <NewsContainer isMargin isImage news={post} />
            <p className={classes.expandParagraph} onClick={() => handleNewsClick(post)}>Visa mer</p>
          </div>
        ))}
      </div>
    </section>
  );
}