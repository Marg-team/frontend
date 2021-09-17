import React from 'react'
import { Row, Col } from 'react-bootstrap'
import logo from '../../../../assets/images/boat2.jpg' 
import * as styles from './HomeBanner.module.css'

export default function HomeBanner() {
    return (
        <section>
            <div className={styles.banner}>
                <Row className={styles.r}>
                    <Col>
                        <h1>We connect NGO's to help Homeless people near us</h1>
                        <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,nam no suscipit quaerendum.</p>
                        <button type="button" className={styles.login_button_home}>GET STARTED</button>
                    </Col>
                    <Col className={`${styles.banner_img} d-none d-md-block`}>
                        <img src={logo} height={300} alt='banner'/>
                    </Col>
                </Row>
                <svg className={styles.down} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}
