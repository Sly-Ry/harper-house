import React from "react";
import { useState } from "react";

export default function DropdownItem() {
    
    const [toggleDropDownItem, setToggleDropdownItem] = useState(false);
    
    return (
        <>
            <ul 
                id="sub-menu" 
                className={
                    toggleDropDownItem ? 
                    "nav-bar__sub-menu clicked" :
                    "nav-bar__sub-menu" 
                }
                onClick={
                    () => setToggleDropdownItem(!toggleDropDownItem)
                }
            >
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Current Season</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Coming Soon</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Season Pass</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Subscribe</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Discounts</a>
                </li>
                <li>
                    <a href="" onClick={() => setToggleDropdownItem(false)}>Calendar</a>
                </li>
            </ul>
        </>
    )
}