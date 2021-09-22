import axios from 'axios'
import React, { useState } from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { Portal } from 'react-portal'
import { baseUrl } from '../../../../../logic/config'
import * as styles from './CrimeReport.module.css'

export default function CrimeReport({crimes, setCrimes, isBeingLoad}) {
    const [isLoading, setisLoading] = useState(false)

    const onDelete = async (crime) => {
        try{
            console.log(crime)
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/anonymous-report/${crime._id}/${-1}`,
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
            setCrimes(
                (crimes)=>{
                    const r = [...crimes];
                    const index = r.indexOf(crime);
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

    const onDone = async (crime) => {
        try{
            console.log(crime)
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/anonymous-report/${crime._id}/${2}`,
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
            setCrimes(
                (crimes)=>{
                    const r = [...crimes];
                    const index = r.indexOf(crime);
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
        <Table hover className={`${styles.table}`}>
            <thead>
                <tr>
                    <th>DETAILS</th>
                    <th>ADDRESS</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    crimes.length===0&&!isBeingLoad? <span>No Report Found</span>
                    :crimes.map((e)=>{
                        return <tr key={e._id}>
                            <td>
                                {e.situation}
                            </td>
                            <td>
                                {e.address}
                            </td>
                            <td>
                                
                                {
                                    e.status&&e.status===1?
                                    <button>
                                        <svg height="100%" width="100%" viewBox="0 0 31 31">
                                            <defs/>
                                            <g>
                                            <path d="M30+15.5001C30+23.5083+23.5081+30.0001+15.5+30.0001C7.49187+30.0001+1+23.5083+1+15.5001C1+7.49199+7.49187+1.00012+15.5+1.00012C23.5081+1.00012+30+7.49199+30+15.5001Z" opacity="1" fill="#21fa6b"/>
                                            <path stroke="#f9fffb" stroke-width="2" d="M5.76822+15.3599L10.7682+21.3599M9.5799+21.5135L22.1314+10.956M30+15.5001C30+23.5083+23.5081+30.0001+15.5+30.0001C7.49187+30.0001+1+23.5083+1+15.5001C1+7.49199+7.49187+1.00012+15.5+1.00012C23.5081+1.00012+30+7.49199+30+15.5001Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
                                            <path stroke="#f9fffb" stroke-width="2" d="M9.76822+15.3599L14.7682+21.3599M13.5799+21.5135L26.1314+10.956" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>
                                            </g>
                                        </svg>
                                    </button>:
                                    <button onClick={onDone.bind(this, e)}>
                                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#21FA6B"/>
                                            <path d="M7.76822 15.3599L12.7682 21.3599M11.5799 21.5135L24.1314 10.956M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#F9FFFB" strokeWidth="2"/>
                                        </svg>
                                    </button>
                                        
                                }

                                <button onClick={onDelete.bind(this, e)}>
                                    <svg width="31" height="31" fill="none" viewBox="0 0 31 31"  xmlns="http://www.w3.org/2000/svg">
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
