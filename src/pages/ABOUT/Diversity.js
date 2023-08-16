import { NavLink } from "react-router-dom";

export function Diversity() {
    return (
        <>
            <div className="archive-routes diversity bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="row d-flex flex-row align-items-center justify-content-center text-center">
                        <div className="col-4">
                        <NavLink to='/about/the-theatre'>
                            <h2>The Theatre</h2>
                        </NavLink>
                        </div>
                        <div className="col-4">
                            <h1 className="text-center fs-1">EQUALITY DRIVEN</h1>
                        </div>
                        <div className="col-4">
                            <NavLink to='/about/the-theatre/history'>
                                <h2>History</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 my-3 px-5">
                        <h3 style={{fontWeight: 'bold', textDecoration: 'underline'}}>DIVERSITY</h3>
                        <p style={{lineHeight: '35px'}}>&emsp;&emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id rerum, distinctio tempora voluptas totam temporibus eius aliquid, incidunt vitae reprehenderit impedit possimus odit doloremque. Temporibus odit assumenda rerum ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-12 col-lg-5  my-3 px-5">
                        <h3 style={{fontWeight: 'bold', textDecoration: 'underline'}}>INCLUSION</h3>
                        <p style={{lineHeight: '35px'}}>&emsp;&emsp;&emsp;&emsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, id rerum, distinctio tempora voluptas totam temporibus eius aliquid, incidunt vitae reprehenderit impedit possimus odit doloremque. Temporibus odit assumenda rerum ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    
                </div>
                <div className="col-12 my-2 py-2" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
            </div>
        </>
    ) 
}