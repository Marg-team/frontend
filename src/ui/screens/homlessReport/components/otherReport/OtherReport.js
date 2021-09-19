import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { Modal, Spinner } from 'react-bootstrap';
import { Portal } from 'react-portal';
import { getBase64 } from '../../../../../logic/base64';
import { baseUrl } from '../../../../../logic/config';
import * as styles from './OtherReport.module.css'

export default function OtherReport() {
    const inputFileRef = useRef( null );
    const [fileName, setFileName] = useState(null)
    const [file, setFile] = useState(null);

    const [isLoading, setisLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onFileClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }

    const onFileChange = (e) => {
        setFileName(formRef.current[4].files[0].name)
        getBase64(formRef.current[4].files[0], (result)=>{
            setFile(result);
        })
    }
    const formRef = useRef(null);

    const submitForm = async (e) => {
        setisLoading(true);
        e.preventDefault();
        console.log(formRef);
        const name = formRef.current[0].value;
        const contact = formRef.current[1].value;
        const address = formRef.current[2].value;
        const desc = formRef.current[3].value;

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        const response = await axios.post(
            `${baseUrl}/homelessform`,
            {
                header: headers,
                name: name,
                him_homeless: false,
                contact: contact,
                address: address,
                desc: desc,
                proof: file
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
                Report Has Been Submitted
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>You have successfully submitted a report that their someone homeless poeple needed help</h4>
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
        <>
            <form className={styles.form} ref={formRef} onSubmit={submitForm}>
                <input type="text" placeholder="Your Full Name" required/>
                <input type="text" placeholder="Your Phone No." required/>
                <input type="text" placeholder="Victim's Full Address" required/>
                <input type="text" placeholder="Details About The Victim" required/>
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
        </>
    )
}
