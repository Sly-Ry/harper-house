import { NavLink } from "react-router-dom";
import { keys } from "../../data/ResidencyKeys";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Membership() {
    return (
        <>
            <h1 className="text-center">BECOME A MEMBER</h1>
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
                                            <h1 className='key-name text-dark'>
                                                <i className="bi bi-gem px-3"></i>
                                                THE {key.name.toUpperCase()} KEY
                                            </h1> 
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
                                                <h4>This is priced at ${key.amount}. You pay ${key.price} per month.</h4>
                                                <NavLink to={'/tickets/' + key.name}>
                                                    <button className="btn btn-danger my-3">
                                                        <h4>Purchase {key.name} Key</h4>
                                                    </button>
                                                </NavLink>
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