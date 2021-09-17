import React from 'react'
import * as styles from './LightButton.module.css'

export default function LightButton({children}) {
    return (
        <button type="button" className={styles.button}>{children}</button>
    )
}
