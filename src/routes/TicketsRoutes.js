import { Route, Routes } from "react-router";
import Tickets from "../pages/TICKETS/Tickets";
import CustomBanner from '../components/CustomBanner';
import archiveBackground from '.././assets/images/about-us.jpg';

import '../assets/styles/Tickets.css'

export default function TicketsRoutes() {
    return (
        <>
            <div className="tickets container-fluid page">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 p-0">
                    <CustomBanner title={"Box Office"} background={archiveBackground} mxh={'98vh'}/>
                    <Routes>
                        <Route index element={<Tickets />} />
                    </Routes>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </>
    )
}