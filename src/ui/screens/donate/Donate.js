import React from 'react'
import { Form} from 'react-bootstrap'
import * as styles from './Donate.module.css'

export default function Donate() {
    return (
        <section>
            <div className={styles.donate}>
                <div className={styles.bg}>
                    <svg className={styles.down} width="1500" height="569" viewBox="0 0 1500 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1552.57 0H-42.4331V569H-5.29881L-13.4331 532.52C-13.4331 532.52 154.837 584.278 500.232 464.179C746.436 378.57 929.987 411.944 1115.28 445.635C1189.94 459.209 1264.87 472.835 1344.31 478.751C1445.61 486.297 1510.72 486.361 1552.57 483.411V0Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="816.25" y1="-89.5648" x2="827.712" y2="919.298" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6A9AE7"/>
                                <stop offset="1" stopColor="#281BC8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.content}>
                    <h1>Donate to homeless people if you feel like you have something extra.</h1>
                    <div className={styles.card}>
                        <h3>Fill up the form</h3>
                        <div className={styles.line}></div>
                        <form className={styles.form}>
                            <input type="text" placeholder="Your Full Name"/>
                            <input type="text" placeholder="Your Phone No."/>
                            <input type="text" placeholder="Your Full Address"/>
                            <span className={styles.label}>Status</span>
                            <div className={styles.radio_group}>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Clothes"
                                        name="Clothes"
                                        type='checkbox'
                                        id="clothes"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Food"
                                        name="Food"
                                        type='checkbox'
                                        id="food"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Medicine"
                                        name="Medicine"
                                        type='checkbox'
                                        id="medicine"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                            </div>
                            <input type="text" placeholder="Any Additional Details (optional)"/>
                            <button className={styles.btn} type="submit">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
