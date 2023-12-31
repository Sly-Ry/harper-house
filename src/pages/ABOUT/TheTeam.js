import { NavLink } from 'react-router-dom'
import photo from '../../assets/images/team_images/team.jpg'
export function TheTeam() {
    return (
        <>
            <div className="theatre bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="col-12">
                    <div className="row d-flex flex-row align-items-center justify-content-center text-center">
                        <div className="col-lg-3">
                            <h1 className="text-center fs-1">The Team</h1>
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
                            <NavLink to='/about/the-team/board'>
                                <h2>The Board</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="archive-routes row my-5 px-3 d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-8">
                            <div className="card">
                                <img src={photo} alt="The Harper House team hanging out." className=''/>
                            </div>
                            <p className='pt-2 fs-6'>*commissioned from Jessica Jones</p>
                            <hr />
                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quae beatae quos. Earum inventore praesentium temporibus veniam, ducimus.</h4>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2 py-2" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
            </div>
        </>
    ) 
}