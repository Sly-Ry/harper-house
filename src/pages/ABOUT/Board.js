import { NavLink } from 'react-router-dom';
import {team} from '../../data/teamItems'

export function Board() {
    return (
        <>
            <div className="board bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="col-12">
                    <div className="row d-flex flex-row align-items-center justify-content-center text-center">
                        <div className="col-lg-3">
                        <NavLink to='/about/the-team'>
                                <h2>The Team</h2>
                            </NavLink>
                        </div>
                        <div className="col-lg-3">
                            <NavLink to='/about/the-team/leadership'>
                                <h2>Leadership</h2>
                            </NavLink>
                        </div>
                        <div className="col-lg-3">
                            <NavLink to='/about/the-team/staff'>
                                <h2>Staff</h2>
                            </NavLink>
                        </div>
                        <div className="col-lg-3">
                            <h1 className="text-center fs-1">The Board</h1>
                        </div>
                    </div>
                    <div className="row my-5 px-3 d-flex justify-content-center">
                        <div className="row d-flex align-items-center justify-content-center">
                        {
                            team.map(item => {
                                return (
                                    item.board.map(item => {
                                        return (
                                            <>
                                                <div className="col-12 col-lg-5 col-xxl-4">
                                                    <div className="card m-4 p-0">
                                                        <img src={item.photo} alt="Our board member." />
                                                        <div className="card-body text-center ">
                                                            <h3>{item.name}</h3>
                                                            <hr/>
                                                            <h4>{item.job}</h4>
                                                        </div>
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