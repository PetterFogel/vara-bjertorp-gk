import React, { FC, useState } from "react";
import { Modal } from "../../../UI/modal/Modal";
import { SingleNews } from "../assets/types";
import classes from "../News.module.css";

interface NewsContainerProps {
    news: SingleNews,
    isMargin?: boolean,
    withContent?: boolean,
    isBig?: boolean,
    isImage?: boolean 
}

export const NewsContainer: FC<NewsContainerProps> = ({ news, isMargin, withContent, isBig, isImage }) => {
    return (
        <div className={ isMargin ? classes.newsComponentWithMargin : classes.newsComponent } >
            {isImage && 
                <img className={isBig ? classes.imageContainerRecentNewsBig : classes.imageContainerRecentNews} src={news.image} alt="nana" />
            }
            <h2 className={classes.newsTitle}>{news.title}</h2>
            {withContent &&
                <p className={classes.newsContent}>{news.content}</p>
            }
            <p className={classes.newsDate}>{`Publicerad ${news.date}`}</p>
        </div>
    )
}