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
                    <p>Richard McClintock, a Latin scholar from Hampden Sydney College,
                    is credited with discovering the source behind the ubiquitous filler
                    text. In seeing a sample of lorem ipsum, his interest was piqued by
                    consectetur a genuine, albeit rare, Latin word. Consulting a Latin </p>
                </div>
                <GreButton>More Details</GreButton>
            </div>
        </section>
    )
}
