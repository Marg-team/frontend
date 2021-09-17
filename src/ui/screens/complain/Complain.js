import React, { useRef } from 'react'
import * as styles from './Complain.module.css'
import bg from '../../assets/images/BG.jpg'

export default function Complain() {
    const inputFileRef = useRef( null );
    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }
    return (
        <section>
            <div className={styles.content} style={{backgroundImage: `url(${bg})`}}>
                <h1 className={styles.title}>SEEN ANY<br/>CRIME<br/>NEAR YOU?</h1>
                <h2 className={styles.subTitle}>REPORT HERE</h2>
                <p className={styles.subDesc}>We assure your anonymity</p>
                <div className={styles.card}>
                    <h2>Report</h2>
                    <form className={styles.form}>
                        <textarea placeholder="Describe the Situation"/>
                        <input type="text" placeholder="Full Address"/>
                        <input type="file" ref={inputFileRef} id="files" hidden={true}/>
                        <span className={styles.label}>Any Proof (Optional)</span>
                        <label className={styles.file} htmlFor="files">
                            <span>Drop File here</span>
                            <span>or</span>
                            <button onClick={onFileClick}>Select File</button>
                        </label>
                        <button className={styles.btn} type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
