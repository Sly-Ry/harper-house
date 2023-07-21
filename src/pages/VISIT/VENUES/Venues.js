// import '../assets/styles/Venues'
import Banner from '../../../components/Banner';
import Uhoh from '../../../components/Uh-oh';
// import CardLink from '../../../components/CardLink';

export function Venues() {
    return (
        <>
            <div className="venues page">
                {/* Banner */}
                <Banner title={"Venues"}/>
                {/* <CardLink subtitle={'VISITING'} title={"Venues"}/> */}
                <Uhoh />
            </div>
        </>
    ) 
}