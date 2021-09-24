import React, { useRef, useEffect, useState } from 'react'
import * as styles from './Complain.module.css'
import bg from '../../assets/images/BG.jpg'
import { Modal, Spinner } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { Portal } from 'react-portal';
import { baseUrl } from '../../../logic/config';
import axios from 'axios';
import { getBase64 } from '../../../logic/base64';

export default function Complain() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const [isLoading, setisLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileName, setFileName] = useState(null);
    const [file, setFile] = useState(null);


    const inputFileRef = useRef( null );

    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }

    const onFileChange = (e) => {
        setFileName(formRef.current[2].files[0].name)
        getBase64(formRef.current[2].files[0], (result)=>{
            setFile(result);
        })
    }

    const formRef = useRef(null);

    const submitForm = async (e) => {
        setisLoading(true);
        e.preventDefault();
        console.log(formRef);
        const situation = formRef.current[0].value;
        const address = formRef.current[1].value;

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        const response = await axios.post(
            `${baseUrl}/anonymous-report`,
            {
                header: headers,
                situation: situation,
                address: address,
                proof: file,
                filename: fileName
            }
        )
        setisLoading(false);
        setIsModalOpen(true);

        console.log(response);
    }

    function Modal1(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName={styles.modal}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Complain Has Been Reported
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>You have successfully reported a crime regarding homeless people</h4>
              <p>
                A volunteer will contact you shortly and take further actions.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{border: 'none', backgroundColor: 'transparent'}} onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }

    return (
        <section>
            <div className={styles.content} style={{backgroundImage: `url(${bg})`}}>
                <h1 className={styles.title}>SEEN ANY<br/>CRIME<br/>NEAR YOU?</h1>
                <h2 className={styles.subTitle}>REPORT HERE</h2>
                <p className={styles.subDesc}>We assure your anonymity</p>
                <div className={styles.card}>
                    <h2>Report</h2>
                    <form className={styles.form} onSubmit={submitForm} ref={formRef}>
                        <textarea placeholder="Describe the Situation" required/>
                        <input type="text" placeholder="Full Address" required/>
                        <input type="file" onChange={onFileChange} ref={inputFileRef} id="files" hidden={true}/>
                        <span className={styles.label}>Any Proof (Optional)</span>
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
                </div>
            </div>
            <Modal1
                show={isModalOpen}
                onHide={() => {setIsModalOpen(false)}}
            />
            <Portal node={document && document.getElementById('loader')}>
                { 
                    isLoading&&<div className="loader-context">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                }
            </Portal>
        </section>
    )
}
