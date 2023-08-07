import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'
import Navbar from './Navbar';

export default function NavbarBottom() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 25);
        });
    }, []);

    return (
        <>
            <div 
                className={
                    scroll ?
                    "nav-bar__bottom c-height fixed-top bg-dark row p-0" : 
                    'nav-bar__bottom row m-0 p-0'
                } 
                aria-label="Main Menu"
            >
                <div className="col-md-12 col-xl-3 d-flex justify-content-center align-items-center">
                    <Link to='/' className='nav-bar__logo text-white text-center d-flex align-items-center py-4'>
                        <span>HARPER</span>
                        <span className='icon' style={scroll ? {color: 'red'} : {color: 'goldenrod'}}><Icons.FaHome /></span>
                        <span>HOUSE</span>
                    </Link>
                    
                </div>
                <div className="col-md-12 col-xl-9">
                    <Navbar />
                </div>
            </div>
        </>  
    ) 
}
