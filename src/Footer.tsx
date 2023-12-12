import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="hero foot">
                <div className="level">
                    <div className="level-left">
                        <p>© 2022 BlueMoonDevelopment</p>
                    </div>
                    <div className="level-right">
                        <div className="columns">
                            <div className="column"><a href="https://github.com/BlueMoonDevelopment" target="_blank">
                                <button className="button is-link is-rounded"><span className="icon"><i
                                    className="fab fa-github"></i></span><span>BlueMoonDevelopment</span></button>
                            </a></div>
                            <div className="column"><a href="https://github.com/BlueMoonDevelopment/expenseman-web"
                                                       target="_blank">
                                <button className="button is-link is-rounded"><span className="icon"><i
                                    className="fab fa-github"></i></span><span>Source Code</span></button>
                            </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
