import React, { useRef } from 'react'
import * as styles from './OtherReport.module.css'

export default function OtherReport() {
    const inputFileRef = useRef( null );
    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Your Full Name"/>
            <input type="text" placeholder="Your Phone No."/>
            <input type="text" placeholder="Victim's Full Address"/>
            <input type="text" placeholder="Details About The Victim"/>
            <input type="file" ref={inputFileRef} id="files" hidden={true}/>
            <span className={styles.label}>Proof</span>
            <label className={styles.file} for="files">
                <span>Drop File here</span>
                <span>or</span>
                <button onClick={onFileClick}>Select File</button>
            </label>
            <button className={styles.btn} type="submit">SUBMIT</button>
        </form>
    )
}
