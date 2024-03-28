import React from 'react';
import axios from "axios";
import {getUrl} from "../tools/Tools";
import {toast, ToastContainer} from "react-toastify";

export default function Account() {

    function createAccount() {
        axios.post(getUrl('/accounts'), {
            account_name: "TestAccount",
            account_balance: 69,
        }, {
            withCredentials: true,
            validateStatus: (status: number) => {
                return status < 500;
            },
        }).then(res => {
            if (res.status === 200) {
                toast.success("Account created (test)!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                toast.error("Error! Please try reloading the page...", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }).catch((err) => {
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }else if(err.request){
                console.log(err.request);
            }else{
                console.log(err.message);
            }

            console.log(err.config);
        })
    }
    return (
        <>
            <button className="button is-info is-light is-normal" onClick={createAccount}>Create Account</button>
            <ToastContainer/>
        </>
    );
}