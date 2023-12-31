export default function NavbarTop() {
    return (
        <div className="nav-bar__top-wrapper">
            <ul className="nav-bar__top container">
                <li style={{marginRight: "auto"}}>
                    <a className="nav-bar__top-link" href="tel:#.###.###.###">
                        <span style={{fontWeight: 'normal'}}>Questions? Call us at&nbsp;</span>1.800.HARPERS
                    </a>
                </li>
                <li>
                    <a href="/harper-house/tickets">TICKETS</a>
                </li>
                <li>
                    <a href="/harper-house/shows-events/subscribe">SUBSCRIBE</a>
                </li>
                <li>
                    <a href="/harper-house/support/donate">DONATE</a>
                </li>
                {/* <li>
                    <a href="/" className="btn disabled border-0 text-white">CALENDAR</a>
                </li> */}
                <li>
                    <a href="/signup-login" className="btn disabled border-0 text-white">LOGIN</a>
                </li>
            </ul>
        </div>
    ) 
};