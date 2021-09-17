import React from 'react'
import * as styles from './GreButton.module.css'

export default function GreButton({children}) {
    return (
        <button type="button" className={styles.login_button_gre}>{children}</button>
    )
}
