// import '../assets/styles/TheGallery'
import Banner from '../../../components/Banner';
import Uhoh from '../../../components/Uh-oh';

export function TheGallery() {
    return (
        <>
            <div className="the-gallery page">
                {/* Banner */}
                <Banner title={"The Gallery"}/>
                <Uhoh />
            </div>
        </>
    ) 
}