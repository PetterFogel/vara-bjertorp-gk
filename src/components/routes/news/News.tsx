import React, { FC, useEffect, useState } from "react";
import classes from "./News.module.css";
import posts from "./assets/news.json";
import { SingleNews } from "./assets/types";
import { NewsContainer } from "./components/NewsContainer";
import Divider from "../../UI/divider/Divider";
import { Modal } from "../../UI/modal/Modal";
import { Contact } from "../../UI/contact/Contact";
import axios from "axios";
import { NewsMapper } from "./NewsMapper";

const News: FC = () => {
    const postsArray = posts.news;
    const lastPost = postsArray.slice(-1)[0];
    const oldPosts = postsArray.slice(0, -5);
    const latestOldPosts = oldPosts.slice(Math.max(oldPosts.length - 3, 0));
    const latestPosts = postsArray.slice(Math.max(postsArray.length - 5, 0));
    const allButLast = latestPosts.slice(0, -1);
    const [error, setError] = useState<any>();
    const [news, setNews] = useState<SingleNews[]>();
    const user = {
        email: "oliverjohansson3@gmail.com",
        password: "Freak219",
    };

    const fetchNews = async () => {
        try {
            const request = await axios.get(
                `${process.env.REACT_APP_API_URL}api/posts`
            );
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}api/login?email=${user.email}&password=${user.password}`
            );
            console.log(response.data);

            setNews(request.data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <section>
            <div className={classes.newsContainer}>
                {news && <NewsMapper newsList={news} />}
                {error && <p>Något gick fel</p>}
            </div>
        </section>
    );
};

export default News;
