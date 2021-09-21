import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import AdminCard from './components/adminCard/AdminCard';
import AdminNav from './components/adminNav/AdminNav';
import AdminSidebar from './components/adminSidebar/AdminSidebar';
import * as styles from './Admin.module.css'
import AdminTable from './components/adminTable/AdminTable';
import ReportTile from './components/reportTile/ReportTile';

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
            <AdminNav/>
            <div className={styles.main}>
                <AdminSidebar/>
                <div className={styles.content}>
                    <AdminCard title="NEW NGO REQUEST">
                        <AdminTable/>
                    </AdminCard>
                    <div className={styles.sideway}>
                        <AdminCard className={styles.report} title="Recent Reports">
                            <ReportTile/>
                            <ReportTile/>

                        </AdminCard>

                        <AdminCard className={styles.donation} title="Donations">

                        </AdminCard>
                    </div>
                </div>
            </div>
            {/* {
                type===0&&<div>
                    
                </div>
            }
            {
                type===1&&<div>
                    Ngo
                </div>
            }
            {
                type===-1&&<Redirect to={`/`}/>
            } */}
        </div>
    )
}
