import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as styles from './TopDonor.module.css'
import boat from '../../../../assets/images/1boat.jpg'

export default function TopDonor() {
    return (
        <section>
            <div className={styles.donor}>
                <h2>TOP DONATOR'S</h2>
                <div class={styles.line}></div>
                <Container>
                    <Row>
                        {
                            [1,2,3].map((e)=>{
                                return <Col lg={4} md={4}>
                                    <Card className={styles.donor_card}>
                                        <Card.Img src={boat} alt=""/>
                                        <Card.Text>
                                            <h4>Dr.Aboobacker</h4>
                                            <p>Neurosurgeon</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                            <button type="button"class={styles.readmore_btn} name="button">Read More</button>
                                        </Card.Text>
                                    </Card>
                                </Col>
                            })
                        }
                    </Row>
                </Container>
            </div>
        </section>
    )
}
