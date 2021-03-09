import React from 'react'

import "./Style.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navigation">
                <div className="nav-heading">SNAPSHOT</div>
                    <ul className="non-bullet-inline-list">
                        <li className="list-item"><a className="link" href="#">Home</a></li>
                        <li className="list-item"><a className="link" href="#">About</a></li>
                        <li className="list-item"><a className="link" href="#">Repo</a></li>
                    </ul>
            </nav>

        </div>
    )
}

export default Navbar
