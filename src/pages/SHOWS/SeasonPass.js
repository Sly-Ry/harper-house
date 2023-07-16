import Banner from '../../components/Banner';
import Uhoh from '../../components/Uh-oh';

export function SeasonPass() {
    return (
        <>
            <div className="season-pass page">
                {/* Banner */}
                <Banner title={"Season Pass"}/>
                <Uhoh />
            </div>
        </>
    ) 
}