import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import * as styles from './Login.module.css'

export default function Login() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    return (
        <section>
            <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
                <div id={styles.formContent}>

                    <div>
                        <h1>AASHROY Admin Panel</h1>
                    </div>

                    <form>
                        <input type="text" id="email" placeholder="Email" required/>
                        <input type="password" id="password" placeholder="Password" required/>
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
