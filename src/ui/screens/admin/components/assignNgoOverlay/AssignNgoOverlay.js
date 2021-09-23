import React, { useEffect, useState } from 'react'
import * as styles from './AssignNgoOverlay.module.css'
import ReportTile from '../reportTile/ReportTile';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { baseUrl } from '../../../../../logic/config';

export default function AssignNgoOverlay({report, onDone}) {
    const [allNgo, setallNgo] = useState([])

    const getAllNgo = async () => {
        const token = localStorage.getItem('secret_token');

        const response = await axios.get(
            `${baseUrl}/ngoConfig/activated`,
            {
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        console.log(response)
        setallNgo(response.data.deactivatedNgo)
    }

    useEffect(() => {
        getAllNgo();
    }, [])

    console.log(report)
    return (
        <div className={styles.card}>
            <ReportTile report={report} type={3}/>
            <div className={`${styles.card} ${styles.child}`}>
                <h2>Assign the nearest NGO</h2>
                <Table hover className={`${styles.table}`}>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ADDRESS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allNgo.length===0? <span>No NGO Found</span>
                            :allNgo.map((e)=>{
                                return <tr key={e._id}>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.address}
                                    </td>
                                    <td>
                                                                             
                                        <button onClick={onDone.bind(this, e._id)}>
                                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#21FA6B"/>
                                                <path d="M7.76822 15.3599L12.7682 21.3599M11.5799 21.5135L24.1314 10.956M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#F9FFFB" strokeWidth="2"/>
                                            </svg>
                                        </button>
                                        
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
