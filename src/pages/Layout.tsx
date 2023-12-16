import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
    return (
        <>
            <section className="hero is-fullheight">
                <Navbar/>
                <div className="hero-body">
                    <Outlet/>
                </div>
                <Footer/>
            </section>
        </>)
};

export default Layout;
