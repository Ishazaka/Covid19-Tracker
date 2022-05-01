import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu1">
                <Link className="navbar-brand" to='/'>Covid-19 🦠 Tracker</Link>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse mynav" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item ">
                            <Link className="nav-link" to='/'>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to='allcountries'>All Countries</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to='news'>Covid-19 News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to='*'>Symtoms & Prevention</Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar