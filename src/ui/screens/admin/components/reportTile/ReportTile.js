import axios from 'axios';
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { Portal } from 'react-portal';
import { baseUrl } from '../../../../../logic/config';
import AssignNgoOverlay from '../assignNgoOverlay/AssignNgoOverlay';
import * as styles from './ReportTile.module.css'

export default function ReportTile({type=0, report, setReport}) {
    const [isLoading, setisLoading] = useState(false)
    const [isOverlay, setIsOverlay] = useState(false)

    const onDelete = async () => {
        try{
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/homelessform/${report._id}/${type===0?-1:0}`,
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
            setReport(
                (reports)=>{
                    const r = [...reports];
                    const index = r.indexOf(report);
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
    const onDone = async () => {
        setIsOverlay(true)
    }

    const assignReport = async (ngoRef) => {
        try{
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/homelessform/${report._id}/${type===0?1:2}`,
                JSON.stringify({
                    assignedTo: ngoRef
                }),
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
            setIsOverlay(false)
            setReport(
                (reports)=>{
                    const r = [...reports];
                    const index = r.indexOf(report);
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
        <div className={styles.tile}>
            <div className={styles.content}>
                <h3>{report.name??"Unknown"}</h3>
                <div className={styles.items}>
                    <span>Type:</span>
                    <span>{report.him_homeless?"Myself":"Others"}</span>
                </div>
                <div className={styles.items}>
                    <span>Phone No.:</span>
                    <span>{report.contact??"Unknown"}</span>
                </div>
                <div className={styles.items}>
                    <span>Full Address:</span>
                    <span>{report.address??"Unknown"}</span>
                </div>
                <div className={styles.items}>
                    <span>About:</span>
                    <span>{report.desc??"Unknown"}</span>
                </div>
            </div>
            {
                type!==3&&<div className={styles.buttons}>
                    <button className={styles.primary_btn} onClick={type===0?onDone:assignReport.bind(this, null)}>{type===0?'ASSIGN':'DONE'}</button>
                    <button className={styles.secondary_btn} onClick={onDelete}>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 11.875C3.75 12.5625 4.3125 13.125 5 13.125H10C10.6875 13.125 11.25 12.5625 11.25 11.875V5.625C11.25 4.9375 10.6875 4.375 10 4.375H5C4.3125 4.375 3.75 4.9375 3.75 5.625V11.875ZM11.25 2.5H9.6875L9.24375 2.05625C9.13125 1.94375 8.96875 1.875 8.80625 1.875H6.19375C6.03125 1.875 5.86875 1.94375 5.75625 2.05625L5.3125 2.5H3.75C3.40625 2.5 3.125 2.78125 3.125 3.125C3.125 3.46875 3.40625 3.75 3.75 3.75H11.25C11.5937 3.75 11.875 3.46875 11.875 3.125C11.875 2.78125 11.5937 2.5 11.25 2.5Z" fill="#E53E3E"/>
                        </svg>
                        DELETE
                    </button>
                </div>
            }
            <Portal node={document && document.getElementById('loader')}>
                { 
                    isLoading&&<div className="loader-context">
                        <Spinner animation="border" variant="primary"/>
                    </div>
                }
            </Portal>

            <Portal node={document && document.getElementById('loader')}>
                {
                    isOverlay&&<div className="loader-context">
                        <AssignNgoOverlay report={report} onDone={assignReport}/>
                    </div>
                }
            </Portal>
        </div>
    )
}
