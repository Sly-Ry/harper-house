import { NavLink } from 'react-router-dom'
import { navItems } from "../data/NavItems";

export default function CardLink({ title }) {
    return (
        <>
            <div className="container-fluid py-5 text-center">
                <div className="
                    row 
                    row-col-2 
                    d-flex 
                    align-items-center 
                    justify-content-center
                    gy-5"
                >
                    {navItems.map(menu => {
                        if (menu.title === title){
                            return (
                                <>
                                    {menu.submenu.map(item => {
                                        return (
                                            <div className="col-12 col-md-12 col-lg-4 m-5">
                                                <div className="card rounded-0">
                                                    <img src={item.photo} className="card-img-top p-3 pb-0" alt="" />
                                                    <div class="card-body px-5 pt-3 pb-4">
                                                        <h1 className="card-title">{item.title}</h1>
                                                        <p class="card-text">{item.text}</p>
                                                        <div className='bar'></div>
                                                        <NavLink to="/current-season">
                                                            <p>Query?</p>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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