import Banner from '../../components/Banner'
import CardLink from '../../components/CardLink'

export function ShowsEvents() {
    return (
        <>
            <div className="shows-events page bg-white">
                {/* Banner */}
                <Banner title={"SHOWS & EVENTS"}/>
                <CardLink title={"SHOWS & EVENTS"}/>
            </div>
        </>
    ) 
}