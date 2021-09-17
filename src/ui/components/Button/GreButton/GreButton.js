import React from 'react'
import * as styles from './GreButton.module.css'

export default function GreButton({children, onClick}) {
    return (
        <button type="button" onClick={onClick} className={styles.login_button_gre}>{children}</button>
    )
}
