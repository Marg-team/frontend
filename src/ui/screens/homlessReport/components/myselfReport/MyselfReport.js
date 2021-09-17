import React, { useRef } from 'react'
import * as styles from './MyselfReport.module.css'

export default function MyselfReport() {
    const inputFileRef = useRef( null );
    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Your Full Name"/>
            <input type="text" placeholder="Your Phone No."/>
            <input type="text" placeholder="Your Full Address"/>
            <input type="text" placeholder="About Your Situation"/>
            <input type="file" ref={inputFileRef} id="files" hidden={true}/>
            <span className={styles.label}>Proof</span>
            <label className={styles.file} htmlFor="files">
                <span>Drop File here</span>
                <span>or</span>
                <button onClick={onFileClick}>Select File</button>
            </label>
            <button className={styles.btn} type="submit">SUBMIT</button>
        </form>
    )
}
