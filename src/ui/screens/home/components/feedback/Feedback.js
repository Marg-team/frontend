import React from 'react'
import GreButton from '../../../../components/Button/GreButton/GreButton'
import * as styles from './Feedback.module.css'

export default function Feedback() {
    return (
        <section>
            <div className={styles.feedback}>
                <svg className={styles.up} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f8f9fa" fillOpacity="1"
                    d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,90.7C840,75,960,117,1080,138.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>

                <div className={styles.fed_form}>

                    <h4>Feedback !</h4>
                    <p>Kindly fill in your Feedback here</p>

                    <div className={styles.inner}>
                        <form className="" action="https://getform.io/f/3df5279b-2578-42a9-8440-b2970a46106d" method="post">
                            <div className="form-group boxes">
                                <input className="form-control height " type="text" name="email" placeholder="Email" required/>
                                <textarea className="form-control widths" name="message" rows="8" cols="30" placeholder="Type here" required></textarea>
                            </div>
                            <GreButton type='submit'>SEND</GreButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
