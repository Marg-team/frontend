import React from 'react'
import { Col, Row } from 'react-bootstrap'
import * as styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <Row>
                    <Col lg={6} md={6} className={styles.content}>
                    <h3 className={styles.logo}>AASHROY</h3>
                    <div className={styles.para}>
                        <p>usce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum</p>
                    </div>
                    <i class="contact_icon fab fa-google-plus-g"></i><i class="contact_icon fab fa-facebook-square"></i><i class="contact_icon fab fa-twitter-square"></i><i class="contact_icon fab fa-instagram-square"></i>
                    </Col>
                    <Col lg={3} md={3} className={styles.content}>
                        <h3>Name</h3>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Sell</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col lg={3} md={3} className={styles.content}>
                        <h3>Contact Us</h3>
                        <p>(+234) 137632128</p>
                        <p>xyz@gmail.com</p>
                    </Col>
                </Row>
        </footer>
    )
}
