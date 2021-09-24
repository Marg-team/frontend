import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import * as styles from './TopDonor.module.css'
import user from '../../../../assets/images/user.svg'
// import { useHistory } from 'react-router';

export default function TopDonor() {
    // const history = useHistory();
    // const buttonClickHandler = () => {
    //     history.push('/public-data/')
    // }
    const topDonor = [
        {   
            img: 'https://www.fakepersongenerator.com/Face/male/male20171084077370789.jpg',
            name: 'Samantha A Wright',
            deg: 'Transportation, Storage, and Distribution Managern',
            desc: 'Freelance beer evangelist. Lifelong social media specialist. Hardcore bacon advocate. Certified communicator. Avid food ninja.'
        },
        {
            img: 'https://www.fakepersongenerator.com/Face/female/female1021541950164.jpg',
            name: 'Kristal R Craig',
            deg: 'Career/Technical Education Teacher, Secondary School',
            desc: 'Lifelong introvert. Devoted bacon scholar. General zombie fanatic. Webaholic. Total alcohol buff. Amateur music junkie.'
        },
        {
            img: 'https://www.fakepersongenerator.com/Face/male/male20161083859306977.jpg',
            name: 'Gary D Clarke',
            deg: 'Gaming Cage Worker',
            desc: 'Unapologetic internet specialist. Baconaholic. Evil analyst. Wannabe twitter junkie.'
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
                                        <Card.Img src={e.img||user} alt={e.name}/>
                                        <Card.Text as="span">
                                            <h4>{e.name}</h4>
                                            <p>{e.deg}</p>
                                            {/* <p>{e.desc}</p> */}
                                            {/* <button type="button" onClick={buttonClickHandler} className={styles.readmore_btn} name="button">Read More</button> */}
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
