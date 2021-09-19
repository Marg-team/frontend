import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { Portal } from 'react-portal'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../logic/config'
import * as styles from './Login.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router'

export default function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('secret_token');
        if(!!token){
            history.replace(`/`)
        }
    }, [history])

    const submitForm = async (e) => {
        setisLoading(true);
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        try{
            const response = await axios.post(
                `${baseUrl}/auth/login`,
                {
                    header: headers,
                    email: email,
                    password: password,
                }
            )
            console.log(response);

            if(response.data.message) {
                toast.error(response.data.message)
                setisLoading(false);
                return;
            }
            localStorage.setItem('secret_token', response.data.token)
            setisLoading(false);

            history.push(`/admin/`);
            
        }catch(err){
            setisLoading(false);
            console.log(err);
        }

    }

    return (
        <section>
            <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
                <div id={styles.formContent}>

                    <div>
                        <h1>AASHROY Admin Panel</h1>
                    </div>

                    <form onSubmit={submitForm}>
                        <input ref={emailRef} type="text" id="email" placeholder="Email" required/>
                        <input ref={passwordRef} type="password" id="password" placeholder="Password" required/>
                        <input type="submit" value="Log In"/>
                    </form>

                    <div id={styles.formFooter}>
                        <Link to={`/signup/`} className="underlineHover" href="#">Sign up?</Link>
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
