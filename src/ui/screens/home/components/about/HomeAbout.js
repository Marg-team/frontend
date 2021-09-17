import React from 'react'
import { Row, Col } from 'react-bootstrap'
import * as styles from './HomeAbout.module.css'
import welcome from '../../../../assets/images/help.jpg'
import GreButton from '../../../../components/Button/GreButton/GreButton'
import { useHistory } from 'react-router'

export default function HomeAbout() {
    const history = useHistory();
    const buttonClickHandler = () => {
        history.push('/login/');
    }
    return (
        <section>
            <Row className={styles.about}>
                <Col sm={12} md={6} className={styles.right_about}>
                    <img className={styles.about_img} src={welcome} alt=""/>
                </Col>
                <Col className={styles.left_about}>
                    <h1>Welcome to AASHROY</h1>
                    <div className={styles.line}></div>
                    <p>AASHROY aims to find all who are devold of a home or basic needs in life. We will help and associate them with the nearest and renowened NGO 
                        which will help to make their life cheerful. By working together we can ensure that no person will stay hungry and without home.
                    </p>
                    <GreButton onClick={buttonClickHandler}>LOGIN</GreButton>
                </Col>
            </Row>
        </section>
    )
}
