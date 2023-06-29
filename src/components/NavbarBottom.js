import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'
import Navbar from './Navbar';

export default function NavbarBottom() {

    return (
        <>
            <div className="nav-bar__bottom" aria-label="Main Menu">
                <Link to='/' className='nav-bar__logo'>
                    HARPER
                    <span style={{color: 'red'}}><Icons.FaHome /></span>
                    HOUSE
                </Link>
                <Navbar />
            </div>
        </>  
    ) 
}
