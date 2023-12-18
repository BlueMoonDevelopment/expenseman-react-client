import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Scripts from "../Scripts";

const Layout = (props: { signedIn: boolean }) => {
    return (
        <>
            <section className="hero is-fullheight">
                <Navbar signedIn={props.signedIn}/>
                <div className="hero-body">
                    <Outlet/>
                </div>
                <Footer/>
            </section>
            <Scripts/>
        </>)
};

export default Layout;
