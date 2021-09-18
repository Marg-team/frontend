import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react'
import { Form, Modal, Spinner} from 'react-bootstrap'
import * as styles from './Donate.module.css'
import { baseUrl } from '../../../logic/config';
import { Portal } from 'react-portal';
import Button from '@restart/ui/esm/Button';


export default function Donate() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    const [isLoading, setisLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const submitForm = async (e) => {
        setisLoading(true);
        e.preventDefault();
        const name = formRef.current[0].value;
        const phone = formRef.current[1].value;
        const address = formRef.current[2].value;
        const isClothes = formRef.current[3].checked;
        const clothesQty = formRef.current[4].value;
        const isFood = formRef.current[5].checked;
        const foodQty = formRef.current[6].value;
        const isMedicine = formRef.current[7].checked;
        const MedicineQty = formRef.current[8].value;
        const desc = formRef.current[9].value;

        if(!isFood&!isMedicine&!isClothes){
            setisLoading(false);
            return;
        }

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        const response = await axios.post(
            `${baseUrl}/donation`,
            {
                header: headers,
                name: name,
                phone: phone,
                address: address,
                donation_food: isFood?+foodQty:0,
                donation_clothes: isClothes?+clothesQty:0,
                donation_medicine: isMedicine?+MedicineQty:0,
                desc: desc
            }
        )
        setisLoading(false);
        setIsModalOpen(true);

        console.log(response);
    }
    const formRef = useRef(null);

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
                Donation Form Submitted
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>You have successfully submitted your donation form</h4>
              <p>
                A volunteer will contact you shortly and will have the donation.
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
            <div className={styles.donate}>
                <div className={styles.bg}>
                    <svg className={styles.down} width="1500" height="569" viewBox="0 0 1500 569" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1552.57 0H-42.4331V569H-5.29881L-13.4331 532.52C-13.4331 532.52 154.837 584.278 500.232 464.179C746.436 378.57 929.987 411.944 1115.28 445.635C1189.94 459.209 1264.87 472.835 1344.31 478.751C1445.61 486.297 1510.72 486.361 1552.57 483.411V0Z" fill="url(#paint0_linear)"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="816.25" y1="-89.5648" x2="827.712" y2="919.298" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#6A9AE7"/>
                                <stop offset="1" stopColor="#281BC8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.content}>
                    <h1>Donate to homeless people if you feel like you have something extra.</h1>
                    <div className={styles.card}>
                        <h3>Fill up the form</h3>
                        <div className={styles.line}></div>
                        <form className={styles.form} onSubmit={submitForm} ref={formRef}>
                            <input type="text" placeholder="Your Full Name" required/>
                            <input type="text" placeholder="Your Phone No." required/>
                            <input type="text" placeholder="Your Full Address" required/>
                            <span className={styles.label}>Status</span>
                            <div className={styles.radio_group}>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Clothes"
                                        name="Clothes"
                                        type='checkbox'
                                        id="clothes"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Food"
                                        name="Food"
                                        type='checkbox'
                                        id="food"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                                <div className={styles.radio}>
                                    <Form.Check
                                        className={styles.radio_btn}
                                        label="Medicine"
                                        name="Medicine"
                                        type='checkbox'
                                        id="medicine"
                                    />
                                    <input type="text" placeholder="Quantity"/>
                                </div>
                            </div>
                            <input type="text" placeholder="Any Additional Details (optional)"/>
                            <button className={styles.btn} type="submit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
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
