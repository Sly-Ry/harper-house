import { keys } from "../../data/ResidencyKeys"

export function Membership() {
    return (
        <>
            <h1>BECOME A HARPER Member</h1>
            <p>When you become a member of the House, you become a part of our family. 27% of every membership goes towards our Free Fox Initiative, a fund established with the intent and goal of increasing the pay artists who create at <span>HARPER HOUSE</span></p>
            <p>Harper House offers four keys (or levels) of Membership:</p>
            {
                keys.map(key => {
                    return (
                        <>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div key={key.id} className="accordion-item">
                                    <h2 className="accordion-header py-3" id={"flush-heading"+ key.id}>
                                        <button 
                                            className="accordion-button collapsed" 
                                            type="button" 
                                            data-bs-toggle="collapse" 
                                            data-bs-target={"#flush-collapse"+ key.id} 
                                            aria-expanded="false" 
                                            aria-controls={"flush-collapse"+ key.id}
                                        >
                                            <h1 className='key-name text-dark'>THE {key.name.toUpperCase()} KEY</h1> 
                                        </button>
                                    </h2>
                                    <div 
                                        id={"flush-collapse"+ key.id} 
                                        className="accordion-collapse collapse" 
                                        aria-labelledby={"flush-heading"+ key.id} 
                                        data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <ul>
                                                {
                                                    key.benifits.map(item => {
                                                        return (
                                                            <li>
                                                                <p className="py-3">
                                                                    {item.description}
                                                                </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                                <h4>Your pay ${key.price} per month.</h4>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>         
                        </>
                    )
                })
            }
            
        </>
    )
}