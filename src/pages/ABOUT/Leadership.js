import { NavLink } from "react-router-dom";
import {team} from '../../data/teamItems'

export function Leadership() {
    return (
        <>
             <div className="leadership bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="col-12">
                    <div className="row d-flex flex-row align-items-center justify-content-center text-center">
                        <div className="col-3">
                            <NavLink to='/about/the-team'>
                                <h2>The Team</h2>
                            </NavLink>
                        </div>
                        <div className="col-3">
                            <h1 className="text-center fs-1">Leadership</h1>
                        </div>
                        <div className="col-3">
                            <NavLink to='/about/the-team/staff'>
                                <h2>Staff</h2>
                            </NavLink>
                        </div>
                        <div className="col-3">
                            <NavLink to='/about/the-team/board'>
                                <h2>The Board</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row my-5 px-3 d-flex justify-content-center">
                        <div className="row">
                        {
                            team.map(item => {
                                return (
                                    item.leadership.map(item => {
                                        return (
                                            <>
                                                    <div className="card m-5 p-0 w-25">
                                                        <img src={item.photo} alt="A staff member." />
                                                        <div className="card-body text-center ">
                                                            <h3>{item.name}</h3>
                                                            <hr/>
                                                            <h4>{item.job}</h4>
                                                        </div>
                                                    </div>
                                            </>
                                        )
                                    })
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2 py-2" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
            </div>
        </>
    )
}