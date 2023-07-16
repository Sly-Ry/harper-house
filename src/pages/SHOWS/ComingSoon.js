import '../../assets/styles/ComingSoon.css'
import Banner from '../../components/Banner';
import SoonCard from '../../components/SoonCard';
import { comingSoon } from '../../data/ShowList';

export function ComingSoon() {
    return (
        <>
            <div className="coming-soon page">
                {/* Banner */}
                <Banner title={"Coming Soon"}/>
                <div className='container-fluid text-center bg-white'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 pt-5 d-flex justify-content-center align-items-center">
                        {comingSoon.map(item => {
                            if (item.id <= 9) {
                                return (
                                    <SoonCard 
                                        key={item.id}
                                        img={item.img} 
                                        fontColor={item.fontColor} 
                                        fontFamily={item.fontFamily}
                                        fontSize={item.fontSize}
                                        title={item.title}
                                        date={item.date}
                                        type={item.type}  
                                    />
                                )
                            }
                            // Future Feature -- hidden info for upcoming events
                            // else if (item.id > 3 && item.id <= 6) {
                            //     return (
                            //         <SoonCard 
                            //             key={item.id}
                            //             img={item.img}
                            //             date={item.date}
                            //             type={item.type}  
                            //         />

                            //     )
                            // }
                            // else if (item.id > 6 && item.id <= 9) {
                            //     return (
                            //         <SoonCard 
                            //             key={item.id}
                            //             img={item.img}
                            //             type={item.type}  
                            //         />

                            //     )
                            // }
                            else {
                                return null
                            }
                        })}
                    </div>
                </div>
            </div>
        </>
    ) 
}