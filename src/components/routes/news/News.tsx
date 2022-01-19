import React, { FC, useEffect, useState } from "react";
import classes from "./News.module.css";
import posts from './assets/news.json'
import { SingleNews } from "./assets/types";
import { NewsContainer } from "./components/NewsContainer";
import Divider from "../../UI/divider/Divider";
import { Modal } from "../../UI/modal/Modal";
import { Contact } from "../../UI/contact/Contact";
import axios from "axios";
import { NewsMapper } from "./NewsMapper";

const News: FC = () => {
  const postsArray = posts.news
  const lastPost = postsArray.slice(-1)[0] 
  const oldPosts = postsArray.slice(0, -5) 
  const latestOldPosts = oldPosts.slice(Math.max(oldPosts.length - 3, 0))
  const latestPosts = postsArray.slice(Math.max(postsArray.length - 5, 0))
  const allButLast = latestPosts.slice(0, -1);
  const [isOpen, setIsOpen] = useState(false); 
  const [posts, setPosts] = useState<any>();

  const fetchUsersfromDatabase = async () => {
    try {
        const response = await axios.get("/user");
        const result = response.data
    } catch (error) {
        console.log(error) 
    }
};

useEffect(() => {
  fetchUsersfromDatabase()
})

  return(
    <section>

      <NewsMapper newsList={} />
    </section>
  );
};

export default News;
