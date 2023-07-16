// import '../assets/styles/Subscribe'
import Banner from '../../components/Banner';
import Uhoh from '../../components/Uh-oh';

export function Subscribe() {
    return (
        <>
            <div className="subscribe page">
                {/* Banner */}
                <Banner title={"Subscribe"}/>
                <Uhoh />
            </div>
        </>
    ) 
}