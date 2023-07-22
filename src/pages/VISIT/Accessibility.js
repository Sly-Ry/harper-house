import '../../assets/styles/Accessibility.css'
import Banner from '../../components/Banner';

export function Accessibility() {
    return (
        <>
            <div className="access">
                {/* Banner */}
                <Banner title={"Accessibility"}/>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-4 d-flex flex-column justify-content-center p-5">
                            <h5>Harper House has always made inclusivity and accessibility a mainstay of our productions and events.</h5>
                            <h3>Assistive-Listening Devices</h3> 
                            <p>
                                Assistive-listening devices (ALDs) are available. Harper House offers one captioned* and sign-interpreted performance of every show. Contact the box office for dates and times.
                            </p>
                            <h3>Sensory-Friendly Performances</h3>
                            <p>
                                At Harper House, we offer Sensory Friendly performances for most Reader's Theatre Events designed especially for individuals on the Autism spectrum, those with sensory sensitivities, or anyone who might benefit from a supported and relaxed theatre environment.
                            </p>
                            <h3>Mobility</h3>
                            <p>
                                Mobility impaired access to each theatre is available, and accessible seating is available in all venues. Please call the Box Office at ###-###-#### for special requests or with questions. 
                                {/* The map on this page shows drop-off points. */}
                            </p>
                            <h3>Accessible Performances</h3>
                            <p>
                                Harper House is proud to be one of the most accessible theatres in Austin.
                            </p>
                            <p>
                                With updated assistive-listening technology, accessible seating in all three venues, and performances that are captioned and sign-interpreted we strive to meet the needs of everyone with different abilities.
                            </p>
                            <p>
                                Mobility impaired access to each theatre is available. Please call the Box Office at ###-###-#### for special requests or with questions. 
                                {/* The map below shows drop off points. */}
                            </p>
                            {/* <p>
                                Sign Interpreted and Open Captioned performances for Mainstage Events are listed below. Please contact the Box Office for tickets.
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}