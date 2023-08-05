import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'
import Navbar from './Navbar';

export default function NavbarBottom() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <>
            <div id='nav' className={scroll ? "nav-bar__bottom fixed-top bg-dark" : 'nav-bar__bottom'} aria-label="Main Menu">
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
