import React, { FC } from 'react'
import classes from "./Login.module.css";

const Login: FC = () => {
    return (
        <section>
            <div className={classes.mainContainer}>
                <div className={classes.inputContainer}>
                    <h2 className={classes.loginTitle}>Logga in</h2>
                    <input type="email" placeholder='E-mail...' className={classes.input}/>
                    <input type="password" placeholder='Lösenonord...' className={classes.input} />
                    <button className={classes.button}>Logga in</button>
                </div>
            </div>
        </section>
    )
}

export default Login
