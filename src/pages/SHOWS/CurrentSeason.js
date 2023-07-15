import '../../assets/styles/Current.css'
import ShowCard from '../../components/ShowCard';
import MiniShowCard from '../../components/MiniShowCard';
import Banner from '../../components/Banner';
import { showList } from '../../data/ShowList';

export function CurrentSeason() {
    return (
        <>
            <div className="current-season page">
                {/* Banner */}
                <Banner title={"Current Season"}/>
                <div className='container-fluid text-center bg-white'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 pt-5 d-flex justify-content-center align-items-center">
                        {showList.map(item => {
                            if (item.id < 3) {
                                return (
                                    <ShowCard 
                                        key={item.id}
                                        img={item.img} 
                                        fontColor={item.fontColor} 
                                        fontFamily={item.fontFamily} 
                                        title={item.title} 
                                        date={item.date}
                                        synopsis={item.synopsis}
                                        path={item.path}  
                                    />
                                )
                            }
                            else {
                                return (
                                    <MiniShowCard 
                                        key={item.id}
                                        img={item.img} 
                                        fontColor={item.fontColor} 
                                        fontFamily={item.fontFamily} 
                                        title={item.title} 
                                        date={item.date}
                                        synopsis={item.synopsis}
                                        path={item.path}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    ) 
}