import React from 'react'
import { useHistory } from 'react-router';
import LightButton from '../../../../components/Button/LightButton/LightButton'
import * as styles from './Report.module.css'

export default function Report() {
    const history = useHistory();
    const buttonClickHandler = () => {
        history.push('/report/')
    }
    return (
        <section>
            <div className={styles.report}>
                <svg className={styles.up} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f8f9fa" fillOpacity="1" d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,90.7C840,75,960,117,1080,138.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
                <div>
                    <h1>42</h1>
                    <h3>CRIME'S REPORTED</h3>
                    <div className={styles.line}></div>
                    <p>Seen any CRIME near you ? Don’t worry complain here,</p>
                    <p>we assure that you identity is completely Anonymous </p>
                    <h2>Crimes Near You<br/>Report here!</h2>
                    <LightButton onClick={buttonClickHandler}>REPORT</LightButton>
                </div>
                <svg className={styles.down} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#f8f9fa" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,133.3C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}
