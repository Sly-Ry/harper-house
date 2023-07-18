// import '../assets/styles/Calendar'
import Banner from '../../components/Banner';
import Uhoh from '../../components/Uh-oh';

export function Calendar() {
    return (
        <>
            <div className="calendar page">
                {/* Banner */}
                <Banner title={"Calendar"}/>
                <Uhoh />
            </div>
        </>
    ) 
}