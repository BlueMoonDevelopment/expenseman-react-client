import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {GOOGLE_OAUTH_CLIENT_ID} from "../configuration";
import {GoogleOAuthProvider} from "@react-oauth/google";

const Layout = () => {
    return (
        <>
            <section className="hero is-fullheight">
                <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
                    <Navbar/>
                    <div className="hero-body">
                        <Outlet/>
                    </div>
                    <Footer/>
                </GoogleOAuthProvider>
            </section>
        </>)
};

export default Layout;
