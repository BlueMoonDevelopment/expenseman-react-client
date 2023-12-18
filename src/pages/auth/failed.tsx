import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export default function Failed() {
    const nav = useNavigate();

    useEffect(()=>{
        setTimeout(()=> nav('/'),5000);
    },[])
    return (
        <div className="container has-text-centered">
            <div className="notification is-danger">
                <p>Error during sign in process! Please try again.</p>
                <p>You will be redirected in 5 seconds...</p>
            </div>
        </div>
    );
}
