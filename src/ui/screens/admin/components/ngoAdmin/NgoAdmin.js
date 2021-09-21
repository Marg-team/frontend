import React from 'react'
import AdminCard from '../adminCard/AdminCard'
import AdminNav from '../adminNav/AdminNav'
import AdminSidebar from '../adminSidebar/AdminSidebar'
import CrimeReport from '../crimeReport/CrimeReport'
import DonationTile from '../donationTile/DonationTile'
import ReportTile from '../reportTile/ReportTile'
import * as styles from '../../Admin.module.css'

export default function NgoAdmin() {
    return (
        <>
            <AdminNav type={1}/>
            <div className={styles.main}>
                <AdminSidebar/>
                <div className={styles.content}>
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
                    <AdminCard title="Crime Report">
                        <CrimeReport/>
                    </AdminCard>
                </div>
            </div>
        </>
    )
}
