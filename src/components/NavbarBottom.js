import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'
import Dropdown from './Dropdown';

export default function NavbarBottom() {

    return (
        <>
            <nav className="nav-bar__bottom" aria-label="Main Menu">
                <Link to='/' className='nav-bar__logo'>
                    HARPER
                    <span style={{color: 'red'}}><Icons.FaHome /></span>
                    HOUSE
                </Link>
                <ul className="nav-bar__bottom-body">
                    <Dropdown />
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="">VISITING</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="">ARCHIVE</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="">
                            SUPPORT<span className='space'>US</span>
                        </a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="">OPPORTUNITY</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="">
                            ABOUT<span className='space'>US</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>  
    ) 
}
