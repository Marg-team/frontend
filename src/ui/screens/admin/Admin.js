import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import AdminCard from './components/adminCard/AdminCard';
import AdminNav from './components/adminNav/AdminNav';
import AdminSidebar from './components/adminSidebar/AdminSidebar';
import * as styles from './Admin.module.css'
import NgoRequest from './components/ngoRequest/NgoRequest';
import ReportTile from './components/reportTile/ReportTile';
import DonationTile from './components/donationTile/DonationTile';

export default function Admin() {
    const [type, setType] = useState(null);

    useEffect(() => {
        if(!!localStorage.getItem('volunteerRef')){
            setType(0)
        }else if(!!localStorage.getItem('ngoRef')){
            setType(1)
        }else(
            setType(-1)
        )
    }, []);

    return (
        <div>
            {
                type===0&&<div>
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
                                        [1,2].map((e, i)=>{
                                            return <ReportTile 
                                                type={0}
                                                about="Mur ghor nai poisa pati nai kosto hoise mur kiba kori help kori diok dada plz plz"
                                                address="Matir Uporot ,Guwahati,786142"
                                                header="Mukesh Komdami"
                                                him_homeless={true}
                                                phone="9814567891"
                                                key={i}
                                            />
                                        })
                                    }
                                </AdminCard>

                                <AdminCard className={styles.donation} title="Donations">
                                    <hr/>
                                    <DonationTile/>
                                </AdminCard>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                type===1&&<div>
                    <AdminNav type={1}/>
                    <div className={styles.main}>
                        <AdminSidebar/>
                        <div className={styles.content}>
                            <AdminCard title="Crime Report">
                                <NgoRequest/>
                            </AdminCard>
                            <div className={styles.sideway}>
                                <AdminCard className={styles.report} title="Assigned Reports">
                                    {
                                        [1,2].map((e, i)=>{
                                            return <ReportTile 
                                                type={1}
                                                about="Mur ghor nai poisa pati nai kosto hoise mur kiba kori help kori diok dada plz plz"
                                                address="Matir Uporot ,Guwahati,786142"
                                                header="Mukesh Komdami"
                                                him_homeless={true}
                                                phone="9814567891"
                                                key={i}
                                            />
                                        })
                                    }
                                </AdminCard>

                                <AdminCard className={styles.donation} title="Donations">
                                    <hr/>
                                    <DonationTile/>
                                </AdminCard>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                type===-1&&<Redirect to={`/`}/>
            }
        </div>
    )
}
