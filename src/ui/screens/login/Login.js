import React from 'react'
import { Link } from 'react-router-dom'
import * as styles from './Login.module.css'

export default function Login() {
    return (
        <section>
            <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
                <div id={styles.formContent}>

                    <div>
                        <h1>AASHROY Admin Panel</h1>
                    </div>

                    <form>
                        <input type="text" id="email" placeholder="Email"/>
                        <input type="text" id="password" placeholder="Password"/>
                        <input type="submit" value="Log In"/>
                    </form>

                    <div id={styles.formFooter}>
                        <Link to={`/signup/`} className="underlineHover" href="#">Sign up?</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
