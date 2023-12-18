import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import {ReactComponent as MySVG} from "./icons/top-arrow.svg";

export default function Footer() {
    const styles: React.CSSProperties = {
        backgroundColor: '#0e72b3',
        color: 'white'
    }
    return (
        <>
            <ScrollToTop smooth component={<MySVG/>} style={styles}/>
            <footer className="footer">
                <div className="hero foot">
                    <div className="level">
                        <div className="level-left">
                            <p>© 2022 BlueMoonDevelopment</p>
                        </div>
                        <div className="level-right">
                            <div className="columns">
                                <div className="column"><a href="https://github.com/BlueMoonDevelopment" target="_blank"
                                                           rel="noreferrer">
                                    <button className="button is-link is-rounded"><span className="icon"><i
                                        className="fab fa-github"></i></span><span>BlueMoonDevelopment</span></button>
                                </a></div>
                                <div className="column"><a
                                    href="https://github.com/BlueMoonDevelopment/expenseman-react-client"
                                    target="_blank" rel="noreferrer">
                                    <button className="button is-link is-rounded"><span className="icon"><i
                                        className="fab fa-github"></i></span><span>Source Code</span></button>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}
