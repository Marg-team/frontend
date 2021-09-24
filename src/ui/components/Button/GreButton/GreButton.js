import React from 'react'
import * as styles from './GreButton.module.css'

export default function GreButton({children, onClick, type='button'}) {
    return (
        <button type={type} onClick={onClick} className={styles.login_button_gre}>{children}</button>
    )
}
