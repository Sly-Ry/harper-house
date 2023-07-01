import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'
import Navbar from './Navbar';

export default function NavbarBottom() {

    return (
        <>
            <div className="nav-bar__bottom" aria-label="Main Menu">
                <Link to='/' className='nav-bar__logo'>
                    <span>HARPER</span>
                    <span className='icon' style={{color: 'red'}}><Icons.FaHome /></span>
                    <span>HOUSE</span>
                </Link>
                <Navbar />
            </div>
        </>  
    ) 
}
