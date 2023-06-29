import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function Dropdown() {

    const [dropdown, setDropDown] = useState(false);

    return (
        <>
            <li className="nav-bar__drop-menu"
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}>
                <a className="nav-bar__bottom-link" href="">
                    SHOWS<span className='space'>&</span>EVENTS
                </a>
                {dropdown && <DropdownItem />}
            </li>
        </>
    )
}