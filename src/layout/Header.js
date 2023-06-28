import Navbar from "../components/Navbar";
import ScreenReader from "../components/ScreenReader";

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