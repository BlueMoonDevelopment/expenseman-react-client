import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import ResponsiveAppBar from "./ResponsiveAppBar";

const Layout = (props: { signedIn: boolean }) => {
    return (
        <>
            <section className="hero is-fullheight">
                <ResponsiveAppBar signedIn={props.signedIn}/>
                <Outlet/>
                <Footer/>
            </section>
        </>)
};

export default Layout;
