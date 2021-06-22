import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Google Books</Link>
            <ul>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Link to="/saved">Saved</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;