import React from 'react';
import axios from "axios";
import {useGoogleLogin} from "@react-oauth/google";
import {getUrl} from "./tools/Tools";

export default function Navbar() {

    const googleLogin = useGoogleLogin({
        onSuccess: async ({code}) => {
            const tokens = await axios.post(getUrl('/auth/google'), {
                code,
            });
            console.log(tokens);
        },
        onError: () => {
            console.log("Login failed");
        },
        flow: 'auth-code',
        ux_mode: 'popup',
    });
    return (
        <div className="hero-head">
            <nav className="navbar is-primary">
                <div className="container">
                    <div className="navbar-brand"><a className="navbar-item" href="/"><img alt="Logo"
                                                                                           src="/img/logo/transparent-bg/expenseman-logo-transparent-with-symbol.png"
                                                                                           sizes="124x124"/></a><span
                        className="navbar-burger burger"
                        data-target="navbarMenu"><span></span><span></span><span></span></span></div>
                    <div className="navbar-menu" id="navbarMenu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/imprint">
                                <p>Imprint</p>
                            </a>
                            <a className="navbar-item" href="https://github.com/BlueMoonDevelopment"
                               target="_blank" rel="noreferrer">
                                <p>GitHub</p>
                            </a>
                            <a className="navbar-item" href="https://bluemoondev.org/discord" target="_blank"
                               rel="noreferrer">
                                <p>Discord</p>
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="buttons">
                            <button onClick={() => googleLogin()}
                                    className="navbar-item button is-primary is-light">Sign in/up
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
