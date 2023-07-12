import Banner from '../../components/Banner'
import CardLink from '../../components/CardLink'

export function ShowsEvents() {
    return (
        <>
            <div className="shows-events page">
                {/* Banner */}
                <Banner title={"Shows & Events"}/>
                <CardLink title={"SHOWS & EVENTS"}/>
            </div>
        </>
    ) 
}