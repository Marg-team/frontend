import React from 'react'
import { Card, CardColumns, Col, Container, Row } from 'react-bootstrap'
import * as styles from './home.module.css'
import logo from '../../assets/images/boat2.jpg'
import boat from '../../assets/images/1boat.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    const l = [1,2,3,4];
    return (
        <>
        <section>
            <div className={styles.banner}>
                <Row className={styles.r}>
                    <Col>
                        <h1>We connect NGO's to help Homeless people near us</h1>
                        <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,nam no suscipit quaerendum.</p>
                        <button type="button" className={styles.login_button_home}>GET STARTED</button>
                    </Col>
                    <Col className={styles.banner_img}>
                        <img src={logo} height={300} alt='banner'/>
                    </Col>
                </Row>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </section>

        <section>
            <Row className={styles.about}>
                <Col className={styles.right_about}>
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

        <section>
            <div className={styles.cards_list}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,90.7C840,75,960,117,1080,138.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                <Row className={styles.cards}>
                    {
                        l.map((e)=>{
                            return <Col lg={3} md={6} key={e}>
                                <Card>
                                    <Card.Img src={boat}/>
                                    <Card.Text>
                                        <Link to="#" className={`btn btn-primary d-grid ${styles.card_btn}`}>REPORT</Link>
                                    </Card.Text>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </section>

        <section className={styles.details}>
            <div>
                <span className={styles.details_num}>256 </span>
                <span style={{color:"#2940D3",  fontSize:"50px", fontWeight:"bold"}}> People got Help from NGO’s</span>
                <div className="p_width">
                    <p>Richard McClintock, a Latin scholar from Hampden Sydney College,
                    is credited with discovering the source behind the ubiquitous filler
                    text. In seeing a sample of lorem ipsum, his interest was piqued by
                    consectetur a genuine, albeit rare, Latin word. Consulting a Latin </p>
                </div>
                <button type="button" className={styles.login_button_gre}>More Details</button>
            </div>
        </section>

        <section>
            <div className={styles.donation}>
                <svg width="1500" height="569" viewBox="0 0 1500 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1552.57 0H-42.4331V569H-5.29881L-13.4331 532.52C-13.4331 532.52 154.837 584.278 500.232 464.179C746.436 378.57 929.987 411.944 1115.28 445.635C1189.94 459.209 1264.87 472.835 1344.31 478.751C1445.61 486.297 1510.72 486.361 1552.57 483.411V0Z" fill="url(#paint0_linear)"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="816.25" y1="-89.5648" x2="827.712" y2="919.298" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#6A9AE7"/>
                            <stop offset="1" stop-color="#281BC8"/>
                        </linearGradient>
                    </defs>
                </svg>

                <Col>
                    <div className={styles.item_donated_card}>
                        <h1>ITEMS DONATED</h1>
                        <div class="line"></div>
                        <Row>
                            {   
                                [1,2,3].map((e)=>{
                                    return <Col lg={4} md={6}>
                                        <Card className={styles.donated_card}>
                                            <Card.Img src={boat}/>
                                            <Card.Text>
                                                <hr/>
                                                <h3 className={styles.num_donated_sub}>40 Clothes</h3>
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
                            
        </>
    )
}
