import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <Row>
                    <Col lg={6} md={6} className={styles.content}>
                    <h3 className={styles.logo}>AASHROY</h3>
                    <div className={styles.para}>
                        <p>AASHROY aims to find all who are devold of a home or basic needs in life. We will help and associate them with the nearest and renowened NGO 
                        which will help to make their life cheerful. By working together we can ensure that no person will stay hungry and without home.</p>
                    </div>
                    {/* <i className="contact_icon fab fa-google-plus-g"></i><i className="contact_icon fab fa-facebook-square"></i><i className="contact_icon fab fa-twitter-square"></i><i className="contact_icon fab fa-instagram-square"></i> */}
                    </Col>
                    <Col lg={3} md={3} className={styles.content}>
                        <h3>Name</h3>
                        <p>
                            <Link to={{pathname: `/`, state: {scrolltop: true}}}>Home</Link>
                        </p>
                        <p>
                            <Link to={`/report/`}>Report</Link>
                        </p>
                        <p>
                            <Link to={`/complain/`}>Complain</Link>
                        </p>
                        <p>
                            <Link to={`/donate/`}>Donate</Link>
                        </p>
                        <p>
                            <Link to={`/about/`}>About Us</Link>
                        </p>
                    </Col>
                    <Col lg={3} md={3} className={styles.content}>
                        <h3>Contact Us</h3>
                        <p>8638761581</p>
                        <p>angshuarin@gmail.com</p>
                    </Col>
                </Row>
        </footer>
    )
}
