import { NavLink } from "react-router-dom";

export default function ShowCard({ img, fontColor, fontFamily, title, date, synopsis, path }) {
    return (
        <>
            <div className="
                col-12 
                col-md-8 
                col-lg-7 
                col-xl-5 
                px-5 
                mb-5
                text-center"
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
                        <NavLink to='/tickets' className="stretched-link"/>
                    </div>
                </div>
            </div>
        </>
    )
}
