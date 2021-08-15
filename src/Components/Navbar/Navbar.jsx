import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" path="/">UTASK</Link>
                    
                    <div className="" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/"><i class=" iconSize bi bi-house-fill"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addtask"><i class=" iconSize bi bi-plus-circle-fill"></i></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
