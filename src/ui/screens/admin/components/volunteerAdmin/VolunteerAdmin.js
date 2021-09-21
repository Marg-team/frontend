import React from 'react'
import * as styles from '../../Admin.module.css'
import AdminCard from '../adminCard/AdminCard'
import AdminNav from '../adminNav/AdminNav'
import AdminSidebar from '../adminSidebar/AdminSidebar'
import DonationTile from '../donationTile/DonationTile'
import NgoRequest from '../ngoRequest/NgoRequest'
import ReportTile from '../reportTile/ReportTile'

export default function VolunteerAdmin() {
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
        </>
    )
}
