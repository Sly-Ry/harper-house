// import '../assets/styles{{Current"Se'
import Banner from '../../components/Banner';
import proCurrent from '../../assets/images/pro_red.jpg'
import proUpcoming from '../../assets/images/pro_the-pillowman.jpg'
import pro3 from '../../assets/images/pro_the-last-five-years.jpg'
import pro4 from '../../assets/images/pro_not-omaha.jpg'
import pro5 from '../../assets/images/pro_les-miserables.jpg'

export function CurrentSeason() {
    return (
        <>
            <div className="current-season page">
                {/* Banner */}
                <Banner title={"Current Season"}/>
                <div className='container-fluid text-center bg-white'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-2 pt-5 d-flex justify-content-center align-items-center">
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-4 px-5 mb-5">
                            <div className="card">
                                <img src={proCurrent} className="card-img-top" alt="..."/>
                                <div class="card-img-overlay d-flex align-items-center">
                                    <h1 className="card-title" style={{'color': 'crimson'}}>RED</h1>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Raw and provocative, RED is a searing portrait of an artist’s ambition and vulnerability as he tries to create a definitive work for an extraordinary setting.</p>
                                </div>
                                <ul className="list-group list-group-flush pb-3">
                                    <li className="list-group-item">February 23 - March 12, 2023</li>
                                    <li className="list-group-item">Tickets</li>
                                    <a href="/" className="card-link">Inquiry?</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-4 px-5 mb-5">
                            <div className="card">
                                <img src={proUpcoming} className="card-img-top" alt="..."/>
                                <div class="card-img-overlay d-flex align-items-center">
                                    <h1 className="card-title" style={{'color': 'white'}}>The Pillowman</h1>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">In a totalitarian state a writer is questioned by the authorities about a spate of murders that bear similarities to their short stories. Is this life imitating art or something more sinister?</p>
                                </div>
                                <ul className="list-group list-group-flush pb-3">
                                    <li className="list-group-item">October 19 - Novemeber 3, 2023</li>
                                    <li className="list-group-item">Tickets</li>
                                    <a href="/" className="card-link">Inquiry?</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-md-1 row-cols-lg-3 d-flex justify-content-center align-items-center">
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-4 px-5 mb-5">
                            <div className="card" style={{width: "18"}}>
                                <img src={pro3} className="card-img-top" alt="..."/>
                                <div class="card-img-overlay d-flex align-items-center">
                                    <h1 className="card-title" style={{'color': 'white'}}>The Last Five Years</h1>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">An emotionally powerful and intimate musical about two New Yorkers in their twenties who fall in and out of love over the course of five years.</p>
                                </div>
                                <ul className="list-group list-group-flush pb-3">
                                    <li className="list-group-item">December 2 - January 16, 2024</li>
                                    <a href="/" className="card-link">Inquiry?</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-8 col-lg-7 col-xl-4 px-5 mb-5">
                            <div className="card" style={{width: "18"}}>
                                <img src={pro4} className="card-img-top" alt="..."/>
                                <div class="card-img-overlay d-flex align-items-center">
                                    <h1 className="card-title" style={{'color': 'orange'}}>Not Omaha</h1>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Not Omaha is a surreal, darkly odd story about the end of the world in a small town. What if the apocalypse was like the death of a parent – natural, strange and sometimes beautiful?</p>
                                </div>
                                <ul className="list-group list-group-flush pb-3">
                                    <li className="list-group-item">February 18 - March 4, 2024</li>
                                    <a href="/" className="card-link">Inquiry?</a>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-md-10 col-lg-8 col-xl-4 px-5 mb-5">
                            <div className="card">
                                <img src={pro5} className="card-img-top" alt="..."/>
                                <div class="card-img-overlay d-flex align-items-center">
                                    <h1 className="card-title" style={{'color': 'gold'}}>Les Miserables</h1>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">The story of a peasant named Jean Valjean and his desire for redemption, pursued by an insatiable officer, and swept into the beating heart of revolution.</p>
                                </div>
                                <ul className="list-group list-group-flush pb-3">
                                    <li className="list-group-item">March 10 - April 3, 2024</li>
                                    <a href="/" className="card-link">Inquiry?</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}