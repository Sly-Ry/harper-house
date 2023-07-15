import { NavLink } from "react-router-dom";

export default function ShowCard({ img, fontColor, fontFamily, title, date, synopsis, path }) {
    return (
        <>
            <div className="
                col-sm-10 
                col-md-8 
                col-lg-7 
                col-xl-5 
                px-5 
                mb-5"
            >
                <div className="card rounded-0">
                    <img src={img} className="card-img-top rounded-0" alt="..."/>
                    <div className="card-img-overlay">
                        <h1 
                            className="card-title" 
                            style={{
                                color: fontColor, 
                                fontFamily: fontFamily
                            }}
                        >
                            {title}
                        </h1>
                    </div>
                    <div className="card-body">
                        <div className="date py-2">
                            <h5>{date}</h5>
                        </div>
                        <p className="card-text">{synopsis}</p>
                        
                        <ul className="list-group list-group-flush pb-2 d-flex flex-row align-items-center justify-content-evenly">
                            <li className="list-group-item">
                                <NavLink href={'/show-info/' + path}>
                                    inQuiry
                                </NavLink>
                            </li>
                            <li className="list-group-item two">
                                <NavLink href={'/tickets/' + path}>
                                    Tickets
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
