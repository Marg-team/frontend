import React from 'react'
import * as styles from './AdminCard.module.css'

export default function AdminCard({className="", title, children}) {
    return (
        <div className={` ${styles.card} ${className}`}>
            <h2 className={styles.header_text}>{title}</h2>
            {children}
        </div>
    )
}
