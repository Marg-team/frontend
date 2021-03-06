import axios from 'axios';
import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { Portal } from 'react-portal';
import { baseUrl } from '../../../../../logic/config';
import AssignNgoOverlay from '../assignNgoOverlay/AssignNgoOverlay';
import * as styles from './DonationTile.module.css'

export default function DonationTile({donation, setDonation, type}) {
    const [isLoading, setisLoading] = useState(false);
    const [isOverlay, setIsOverlay] = useState(false)

    const onDelete = async () => {
        try{
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/donation/${donation._id}/${type===0?-1:0}`,
                {},
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log(response)
            setisLoading(false)
            setDonation(
                (donations)=>{
                    const r = [...donations];
                    const index = r.indexOf(donation);
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

    const assignNgo = async (ngoRef) => {
        try{
            setisLoading(true)
            const token = localStorage.getItem('secret_token');

            const response = await axios.post(
                `${baseUrl}/donation/${donation._id}/${type===0?1:2}`,
                JSON.stringify({
                    assignedTo: ngoRef
                }),
                {
                    headers: {
                        'Content-Type':'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            console.log(response)
            setisLoading(false)
            setDonation(
                (donations)=>{
                    const r = [...donations];
                    const index = r.indexOf(donation);
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
        <>
        <div className={styles.tile}>
            <div className={styles.contents}>
                <h4>{donation.name}</h4>
                <span>{donation.phone}</span>
                <span>{donation.address}</span>
                <span>
                    {donation.donation_clothes!==0&&`${donation.donation_clothes} Clothes `}
                    {donation.donation_food!==0&&`${donation.donation_food} Foods `}
                    {donation.donation_medicine!==0&&`${donation.donation_medicine} Medicines `}
                </span>
                <span>{donation.desc}</span>
            </div>
            {
                type!==3&&
                <div className={styles.buttons}>
                    <button onClick={type===0?onDone:assignNgo.bind(this, null)}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#21FA6B"/>
                            <path d="M7.76822 15.3599L12.7682 21.3599M11.5799 21.5135L24.1314 10.956M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#F9FFFB" strokeWidth="2"/>
                        </svg>
                    </button>
                    <button onClick={onDelete}>
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#C0C7C2"/>
                            <path d="M10.1423 10.9039L20.7331 22.32M10.2628 22.3244L21.2628 10.3244M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#FFFDFD" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            }
        </div>
        {type!==3&&<hr/>}
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
                    <AssignNgoOverlay donation={donation} onDone={assignNgo} onClose={()=>{setIsOverlay(false)}}/>
                </div>
            }
        </Portal>
        </>
    )
}
