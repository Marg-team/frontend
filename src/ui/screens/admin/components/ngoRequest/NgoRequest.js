import React from 'react'
import { Table } from 'react-bootstrap'
import * as styles from './NgoRequest.module.css'

export default function NgoRequest() {
    return (
        <Table hover className={styles.table}>
            <thead>
                <tr>
                    <th>NGO NAME</th>
                    <th>OWNER NAME</th>
                    <th>REGISTRATION ID</th>
                    <th>ADDRESS</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    [1,2,3].map((e, i)=>{
                        return <tr key={i}>
                            <td>
                                <span>NGO 1</span>
                                <p>et19@gmail.com</p>
                            </td>
                            <td>Mark</td>
                            <td>ET19BTHCS015</td>
                            <td>Akakhor tolot, Matir uporot, 786123</td>
                            <td>
                                <button>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#21FA6B"/>
                                        <path d="M7.76822 15.3599L12.7682 21.3599M11.5799 21.5135L24.1314 10.956M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#F9FFFB" strokeWidth="2"/>
                                    </svg>
                                </button>
                                <button>
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" fill="#C0C7C2"/>
                                        <path d="M10.1423 10.9039L20.7331 22.32M10.2628 22.3244L21.2628 10.3244M30 15.5001C30 23.5083 23.5081 30.0001 15.5 30.0001C7.49187 30.0001 1 23.5083 1 15.5001C1 7.49199 7.49187 1.00012 15.5 1.00012C23.5081 1.00012 30 7.49199 30 15.5001Z" stroke="#FFFDFD" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    )
}
