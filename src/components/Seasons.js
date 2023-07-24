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
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id={"flush-heading"+ show.id}>
                                                                <button 
                                                                    className="accordion-button collapsed bg-danger" 
                                                                    type="button" 
                                                                    data-bs-toggle="collapse" 
                                                                    data-bs-target={"#flush-collapse"+ show.id} 
                                                                    aria-expanded="false" 
                                                                    aria-controls={"flush-collapse"+ show.id}
                                                                >
                                                                    <h2 className='text-dark'>{show.title}</h2>
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
                                                                            <p>{show.date}</p>
                                                                        </div>
                                                                    </div>
                                                                    <p>Presented by {show.producer}</p>
                                                                    <p style={{fontStyle: "italic"}}>{'"' + show.synopsis + '"'}</p>
                                                                    <div className="row ">
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
                                                                    {/* <div className="row py-4">
                                                                        <div className="col-12">
                                                                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                                                                <div className="accordion-item">
                                                                                    <h2 className="accordion-header" id="flush-headingVideo">
                                                                                        <button 
                                                                                            className="accordion-button collapsed" 
                                                                                            type="button" 
                                                                                            data-bs-toggle="collapse" 
                                                                                            data-bs-target="#flush-collapseVideo" 
                                                                                            aria-expanded="false" 
                                                                                            aria-controls="flush-collapseVideo"
                                                                                        >
                                                                                            <h2 className='text-dark'>Trailer</h2>
                                                                                        </button>
                                                                                    </h2>
                                                                                    <div 
                                                                                        id="flush-collapseVideo" 
                                                                                        className="accordion-collapseVideo collapse" 
                                                                                        aria-labelledby="flush-headingVideo" 
                                                                                        data-bs-parent="#accordionFlushExample">
                                                                                        <div className="accordion-body d-flex justify-content-center">
                                                                                            <iframe width="560" height="315" src={show.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item">
                                                                                    <h2 className="accordion-header" id="flush-headingPhoto">
                                                                                        <button 
                                                                                            className="accordion-button collapsed" 
                                                                                            type="button" 
                                                                                            data-bs-toggle="collapse" 
                                                                                            data-bs-target="#flush-collapsePhoto" 
                                                                                            aria-expanded="false" 
                                                                                            aria-controls="flush-collapsePhoto"
                                                                                        >
                                                                                            <h2 className='text-dark'>Photos</h2>
                                                                                        </button>
                                                                                    </h2>
                                                                                    <div 
                                                                                        id="flush-collapsePhoto" 
                                                                                        className="accordion-collapsePhoto collapse" 
                                                                                        aria-labelledby="flush-headingPhoto" 
                                                                                        data-bs-parent="#accordionFlushExample">
                                                                                        <div className="accordion-body">
                                                                                            <h2>img</h2>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
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