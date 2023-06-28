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
                    <a href="/tickets">TICKETS</a>
                </li>
                <li>
                    <a href="/subscribe">SUBSCRIBE</a>
                </li>
                <li>
                    <a href="/donate">DONATE</a>
                </li>
                <li>
                    <a href="/calendar">CALENDAR</a>
                </li>
            </ul>
        </div>
    ) 
};