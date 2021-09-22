import React, {useEffect, useState} from 'react'
import AdminCard from '../adminCard/AdminCard'
import AdminNav from '../adminNav/AdminNav'
import AdminSidebar from '../adminSidebar/AdminSidebar'
import CrimeReport from '../crimeReport/CrimeReport'
import DonationTile from '../donationTile/DonationTile'
import ReportTile from '../reportTile/ReportTile'
import * as styles from '../../Admin.module.css'
import { baseUrl } from '../../../../../logic/config'
import axios from 'axios'

export default function NgoAdmin() {
    useEffect(() => {
        getAllDonation();
        getAllCrime();
        getAllReport();
    }, [])

    const [donations, setdonations] = useState([])
    const [crimes, setcrimes] = useState([])
    const [reports, setreports] = useState([])


    const getAllDonation = async () => {

        const token = localStorage.getItem('secret_token');

        const response = await axios.get(
            `${baseUrl}/donation/ngo`,
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

    const getAllCrime = async () => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Request-Headers','*');

        const response = await axios.get(
            `${baseUrl}/anonymous-report`,
            {
                header: headers,
            }
        )
        console.log(response)
        setcrimes(response.data.anonymousReport)
    }

    const getAllReport = async () => {
        const token = localStorage.getItem('secret_token');

        const response = await axios.get(
            `${baseUrl}/homelessform/ngo`,
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
            <AdminNav type={1}/>
            <div className={styles.main}>
                <AdminSidebar/>
                <div className={styles.content}>
                    <div className={styles.sideway}>
                        <AdminCard className={styles.report} title="Assigned Reports">
                            {
                                reports.map((e)=>{
                                    return <ReportTile
                                        type={1}
                                        report={e}
                                        setReport={setreports}
                                        key={e._id}
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
                                        type={1}
                                        key={e._id}
                                    />
                                })
                            }
                        </AdminCard>
                    </div>
                    <AdminCard title="Crime Report">
                        <CrimeReport 
                            crimes={crimes}
                            setCrimes={setcrimes}
                        />
                    </AdminCard>
                </div>
            </div>
        </>
    )
}
