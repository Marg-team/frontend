import React from 'react'
import { Row, Col } from 'react-bootstrap'
import * as styles from './HomeAbout.module.css'
import boat from '../../../../assets/images/1boat.jpg'

export default function HomeAbout() {
    return (
        <section>
            <Row className={styles.about}>
                <Col sm={12} md={6} className={styles.right_about}>
                    <img className={styles.about_img} src={boat} alt=""/>
                </Col>
                <Col className={styles.left_about}>
                    <h1>Welcome to XYZ</h1>
                    <div className={styles.line}></div>
                    <p>Richard McClintock, a Latin scholar from Hampden Sydney College,
                        is credited with discovering the source behind the ubiquitous filler
                        text. In seeing a sample of lorem ipsum, his interest was piqued by
                        consectetur a genuine,discovering the source behind the
                        ubiquitous filler text. In seeing a sample of lorem ipsum, his interest
                        was piqued by consectetur a genuine, albeit rare, Latin word.
                        Consulting a Latin dictionary led McClintock to a passage from .
                    </p>
                    <button type="button" className={styles.login_button_gre}>LOGIN</button>
                </Col>
            </Row>
        </section>
    )
}
