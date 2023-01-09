import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"
import { Button } from '@mui/material'

const Navbar = () => {

    const role="user"

    return (
        <div className='navbar'>
            <nav className='nav'>
                <h2><Link to="/">My <span>Portfolio</span></Link></h2>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {role==="admin" && <Link to="/create" className="nav-btn"><Button>Add projects</Button></Link>}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar