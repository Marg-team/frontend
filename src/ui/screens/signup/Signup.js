import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './Signup.module.css'

export default function Signup() {
    return (
        <section>
            <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
                <div id={styles.formContent}>

                    <div>
                        <h1>AASHROY Admin Panel</h1>
                    </div>
                    <Tabs defaultActiveKey="volunteer" className="mb-3">
                        <Tab eventKey="volunteer" title="Volunteer">
                            <h2>Volunteer</h2>
                            <form>
                                <input type="text" id="email" placeholder="Full Name"/>
                                <input type="text" id="password" placeholder="Email"/>
                                <input type="text" id="password" placeholder="Phone No."/>
                                <input type="text" id="password" placeholder="Password" />
                                <input type="text" id="password" placeholder="Confirm Password"/>
                                <input type="text" id="password" placeholder="Pan No."/>
                                <input type="text" id="password" placeholder="Why You Want To Be?"/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </Tab>
                        <Tab eventKey="ngo" title="NGO">
                            <h2>NGO</h2>
                            <form>
                                <input type="text" id="email" placeholder="Full Name"/>
                                <input type="text" id="password" placeholder="Email"/>
                                <input type="text" id="password" placeholder="Phone No."/>
                                <input type="text" id="password" placeholder="Password" />
                                <input type="text" id="password" placeholder="Confirm Password"/>
                                <input type="text" id="password" placeholder="Registration ID"/>
                                <input type="text" id="password" placeholder="Address"/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </Tab>
                    </Tabs>
                    
                    <div id={styles.formFooter}>
                        <Link to={`/login/`} className="underlineHover" href="#">Log In?</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
