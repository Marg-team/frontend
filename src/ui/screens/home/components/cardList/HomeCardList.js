import React from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import report from '../../../../assets/images/warning-sign.png'
import complain from '../../../../assets/images/customer-service.png'
import donate from '../../../../assets/images/donate.png'
import more from '../../../../assets/images/more.png'


import * as styles from './HomeCardList.module.css'

export default function HomeCardList() {
    const cards = [
        {
            url: '/report/',
            img: report,
            name: 'report'
        },
        {
            url: '/complain/',
            img: complain,
            name: 'complain'
        },
        {
            url: '/donate/',
            img: donate,
            name: 'donate'
        },
        {
            url: '/about',
            img: more,
            name: 'about us'
        },
    ];
    return (
        <section>
            <div className={styles.cards_list}>
                <svg className={styles.up} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,90.7C840,75,960,117,1080,138.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <Row className={styles.cards}>
                    {
                        cards.map((e)=>{
                            return <Col lg={3} md={6} sm={6} xs={6} key={e.name}>
                                <Card>
                                    <Card.Img style={{padding: 22}} src={e.img}/>
                                    <Card.Text>
                                        <Link to={e.url} className={`btn btn-primary d-grid ${styles.card_btn}`}>{e.name.toUpperCase()}</Link>
                                    </Card.Text>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
                <svg className={styles.down} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </section>
    )
}
