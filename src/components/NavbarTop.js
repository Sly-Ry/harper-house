export default function NavbarTop() {
    return (
        <div className="nav-bar__top-wrapper">
            <ul className="nav-bar__top container">
                <li style={{marginRight: "auto"}}>
                    <a className="nav-bar__top-link" href="tel:#.###.###.###">
                        <span style={{fontWeight: 'normal'}}>Call us at&nbsp;</span>1.800.HARPERS
                    </a>
                </li>
                <li>
                    <a href="/tickets">Tickets</a>
                </li>
                <li>
                    <a href="/support">Support Us</a>
                </li>
                <li>
                    <a href="/donate">Donate</a>
                </li>
                <li>
                    <a href="/calendar">Calendar</a>
                </li>
            </ul>
        </div>
    ) 
};