// import '../assets/styles/Archives'
import CustomBanner from "../../components/CustomBanner";
import archiveBackground from '../../assets/images/photo2.jpg'
import { ArchiveItems } from "../../data/ArchiveItems";
import { NavLink } from "react-router-dom";

export function Archives() {
    return (
        <>
            <div className="archives page">
                {/* CustomBanner */}
                <CustomBanner title={"Archives"} background={archiveBackground}/>
                <nav className="nav flex-column p-5">
                    {
                        ArchiveItems.toReversed().map(items => {
                            return (
                                <NavLink to={items.path} className="py-2 fs-6">S{items.id}: {items.yr} || {items.title}</NavLink>
                            )
                        })
                    }
                </nav>

            </div>
        </>
    ) 
}