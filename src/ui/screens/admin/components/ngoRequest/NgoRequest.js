import axios from 'axios';
import React, { useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { Portal } from 'react-portal'
import { baseUrl } from '../../../../../logic/config';
import * as styles from './NgoRequest.module.css'

export default function NgoRequest({ngoRequests, setNgoRequest}) {
    const [isLoading, setisLoading] = useState(false);

    const onDone = async (ngoRequest) => {
        try{
            console.log(ngoRequest)
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/ngoConfig/active/${ngoRequest._id}`,
                {},
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )
            console.log(response)
            setisLoading(false)
            setNgoRequest(
                (ngoRequests)=>{
                    const r = [...ngoRequests];
                    const index = r.indexOf(ngoRequest);
                    if (index > -1) {
                        r.splice(index, 1);
                    }
                    return r;
                }
            )
        }catch (err){
            setisLoading(false)
            console.log(err)
        }
    }

    const onCancel = async (ngoRequest) => {
        try{
            console.log(ngoRequest)
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/ngoConfig/deactive/${ngoRequest._id}`,
                {},
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )
            console.log(response)
            setisLoading(false)
            setNgoRequest(
                (ngoRequests)=>{
                    const r = [...ngoRequests];
                    const index = r.indexOf(ngoRequest);
                    if (index > -1) {
                        r.splice(index, 1);
                    }
                    return r;
                }
            )
        }catch (err){
            setisLoading(false)
            console.log(err)
        }
    }

    return (
        <Table hover className={styles.table}>
            <thead>
                {
                ngoRequests.length!==0&&<tr>
                    <th>NGO NAME</th>
                    <th>OWNER NAME</th>
                    <th>REGISTRATION ID</th>
                    <th>ADDRESS</th>
                    <th>STATUS</th>
                </tr>
                }
            </thead>
            <tbody>
                {
                    ngoRequests.length===0? <span>No Report Found</span>
                    :ngoRequests.map((e, i)=>{
                        return <tr key={i}>
                            <td>
                                <span>{e.ngo}</span>
                                <p>{e.email}<br/>{e.phone}</p>
                            </td>
                            <td>{e.name}</td>
                            <td>{e.reg}</td>
                            <td>{e.address}</td>
                            <td>
                                <button onClick={onDone.bind(this, e)}>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#21FA6B"/>
                                        <path d="M7.76822 15.3599L12.7682 21.3599M11.5799 21.5135L24.1314 10.956M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#F9FFFB" strokeWidth="2"/>
                                    </svg>
                                </button>
                                <button onClick={onCancel.bind(this, e)}>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#C0C7C2"/>
                                        <path d="M10.1423 10.9039L20.7331 22.32M10.2628 22.3244L21.2628 10.3244M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#FFFDFD" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            <Portal node={document && document.getElementById('loader')}>
                { 
                    isLoading&&<div className="loader-context">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                }
            </Portal>
        </Table>
    )
}
