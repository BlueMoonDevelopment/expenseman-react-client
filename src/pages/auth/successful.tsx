import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export default function Successful() {
    const nav = useNavigate();

    useEffect(()=>{
        setTimeout(()=> nav('/'),5000);
    },[nav])

    return (
        <div className="container has-text-centered">
            <div className="notification is-success">
                <p>You have been signed in!</p>
                <p>You will be redirected in 5 seconds...</p>
            </div>
        </div>
    );
}
