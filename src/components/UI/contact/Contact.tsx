import React, { FC } from "react";
import classes from './Contact.module.css'

export const Contact:FC  = () => {
    return(
        <div>
            <h3>För mer info kontakta gärna oss</h3>
            <div className={classes.contactContainer}>
                <p className={classes.paragraph}>Telefon:</p>
                <a href="tel: 0512-20261">0512-20261</a>
            </div>
            <div className={classes.contactContainer}>
                <p className={classes.paragraph}>Mail:</p>
                <a href="mailto: info@vara-bjertorpgk.se">info@vara-bjertorpgk.se</a>
            </div>
        </div>
    );
}