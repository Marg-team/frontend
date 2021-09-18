import React, { useRef, useState } from 'react'
import * as styles from './OtherReport.module.css'

export default function OtherReport() {
    const inputFileRef = useRef( null );
    const [fileName, setFileName] = useState(null)

    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }

    const onFileChange = (e) => {
        setFileName(formRef.current[4].files[0].name)
    }
    const formRef = useRef(null);

    return (
        <form className={styles.form} ref={formRef}>
            <input type="text" placeholder="Your Full Name"/>
            <input type="text" placeholder="Your Phone No."/>
            <input type="text" placeholder="Victim's Full Address"/>
            <input type="text" placeholder="Details About The Victim"/>
            <input type="file" onChange={onFileChange} ref={inputFileRef} id="files" hidden={true}/>
            <span className={styles.label}>Proof</span>
            <label className={styles.file} htmlFor="files">
            {   
                !fileName?<>
                    <span>Drop File here</span>
                    <span>or</span>
                    <button onClick={onFileClick}>Select File</button>
                </>:
                <>
                    <span>{fileName} is selected</span>
                    <button onClick={onFileClick}>Select Another File</button>
                </>
            }
            </label>
            <button className={styles.btn} type="submit">SUBMIT</button>
        </form>
    )
}
