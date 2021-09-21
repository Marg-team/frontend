import React from 'react'
import * as styles from './AdminNav.module.css'

export default function AdminNav({type=0}) {
    return (
        <nav className={styles.nav}>
            <div className={styles.header}>
                <h1>AASHROY</h1>
                <h4>{type===0?"VOLUNTEER DASHBOARD":"NGO DASHBOARD"}</h4>
            </div>
            <div className={styles.toolbar}>
                <input type="search" placeholder="Search Here"/>
                <button>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9429 3.40069C14.0687 2.45688 12.8477 1.93713 11.5 1.93713C10.1452 1.93713 8.92018 2.45374 8.05004 3.3917C7.17047 4.34 6.74192 5.62881 6.84254 7.02049C7.042 9.76612 9.13131 11.9996 11.5 11.9996C13.8688 11.9996 15.9545 9.76656 16.1571 7.02139C16.2591 5.64229 15.8278 4.35618 14.9429 3.40069Z" fill="#718096"/>
                        <path d="M19.4065 22.0611H3.59401C3.38704 22.0638 3.18207 22.0203 2.99401 21.9338C2.80596 21.8474 2.63955 21.72 2.5069 21.5611C2.21491 21.2121 2.09721 20.7355 2.18436 20.2535C2.5635 18.1502 3.74674 16.3835 5.60651 15.1432C7.25873 14.0421 9.35164 13.4361 11.5003 13.4361C13.6489 13.4361 15.7418 14.0426 17.394 15.1432C19.2538 16.383 20.437 18.1498 20.8161 20.253C20.9033 20.735 20.7856 21.2117 20.4936 21.5607C20.361 21.7197 20.1946 21.8471 20.0065 21.9336C19.8185 22.0202 19.6135 22.0638 19.4065 22.0611Z" fill="#718096"/>
                    </svg>
                </button>
                <button>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 17L21 12L16 7" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12H9" stroke="#718096" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

            </div>
            
        </nav>
    )
}
