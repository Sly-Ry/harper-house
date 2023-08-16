import { NavLink } from 'react-router-dom'
import { navItems } from "../data/NavItems";

export default function CardLink({ subtitle, title }) {
    return (
        <>
            <div className="container-fluid py-5 text-center">
                <div className="
                    row 
                    d-flex 
                    justify-content-center
                    gy-5"
                >
                    {navItems.map(menu => {
                        if (title === menu.title){
                            return (
                                <>
                                    {menu.submenu.map(item => {
                                        return (
                                            <div key={item.id} className="
                                                col-12 
                                                col-md-8 
                                                col-xl-5 
                                                col-xxl-4 
                                                mx-4 
                                                px-5 
                                                py-2 
                                                rounded-0"
                                            >

                                                <div className="card">
                                                    <img src={item.photo} className="card-img-top p-0" alt="" />
                                                    <div className="card-body px-5 pt-3 pb-4">
                                                        <h1 className="card-title fs-1">{item.title}</h1>
                                                        <p className="card-text" style={{fontStyle: 'italic'}}>{item.text}</p>
                                                        <div className='bar'></div>
                                                        <NavLink to={item.path} className="stretched-link">
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                            )
                        }
                        else if (subtitle === menu.title){
                            return (
                                <>
                                    {menu.submenu.map(menu => {
                                        if (title === menu.title){
                                            return (
                                                <>
                                                    {menu.submenu.map(item => {
                                                        return (
                                                            // <div key={item.id} className="col-12 col-md-12 col-lg-4 m-5">
                                                            //     <div className="card rounded-0">
                                                            //         <img src={item.photo} className="card-img-top p-3 pb-0" alt="" />
                                                            //         <div className="card-body px-5 pt-3 pb-4">
                                                            //             <h1 className="card-title">{item.title}</h1>
                                                            //             <p className="card-text">{item.text}</p>
                                                            //             <div className='bar'></div>
                                                            //             <NavLink to={item.path}>
                                                            //                 <p>inQuery?</p>
                                                            //             </NavLink>
                                                            //         </div>
                                                            //     </div>
                                                            // </div>
                                                            <div class="card bg-dark col-12 col-md-12 col-lg-7 m-5 ">
                                                                
                                                                <NavLink to={item.path}><img src={item.photo} class="card-img" alt="..."/>
                                                                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                                                        <h2 class="card-title" style={{fontSize: 100}}>{item.title}</h2>
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        )
                                                    })}
                                                </>
                                            )    
                                        }
                                        else { return null };
                                    })}
                                </>
                            )

                        }
                        else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </>
    )
}