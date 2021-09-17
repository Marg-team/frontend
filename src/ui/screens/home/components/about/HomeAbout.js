import React from 'react'
import { Row, Col } from 'react-bootstrap'
import * as styles from './HomeAbout.module.css'
import boat from '../../../../assets/images/1boat.jpg'
import GreButton from '../../../../components/Button/GreButton'

export default function HomeAbout() {
    return (
        <section>
            <Row className={styles.about}>
                <Col sm={12} md={6} className={styles.right_about}>
                    <img className={styles.about_img} src={boat} alt=""/>
                </Col>
                <Col className={styles.left_about}>
                    <h1>Welcome to AASHROY</h1>
                    <div className={styles.line}></div>
                    <p>AASHROY aims to find all who are devold of a home or basic needs in life. We will help and associate them with the nearest and renowened NGO 
                        which will help to make their life cheerful. By working together we can ensure that no person will stay hungry and without home.
                    </p>
                    <GreButton>LOGIN</GreButton>
                </Col>
            </Row>
        </section>
    )
}
