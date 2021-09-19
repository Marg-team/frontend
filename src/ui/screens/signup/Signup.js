import React, {useEffect} from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './Signup.module.css'
import { useHistory } from 'react-router'

export default function Signup() {
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('secret_token');
        if(!!token){
            history.replace(`/`)
        }
    }, [history])
    
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
                                <input type="text" id="email" placeholder="Full Name" required/>
                                <input type="text" id="password" placeholder="Email" required/>
                                <input type="text" id="password" placeholder="Phone No." required/>
                                <input type="password" id="password" placeholder="Password" required/>
                                <input type="password" id="password" placeholder="Confirm Password" required/>
                                <input type="text" id="password" placeholder="Pan No." required/>
                                <input type="text" id="password" placeholder="Why You Want To Be?" required/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </Tab>
                        <Tab eventKey="ngo" title="NGO">
                            <h2>NGO</h2>
                            <form>
                                <input type="text" id="email" placeholder="Full Name" required/>
                                <input type="text" id="password" placeholder="Email" required/>
                                <input type="text" id="password" placeholder="Phone No." required/>
                                <input type="password" id="password" placeholder="Password" required/>
                                <input type="password" id="password" placeholder="Confirm Password" required/>
                                <input type="text" id="password" placeholder="Registration ID" required/>
                                <input type="text" id="password" placeholder="Address" required/>
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
