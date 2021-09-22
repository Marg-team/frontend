import React from 'react'
import { NavLink } from 'react-router-dom'
import * as styles from './AdminSidebar.module.css'

export default function AdminSidebar({ngo_q=0, donation_q=0, report_q=0}) {
    return (
        <section className={styles.sidebar}>
            <NavLink className={styles.nav_btn} to={`/`}>
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66289 3.4676C7.61927 3.42588 7.56124 3.40259 7.50088 3.40259C7.44052 3.40259 7.38248 3.42588 7.33887 3.4676L1.94531 8.62004C1.92241 8.64195 1.90418 8.66828 1.89175 8.69744C1.87931 8.72659 1.87291 8.75797 1.87295 8.78967L1.87207 13.6254C1.87207 13.874 1.97084 14.1125 2.14666 14.2883C2.32247 14.4641 2.56093 14.5629 2.80957 14.5629H5.625C5.74932 14.5629 5.86855 14.5135 5.95645 14.4256C6.04436 14.3377 6.09375 14.2185 6.09375 14.0942V10.1098C6.09375 10.0476 6.11844 9.98801 6.1624 9.94406C6.20635 9.9001 6.26596 9.87541 6.32812 9.87541H8.67187C8.73403 9.87541 8.79365 9.9001 8.8376 9.94406C8.88156 9.98801 8.90625 10.0476 8.90625 10.1098V14.0942C8.90625 14.2185 8.95563 14.3377 9.04354 14.4256C9.13145 14.5135 9.25068 14.5629 9.375 14.5629H12.1893C12.4379 14.5629 12.6764 14.4641 12.8522 14.2883C13.028 14.1125 13.1268 13.874 13.1268 13.6254V8.78967C13.1268 8.75797 13.1204 8.72659 13.108 8.69744C13.0955 8.66828 13.0773 8.64195 13.0544 8.62004L7.66289 3.4676Z" fill="white"/>
                    <path d="M14.3821 7.65381L12.1907 5.55732V2.37598C12.1907 2.25166 12.1413 2.13243 12.0534 2.04452C11.9655 1.95661 11.8463 1.90723 11.722 1.90723H10.3157C10.1914 1.90723 10.0722 1.95661 9.98427 2.04452C9.89637 2.13243 9.84698 2.25166 9.84698 2.37598V3.31348L8.15011 1.69102C7.99132 1.53047 7.75518 1.43848 7.50001 1.43848C7.24571 1.43848 7.01016 1.53047 6.85138 1.69131L0.619933 7.65322C0.437706 7.829 0.414855 8.11816 0.580675 8.30859C0.622315 8.35666 0.6733 8.39575 0.730528 8.42349C0.787756 8.45122 0.850029 8.46703 0.913558 8.46993C0.977087 8.47284 1.04054 8.46278 1.10006 8.44039C1.15958 8.41799 1.21392 8.38371 1.25978 8.33965L7.33888 2.53066C7.38249 2.48894 7.44053 2.46565 7.50089 2.46565C7.56125 2.46565 7.61928 2.48894 7.6629 2.53066L13.7426 8.33965C13.8321 8.42553 13.9521 8.4724 14.0762 8.46998C14.2002 8.46757 14.3183 8.41606 14.4044 8.32676C14.5843 8.14043 14.5693 7.83281 14.3821 7.65381Z" fill="white"/>
                </svg>
                <span>Dashboard</span>
            </NavLink>
            <div className={styles.nav_notice}>
                <span>Your Contribution</span>
                <p>
                    {
                        ngo_q + " NGO approved, "
                    }
                    {
                        donation_q + " Donation taken, "
                    }
                    {
                        report_q + " Report Assigned"
                    }
                </p>
            </div>
        </section>
    )
}