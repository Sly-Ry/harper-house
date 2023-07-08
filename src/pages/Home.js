import JumbotronLayout from '../layout/JumbotronLayout'
import UpcomingLayout from '../layout/UpcomingLayout'
import ExtensionsLayout from '../layout/ExtensionsLayout'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/styles/Home.css'


export function Home() {    

    return (
        <>
            <div className="home">
                <JumbotronLayout />
                <UpcomingLayout />
                <ExtensionsLayout />
                {/* Future feature: Donate */}
            </div>
        </>
    ) 
}
