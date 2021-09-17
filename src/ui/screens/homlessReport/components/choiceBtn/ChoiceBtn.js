import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './ChoiceBtn.module.css'

export default function ChoiceBtn() {
    return (
        <Container>
            <Row>
                <Col>   
                    <Link to={`/report/myself/`} className={`${styles.choice_btn} ${styles.ml_auto}`}>
                        Myself
                    </Link>
                </Col>
                <Col>   
                    <Link to={`/report/other/`} className={styles.choice_btn}>
                        Others
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
