import NavLayout from "../layout/NavLayout";
import ScreenReader from "./ScreenReader";

export default function Header() {
    return (
        <>
            <ScreenReader />
            <header className="global-navigation-wrapper">
                {/* Navigation Bar */}
                <NavLayout />
            </header>
        </> 
    )
}