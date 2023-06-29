import { navItems } from "../data/NavItems";
import DropdownItems from './DropdownItems';

export default function Navbar() {
    return (
        <>
            <nav>
                <ul className="menus">
                    {navItems.map((menu, index) => {
                        const depthLevel = 0;
                        return <DropdownItems items={menu} key={index} depthLevel={depthLevel}/>;
                    })}
                </ul>
            </nav>
        </>
    );
}