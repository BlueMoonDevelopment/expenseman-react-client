import React, {useEffect} from 'react';
import axios from "axios";
import {API_ENDPOINT_URL, DEVELOPMENT_MODE, GOOGLE_OAUTH_CLIENT_ID} from "./configuration";
import {getUrl} from "./tools/Tools";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SigninButton(props: { signedIn: boolean }) {
    useEffect(() => {
        if (!props.signedIn) {
            const script = document.createElement('script');
            script.src = "https://accounts.google.com/gsi/client";
            script.async = true;
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
        }

    })

    function handleClick() {
        axios.get(getUrl('/auth/signout'), {
            withCredentials: true,
            validateStatus: function (status) {
                return status < 500;
            }
        }).then(res => {
            if (res.status === 200) {
                toast.success("You have been signed out!", {
                    position: toast.POSITION.TOP_CENTER
                });
            } else if (res.status === 401) {
                toast.warning("You are already signed out!", {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.error("Error! Please try reloading the page...", {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        });
    }

    if (!props.signedIn) {
        return (
            <>
                <div id="g_id_onload"
                     data-client_id={GOOGLE_OAUTH_CLIENT_ID}
                     data-context="signin"
                     data-ux_mode="popup"
                     data-login_uri={(DEVELOPMENT_MODE ? "http://localhost:8082" : API_ENDPOINT_URL) + "/auth/google"}
                     data-auto_select="true"
                     data-itp_support="true"
                >
                </div>
                <div className="g_id_signin"
                     data-type="standard"
                     data-shape="pill"
                     data-theme="outline"
                     data-text="signin_with"
                     data-size="large"
                     data-logo_alignment="left"
                >
                </div>
            </>
        );
    } else {
        return (
            <>
                <button className="button is-info is-light is-normal" onClick={handleClick}>Sign out</button>
                <ToastContainer/>
            </>
        )
    }

}
