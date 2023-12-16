import React from 'react';
import {API_ENDPOINT_URL, DEVELOPMENT_MODE, GOOGLE_OAUTH_CLIENT_ID} from "./configuration";

export default function Navbar() {

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
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
