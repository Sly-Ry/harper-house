// import '../assets/styles/CurrentSeason'
import Banner from '../../components/Banner';
import CardLink from '../../components/CardLink';

export function CurrentSeason() {
    return (
        <>
            <div className="coming-soon page">
                {/* Banner */}
                <Banner title={"Current Season"}/>
                <CardLink title={"Current Season"}/>
            </div>
        </>
    ) 
}