import { useParams } from "react-router-dom"
import { ArchiveItems } from "../data/ArchiveItems";

export function Seasons() {
    const { id } = useParams();

    return (
        <>
            <div className="seasons">
                {
                    ArchiveItems.map(items => {
                        if (id === items.path){
                            return (
                                <>
                                    <div className="title text-center mx-5">
                                        <h3>Season {items.id}: {items.sh_yr}</h3>
                                        <h1>{(items.title).toUpperCase()}</h1>
                                    </div>
                                    <div className="accordion accordion-flush" id="accordionFlushExample">
                                        {
                                            items.showList.map(show => {
                                                return (
                                                    <>
                                                        <div key={show.id} className="accordion-item">
                                                            <h2 className="accordion-header" id={"flush-heading"+ show.id}>
                                                                <button 
                                                                    className="accordion-button collapsed  rounded-2" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target={"#flush-collapse"+ show.id} 
                                                                    aria-expanded="false" 
                                                                    aria-controls={"flush-collapse"+ show.id}
                                                                >
                                                                    <h2 className='text-dark fs-1'>{show.title.toUpperCase()}</h2>
                                                                </button>
                                                            </h2>
                                                            <div 
                                                                id={"flush-collapse"+ show.id} 
                                                                className="accordion-collapse collapse" 
                                                                aria-labelledby={"flush-heading"+ show.id} 
                                                                data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">
                                                                    <div className="row">
                                                                        <div className="col-12 col-md-6">
                                                                            <p>Written by {show.by}</p>
                                                                        </div>
                                                                        <div className="col-12 col-md-6 text-end">
                                                                            <h5>{show.date}</h5>
                                                                        </div>
                                                                    </div>
                                                                    <p>Presented by {show.producer}</p>
                                                                    <p style={{fontStyle: "italic"}}>{'"' + show.synopsis + '"'}</p>
                                                                    <div className="row">
                                                                        <div className="cast col-12 col-md-6 d-flex flex-column">
                                                                            <h5 className="pt-4">CAST</h5>
                                                                            {
                                                                                show.cast.map(player => {
                                                                                    return (
                                                                                        <>
                                                                                            <p className="cast-crew">{player.name} as {player.role}</p>
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                        <div className="crew col-12 col-md-6 d-flex flex-column">
                                                                            <h5 className="pt-4">CREW</h5>
                                                                            {
                                                                                show.crew.map(member => {
                                                                                    return (
                                                                                        <>
                                                                                            <p className="cast-crew">{member.name} as {member.role}</p>
                                                                                        </>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                    <div className="row py-4">
                                                                        <div className="col-7">
                                                                            <h5>Promotional Imagery:</h5>
                                                                            <div className="card mb-3">
                                                                                <img src={show.img} alt="" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <h5>Trailer:</h5>
                                                                            <p>FEATURE COMING SOON</p>
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <h5>Photos: </h5>
                                                                            <p>FEATURE COMING SOON</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        }
                        else {
                            return null;
                        }
                    })
                }

            </div>
        </>
    ) 
}