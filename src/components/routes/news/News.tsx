import React, { FC, useEffect, useState } from "react";
import classes from "./News.module.css";
import { SingleNews } from "./assets/types";
import axios from "axios";
import { NewsMapper } from "./NewsMapper";

const News: FC = () => {
    const [error, setError] = useState<any>();
    const [news, setNews] = useState<SingleNews[]>();

    const fetchNews = async () => {
        try {
            const request = await axios.get(
                `${process.env.REACT_APP_API_URL}api/posts`
            );
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
