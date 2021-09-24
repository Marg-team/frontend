import React, {useEffect, useRef, useState} from 'react'
import { Spinner, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as styles from './Signup.module.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import { baseUrl } from '../../../logic/config'
import toast, { Toaster } from 'react-hot-toast'
import { Portal } from 'react-portal'

export default function Signup() {
    const history = useHistory();
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('secret_token');
        if(!!token){
            history.replace(`/`)
        }
    }, [history])

    const submitFormVolunteer = async (e) => {
        submitForm(e, 0);
    }

    const submitFormNgo = async (e) => {
        submitForm(e, 1);
    }
    
    const submitForm = async (e, type) => {
        setisLoading(true);
        e.preventDefault();

        const formRef = type===0?formRefVolunteer: formRefNgo;
        const ngoName = formRef.current[0].value;
        const name = formRef.current[type===0?0:1].value;
        const email = formRef.current[type===0?1:2].value;
        const phone = formRef.current[type===0?2:3].value;
        const password = formRef.current[type===0?3:4].value;
        const confirm = formRef.current[type===0?4:5].value;
        const panOrReg = formRef.current[type===0?5:6].value;
        const reasonOrAddr = formRef.current[type===0?6:7].value;

        if(password!==confirm){
            toast.error('password and confirm password doesn\'t match');
            setisLoading(false);
            return;
        }
        

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        try{
            const response = await axios.post(
                `${baseUrl}/auth/signup`,
                type===0?{
                    header: headers,
                    email: email,
                    password: password,
                    name: name,
                    phone: phone,
                    pan: panOrReg,
                    reason: reasonOrAddr
                }:{
                    header: headers,
                    ngo: ngoName,
                    email: email,
                    password: password,
                    name: name,
                    phone: phone,
                    reg: panOrReg,
                    address: reasonOrAddr 
                },
            )
            console.log(response);

            if(response.data.message!=="Signup successful") {
                toast.error(response.data.message)
                setisLoading(false);
                return;
            }
            localStorage.setItem('secret_token', response.data.token)
            if(!!response.data.user.volunteerRef){
                localStorage.setItem('volunteerRef', response.data.user.volunteerRef)
            }else if(!!response.data.user.ngoRef){
                localStorage.setItem('ngoRef', response.data.user.ngoRef)
            }
            
            setisLoading(false);

            history.push(`/admin/`);
            
        }catch(err){
            setisLoading(false);
            console.log(err);
        }

    }

    const formRefVolunteer = useRef(null);
    const formRefNgo = useRef(null);


    return (
        <section>
            <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
                <div id={styles.formContent}>

                    <div>
                        <h1>AASHROY Admin Panel</h1>
                    </div>
                    <Tabs defaultActiveKey="volunteer" className="mb-3">
                        <Tab eventKey="volunteer" title="Volunteer">
                            <h2>Volunteer</h2>
                            <form ref={formRefVolunteer} onSubmit={submitFormVolunteer}>
                                <input type="text" id="name" placeholder="Full Name" required/>
                                <input type="text" id="email" placeholder="Email" required/>
                                <input type="text" id="phone" placeholder="Phone No." required/>
                                <input type="password" id="password" placeholder="Password" required/>
                                <input type="password" id="confirm-password" placeholder="Confirm Password" required/>
                                <input type="text" id="pan" placeholder="Pan No." required/>
                                <input type="text" id="reason" placeholder="Why You Want To Be?" required/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </Tab>
                        <Tab eventKey="ngo" title="NGO">
                            <h2>NGO</h2>
                            <form ref={formRefNgo} onSubmit={submitFormNgo}>
                                <input type="text" id="ngo" placeholder="NGO Name" required/>
                                <input type="text" id="email" placeholder="Full Name" required/>
                                <input type="text" id="password" placeholder="Email" required/>
                                <input type="text" id="password" placeholder="Phone No." required/>
                                <input type="password" id="password" placeholder="Password" required/>
                                <input type="password" id="password" placeholder="Confirm Password" required/>
                                <input type="text" id="password" placeholder="Registration ID" required/>
                                <input type="text" id="password" placeholder="Address" required/>
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </Tab>
                    </Tabs>
                    
                    <div id={styles.formFooter}>
                        <Link to={`/login/`} className="underlineHover" href="#">Log In?</Link>
                    </div>

                </div>
            </div>

            <Portal node={document && document.getElementById('loader')}>
                { 
                    isLoading&&<div className="loader-context">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                }
            </Portal>
            <Toaster />
        </section>
    )
}
