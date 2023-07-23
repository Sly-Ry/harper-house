// import '../assets/styles/Videos'
import { Link, Outlet } from "react-router-dom";
import { ArchiveItems } from "../data/ArchiveItems";

export function SeasonLayout() {
    return (
        <>
            <nav class="nav flex-column">
                {
                    ArchiveItems.toReversed().map(items => {
                        return (
                            <Link to={items.path}>S{items.id}: {items.yr} \\ {items.title}</Link>
                        )
                    })
                }
            </nav>
            <Outlet />
        </>
    ) 
}