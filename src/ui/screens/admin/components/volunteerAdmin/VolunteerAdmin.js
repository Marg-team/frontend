import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../../../logic/config'
import * as styles from '../../Admin.module.css'
import AdminCard from '../adminCard/AdminCard'
import AdminNav from '../adminNav/AdminNav'
import AdminSidebar from '../adminSidebar/AdminSidebar'
import DonationTile from '../donationTile/DonationTile'
import NgoRequest from '../ngoRequest/NgoRequest'
import ReportTile from '../reportTile/ReportTile'

export default function VolunteerAdmin() {
    useEffect(() => {
        getAllDonation();
        getAllReport();
    }, [])

    const [donations, setdonations] = useState([]);
    const [reports, setreports] = useState([]);

    const getAllDonation = async () => {
        const token = localStorage.getItem('secret_token');

        const response = await axios.get(
            `${baseUrl}/donation/volunteer`,
            {
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        console.log(response)
        setdonations(response.data.donationForm)
    }

    const getAllReport = async () => {
        const token = localStorage.getItem('secret_token');

        const response = await axios.get(
            `${baseUrl}/homelessform/volunteer`,
            {
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
        )
        console.log(response)
        setreports(response.data.homelessform)
    }

    return (
        <>
            <AdminNav type={0}/>
            <div className={styles.main}>
                <AdminSidebar/>
                <div className={styles.content}>
                    <AdminCard title="NEW NGO REQUEST">
                        <NgoRequest/>
                    </AdminCard>
                    <div className={styles.sideway}>
                        <AdminCard className={styles.report} title="Recent Reports">
                            {
                                reports.map((e)=>{
                                    return <ReportTile
                                        type={0}
                                        report={e}
                                        key={e._id}
                                        setReport={setreports}
                                    />
                                })
                            }
                        </AdminCard>

                        <AdminCard className={styles.donation} title="Donations">
                            <hr/>
                            {
                                donations.map((e)=>{
                                    return <DonationTile
                                        donation={e}
                                        setDonation={setdonations}
                                        type={0}
                                        key={e._id}
                                    />
                                })
                            }
                        </AdminCard>
                    </div>
                </div>
            </div>
        </>
    )
}
