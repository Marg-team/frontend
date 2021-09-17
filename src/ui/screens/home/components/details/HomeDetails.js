import React from 'react'
import GreButton from '../../../../components/Button/GreButton'
import * as styles from './HomeDetails.module.css'

export default function HomeDetails() {
    return (
        <section className={styles.details}>
            <div>
                <span className={styles.details_num}>256 </span>
                <span style={{color:"#2940D3",  fontSize:"50px", fontWeight:"bold"}}> People got Help from NGO’s</span>
                <div className="p_width">
                    <p>With the adverse effects of COVID-19 in everyone's lives, especially those who are working low wage job, 
                        home maids and many more. Through us, you can help them like all those we have connected with a NGO
                    </p>
                </div>
                <GreButton>More Details</GreButton>
            </div>
        </section>
    )
}
