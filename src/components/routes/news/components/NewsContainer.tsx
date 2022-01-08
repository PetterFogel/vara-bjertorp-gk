import React, { FC } from "react";
import { SingleNews } from "../assets/types";
import classes from "../News.module.css";

interface NewsContainerProps {
    news: SingleNews
}

export const NewsContainer: FC<NewsContainerProps> = ({news}) => {
    return(
        <div>
            <h2 className={classes.newsTitle}>{news.title}</h2>
            <p className={classes.newsDate}>{`Publicerad ${news.date}`}</p>
            <p className={classes.newsContent}>{news.content}</p>
        </div>
    )
}