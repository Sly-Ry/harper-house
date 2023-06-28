import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa'

export default function NavbarBottom() {

    return (
        <>
            <nav className="nav-bar__bottom" aria-label="Main Menu">
                <Link to='/' className='nav-bar__logo'>
                    HARPER
                    <span style={{color: 'red'}}><Icons.FaTree /></span>
                    HOUSE
                </Link>
                <ul className="nav-bar__bottom-body">
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/shows-events">
                            SHOWS<span className='space'>&</span>EVENTS
                        </a>
                        {/* <ul id="sub-menu" className="nav-bar__sub-menu">
                            <li>
                                <a href="/current">
                                    <span>Current Season</span>
                                </a>
                            </li>
                            <li>
                                <a href="/current">
                                    <span>Coming Soon</span>
                                </a>
                            </li>
                            <li>
                                <a href="/current">
                                    <span>Season Pass</span>
                                </a>
                            </li>
                            <li>
                                <a href="/current">
                                    <span>Subscribe</span>
                                </a>
                            </li>
                            <li>
                                <a href="/current">
                                    <span>Discounts</span>
                                </a>
                            </li>
                            <li>
                                <a href="/current">
                                    <span>Calendar</span>
                                </a>
                            </li>
                        </ul> */}
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/visit">VISITATION</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/archive">ARCHIVE</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/support">
                            SUPPORT<span className='space'>US</span>
                        </a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/oppo">OPPORTUNITY</a>
                    </li>
                    <li className="nav-bar__drop-menu">
                        <a className="nav-bar__bottom-link" href="/shows-events">
                            ABOUT<span className='space'>US</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>  
    ) 
}
