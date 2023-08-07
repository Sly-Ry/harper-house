import NavbarBottom from "../components/NavbarBottom";
import NavbarTop from "../components/NavbarTop";
import '../assets/styles/Navbar.css'

export default function Navbar() {
    return (
        <nav id="nav-menu" className="global-navigation-container global-nav-js mbn">
            <h2 className="sr-only">Navigation</h2>
            <NavbarTop />
            <NavbarBottom />
        </nav>
    ) 
}
