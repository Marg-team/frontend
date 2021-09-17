import React from 'react'
import GreButton from '../../../../components/Button/GreButton/GreButton'
import * as styles from './Volunteer.module.css'

export default function Volunteer() {
    return (
        <section>
            <div className={styles.volunteer}>
                <h3>Want to be a Volunteee for XYZ ?</h3>

                <div className={styles.line}></div>
                <p>Want to help the community? Become a </p>
                <p>volunteer here and take the responsibility.</p>
                <GreButton>Apply here</GreButton>
            </div>
        </section>
    )
}