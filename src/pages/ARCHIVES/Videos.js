// import '../assets/styles/Videos'
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import { ArchiveItems } from "../../data/ArchiveItems";

export function Videos() {
    return (
        <>
            <div className="videos page">
                {/* Banner */}
                <Banner title={"Videos"}/>
                <nav class="nav flex-column">
                    {
                        ArchiveItems.toReversed().map(items => {
                            return (
                                <Link to={items.path}>S{items.id}: {items.yr} \\ {items.title}</Link>
                            )
                        })
                    }
                </nav>
            </div>
        </>
    ) 
}