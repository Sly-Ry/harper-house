import { Route, Routes } from "react-router";
import Tickets from "../pages/TICKETS/Tickets";
import CustomBanner from '../components/CustomBanner';
import archiveBackground from '.././assets/images/about-us.jpg';
import StartToTop from "../utils/StartToTop";
import '../assets/styles/Tickets.css'

export default function TicketsRoutes() {
    return (
        <>
            <div className="tickets container-fluid page">
                <div className="row">
                    <div className="col-sm-1 col-md-2"></div>
                    <div className="col-sm-10 col-md-8 p-0">
                    <StartToTop />
                    <CustomBanner title={"Box Office"} background={archiveBackground} mxh={'98vh'}/>
                    <Routes>
                        <Route index element={<Tickets />} />
                    </Routes>
                    </div>
                    <div className="col-sm-1 col-md-2"></div>
                </div>
            </div>
        </>
    )
}