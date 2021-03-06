import React from 'react'
import { Col, Row, Card } from 'react-bootstrap';
import * as styles from './Donation.module.css';
import clothes from '../../../../assets/images/clothes.png'
import foods from '../../../../assets/images/vegetables.png'
import medicines from '../../../../assets/images/medicine.png'

export default function Donation() {
    const donation = [
        {
            img: clothes,
            qty: 35,
            type: "Clothes"
        },
        {
            img: foods,
            qty: 46,
            type: "Food"
        },
        {
            img: medicines,
            qty: 64,
            type: "Medicine"
        },
    ]
    return (
        <section>
            <div className={styles.donation}>
                <div className={styles.svg}>
                    <svg className={styles.down} width="1500" height="569" viewBox="0 0 1500 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1552.57 0H-42.4331V569H-5.29881L-13.4331 532.52C-13.4331 532.52 154.837 584.278 500.232 464.179C746.436 378.57 929.987 411.944 1115.28 445.635C1189.94 459.209 1264.87 472.835 1344.31 478.751C1445.61 486.297 1510.72 486.361 1552.57 483.411V0Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="816.25" y1="-89.5648" x2="827.712" y2="919.298" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6A9AE7"/>
                                <stop offset="1" stopColor="#281BC8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <Col>
                    <div className={styles.item_donated_card}>
                        <h1>ITEMS DONATED</h1>
                        <div className="line"></div>
                        <Row>
                            {   
                                donation.map((e, i)=>{
                                    return <Col lg={4} md={4} sm={6} xs={6} key={e.type}>
                                        <Card className={styles.donated_card}>
                                            <Card.Img src={e.img} style={{paddingLeft: 50, paddingRight: 50, objectFit: 'contain', transform: i===2?'translateY(18px)':'unset'}}/>
                                            <Card.Text as="span">
                                                <hr/>
                                                <p className={styles.num_donated_sub}>{e.qty} {e.type}</p>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </div>
        </section>
    )
}
