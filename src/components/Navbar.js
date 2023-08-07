import { navItems } from "../data/NavItems";
import DropdownItems from './DropdownItems';
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav>
                <ul className="menus d-flex justify-content-center">
                    {navItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <DropdownItems items={menu} key={index} depthLevel={depthLevel}/>;
                    })}
                </ul>
                <div className="container-fluid form-box">
                    <div className="dropdown-box bg-white my-5 w-100">
                        <button className="w-100 btn dropdown-toggle d-flex justify-content-between align-items-center rounded-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Choose a Destination...
                        </button>
                        <ul className="text-center dropdown-menu rounded-0" style={{width: '95%'}}>
                            <NavLink to='/' className="text-dark">
                                <li className="dropdown-item py-3">THE LOBBY</li>
                            </NavLink>
                            <li><hr className="dropdown-divider"/></li> 
                            {navItems.map(menu => {
                                return (
                                    <>
                                        <NavLink to={menu.path} className="text-dark">
                                            <li className="dropdown-item py-2">{menu.title}</li>
                                        </NavLink>
                                    </>
                                )
                            })}
                            <li><hr className="dropdown-divider"/></li>
                            <NavLink to='/tickets' className="text-dark"><li className="dropdown-item py-3">BOX OFFICE</li></NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}