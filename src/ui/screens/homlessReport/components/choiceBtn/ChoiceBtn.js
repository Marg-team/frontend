import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './ChoiceBtn.module.css'
import myself from '../../../../assets/images/user.svg';
import others from '../../../../assets/images/networking.svg';


export default function ChoiceBtn() {
    return (
        <Container>
            <Row>
                <Col sm={6} xs={12}>   
                    <Link to={`/report/myself/`} className={`${styles.choice_btn} ${styles.ml_auto}`}>
                        <div className={styles.choice_content}>
                            <img src={myself} alt=""/>
                            <span>Myself</span>
                        </div>
                    </Link>
                </Col>
                <Col sm={6} xs={12}>   
                    <Link to={`/report/other/`} className={styles.choice_btn}>
                        <div className={styles.choice_content}>
                            <img src={others} alt=""/>
                            <span>Others</span>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
