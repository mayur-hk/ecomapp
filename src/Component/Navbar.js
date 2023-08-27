import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.jpg"
import {BsCart3} from "react-icons/bs"
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fs-4">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="50" height="50" alt="Logo"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul> 
                    </div>
                    <div className='position-relative mr-5'>
                        <NavLink to="./cart">
                        <BsCart3 style={{width: 30, height: 30}} />
                        </NavLink>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">5</span>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar