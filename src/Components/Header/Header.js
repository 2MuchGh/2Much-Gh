import React from 'react';
import {Link} from "react-router-dom"
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="navbar">
            <nav className="navbarmenu">
                <ul className="navbarlist">
                    <li>
                        <Link to="/">
                            HOME
                        </Link>
                    </li>

                    <li>
                        <Link to="contact-us">
                            CONTACT
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
    )
}

export default Header
