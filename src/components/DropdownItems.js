import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export default function DropdownItems({ path, items, depthLevel, submenu }) {

    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (dropdown && ref.current && !ref.current.contains(e.target)) {
                setDropdown(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]);


    return (
        <li className='drop-items'
            ref={ref}
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
        >
            {items.submenu ? (
                <>
                    <button 
                        type="button" 
                        aria-haspopup="menu"
                        aria-expanded ={dropdown ? 'true' : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        <NavLink to={items.path} className='nav-main'>
                            {items.title} 
                            {" "} 
                            {depthLevel > 0 ? 
                                <span>&raquo;</span> : 
                                <span className="arrow"/>
                            }
                        </NavLink>
                    </button>  
                    <Dropdown 
                        depthLevel={depthLevel}
                        item={items.path}
                        submenus={items.submenu} 
                        dropdown={dropdown}
                    /> 
                </>
                ) : ( 
                    <>
                        <NavLink to={path + '/' + items.path} className='nav-main'>{items.title}</NavLink>
                    </>
                )
            }
        </li>
    );
}



