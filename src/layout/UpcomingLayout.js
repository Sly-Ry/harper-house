// import proUp from '../assets/images/pro_images/pro_red.jpg'
import ShowCard from '../components/ShowCard'
import { showList } from '../data/ShowList'

export default function UpcomingLayout() {

    let i = 0;

    return (
        <>
            <div className='current-season container-fluid'>
                <div className="
                    row
                    pb-5
                    d-flex 
                    justify-content-center 
                    align-items-center"
                >
                    <h1 className='
                        upcoming-header
                        text-center 
                        fs-1 
                        m-4
                        mb-5'
                    >UPCOMING EVENTS</h1>
                        {showList.map(item => {
                            if(item.id > i && item.id <= i+2){
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
                                return null;
                            }
                        })}
                    </div>
                </div>
            {/* divider */}
            <div className="bar"></div>
        </>
    )
}