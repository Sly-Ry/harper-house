import Navbar from "../layout/Navbar";
import ScreenReader from "./ScreenReader";

export default function Header() {
    return (
        <>
            <ScreenReader />
            <header className="global-navigation-wrapper">
                {/* Navigation Bar */}
                <Navbar />
            </header>
        </> 
    )
}