import React from 'react';
import {Link} from "react-router-dom"
import "./NavBar.css";

function NavBar() {
    return (
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-ligh"
            className="Navbarmenu">
                <ul className="Navbarlist">
                    <li>
                        <Link to="/blog">
                            BLOG
                        </Link>
                    </li>

                    <li>
                        <Link to="/sports">
                            SPORTS
                        </Link>
                    </li>

                    <li>
                        <Link to="/entertainment">
                            ENTERTAINMENT
                        </Link>
                    </li>

                    <li>
                        <Link to="/politics">
                            POLITICS
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
