import DropdownItems from './DropdownItems'

export const Dropdown = ({ item, submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? " dropdown-submenu" : "";

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {
                submenus.map((submenu, index) => (
                    <DropdownItems 
                        path={item}
                        items={submenu} 
                        key={index} 
                        depthLevel={depthLevel} 
                    />
                ))
            }
        </ul>
    );
};