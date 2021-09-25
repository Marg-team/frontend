import React, { useRef } from 'react'
import GreButton from '../../components/Button/GreButton/GreButton'
import * as styles from './About.module.css'
import bg from '../../assets/images/bg_about.png'
import { Col, Row } from 'react-bootstrap'
import rok from '../../assets/images/rok.png'
import ang from '../../assets/images/angshu.png'
import git from '../../assets/images/gitartha.png'
import manish from '../../assets/images/manish.png'

export default function About() {
    const buttonClick = () => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    const ref = useRef(null)
    const teams=[
        {
            name: 'Angshuman Barpujari',
            deg: 'Web Developer, Flutter Developer, Ui/Ux Designer',
            img: ang
        },
        {
            name: 'Roktim Kamal Senapotiy',
            deg: 'Flutter Developer, Ui/Ux Designer and Cyber Security Expert',
            img: rok
        },
        {
            name: 'Gitartha Kalita',
            deg: 'Web Develeoper, Android Developer',
            img: git
        },
        {
            name: 'Manish Saikia',
            deg: 'Data Scientist, Graphics Designer',
            img: manish
        },
    ];
    return (
        <section className={styles.about}>
            <div className={styles.heading}>
                <img src={bg} alt=""/>
                <h2>Who We Are?</h2>
                <p>We aim to help citizens connect tp government and volunteer organisation through us to ensure aids to homeless people</p>
                <GreButton onClick={buttonClick}>Learn More</GreButton>
            </div>
            <hr/>
            <div className={styles.left} ref={ref}>
                <h2>Problem</h2>
                <p>Homeless street people are prone to trafficking, drug abuse and other crimes. An in the recent hit of the pandemic this group of people has been snatched of their basic necessities. A large section of this poplulation comprises of women and children</p>
            </div>
            <div className={styles.right}>
                <h2>Vision</h2>
                <p>We aspire to make our country where everyone has a home and no one lives in poverty.</p>
            </div>
            <hr/>
            <div className={styles.member}>
                <h2>Our Members</h2>
                    <Row>
                        {
                            teams.map((e,i)=>{
                                return <Col lg={3} md={3} key={i} >
                                    <div className={styles.member_card}>
                                        <img src={e.img} alt={e.name}/>
                                        <div>
                                            <h4>{e.name}</h4>
                                            <p>{e.deg}</p>
                                            {/* <button type="button" className={styles.readmore_btn} name="button">Read More</button> */}
                                        </div>
                                    </div>
                                </Col>
                            })
                        }
                    </Row>
            </div>
        </section>
    )
}
