export default function ScreenReader(){
    return (
        <div>
            <h1 className="sr-only">Theatre Shows and Tickets</h1>
            <a href="#skiplink-target" className="sr-only nav-bar_skiplink">Skip to main content</a>
            {/* Admin Banner */}
            <div className="announcement-hook-js"></div>
        </div>
    )
}