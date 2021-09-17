import React from 'react'
import * as styles from './LightButton.module.css'

export default function LightButton({children, onClick}) {
    return (
        <button type="button" onClick={onClick} className={styles.button}>{children}</button>
    )
}
