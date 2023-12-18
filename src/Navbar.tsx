import React, {useEffect} from 'react';
import SigninButton from "./SigninButton";

export default function Navbar(props: { signedIn: boolean }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "/js/navbar.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    })


    return (
        <div className="hero-head">
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img alt="Logo" src="/img/logo/transparent-bg/expenseman-logo-transparent-with-symbol.png"
                             sizes="124x124"/>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarMenu" className="navbar-menu">
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
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <SigninButton signedIn={props.signedIn}/>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
        ;
}
