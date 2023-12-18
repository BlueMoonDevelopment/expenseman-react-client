import React, {useEffect} from 'react';
import SigninButton from "./SigninButton";

export default function Navbar(props: { signedIn: boolean }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src="/js/navbar.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    })


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
                            <SigninButton signedIn={props.signedIn}/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
        ;
}
