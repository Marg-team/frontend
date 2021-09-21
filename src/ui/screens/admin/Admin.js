import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import NgoAdmin from './components/ngoAdmin/NgoAdmin';
import VolunteerAdmin from './components/volunteerAdmin/VolunteerAdmin';

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
                type===0&&<VolunteerAdmin/>
            }
            {
                type===1&&<NgoAdmin/>
            }
            {
                type===-1&&<Redirect to={`/`}/>
            }
        </div>
    )
}
