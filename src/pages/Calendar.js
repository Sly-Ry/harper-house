// import '../assets/styles/Calendar'
import Banner from '../components/Banner';
import CardLink from '../components/CardLink';

export function Calendar() {
    return (
        <>
            <div className="Calendar page">
                {/* Banner */}
                <Banner title={"Calendar"}/>
                <CardLink title={"Calendar"}/>
            </div>
        </>
    ) 
}