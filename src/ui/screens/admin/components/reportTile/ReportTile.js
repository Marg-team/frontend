import React from 'react'
import * as styles from './ReportTile.module.css'

export default function ReportTile() {
    return (
        <div className={styles.tile}>
            <div className={styles.content}>
                <h3>Mukesh Komdami</h3>
                <div className={styles.items}>
                    <span>Type:</span>
                    <span>Myself</span>
                </div>
                <div className={styles.items}>
                    <span>Phone No.:</span>
                    <span>9814567891</span>
                </div>
                <div className={styles.items}>
                    <span>Full Address:</span>
                    <span>Matir Uporot ,Guwahati,786142</span>
                </div>
                <div className={styles.items}>
                    <span>About:</span>
                    <span>Mur ghor nai poisa pati nai kosto hoise mur kiba kori help kori diok dada plz plz</span>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.primary_btn}>ASSIGN</button>
                <button className={styles.secondary_btn}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 11.875C3.75 12.5625 4.3125 13.125 5 13.125H10C10.6875 13.125 11.25 12.5625 11.25 11.875V5.625C11.25 4.9375 10.6875 4.375 10 4.375H5C4.3125 4.375 3.75 4.9375 3.75 5.625V11.875ZM11.25 2.5H9.6875L9.24375 2.05625C9.13125 1.94375 8.96875 1.875 8.80625 1.875H6.19375C6.03125 1.875 5.86875 1.94375 5.75625 2.05625L5.3125 2.5H3.75C3.40625 2.5 3.125 2.78125 3.125 3.125C3.125 3.46875 3.40625 3.75 3.75 3.75H11.25C11.5937 3.75 11.875 3.46875 11.875 3.125C11.875 2.78125 11.5937 2.5 11.25 2.5Z" fill="#E53E3E"/>
                    </svg>
                    DELETE
                </button>
            </div>
        </div>
    )
}
