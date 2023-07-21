// import '../assets/styles/TheRedDeck'
import Banner from '../../../components/Banner';
import Uhoh from '../../../components/Uh-oh';

export function TheRedDeck() {
    return (
        <>
            <div className="red-deck page">
                {/* Banner */}
                <Banner title={"The Red Deck"}/>
                <Uhoh />
            </div>
        </>
    ) 
}