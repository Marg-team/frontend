import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as styles from './TopDonor.module.css'
import boat from '../../../../assets/images/1boat.jpg'
import { useHistory } from 'react-router';

export default function TopDonor() {
    const history = useHistory();
    const buttonClickHandler = () => {
        history.push('/public-data/')
    }
    const topDonor = [
        {   
            img: boat,
            name: 'Dr.Aboobacker',
            deg: 'Neurosurgeon',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Dr.Aboobacker',
            deg: 'Neurosurgeon',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            name: 'Dr.Aboobacker',
            deg: 'Neurosurgeon',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]
    return (
        <section>
            <div className={styles.donor}>
                <h2>TOP DONATOR'S</h2>
                <div className={styles.line}></div>
                <Container>
                    <Row>
                        {
                            topDonor.map((e,i)=>{
                                return <Col lg={4} md={4} key={i}>
                                    <Card className={styles.donor_card}>
                                        <Card.Img src={e.img||boat} alt={e.name}/>
                                        <Card.Text as="span">
                                            <h4>{e.name}</h4>
                                            <p>{e.deg}</p>
                                            <p>{e.desc}</p>
                                            <button type="button" onClick={buttonClickHandler} className={styles.readmore_btn} name="button">Read More</button>
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
