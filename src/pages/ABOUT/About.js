import CardLink from '../../components/CardLink';
import archiveBackground from '../../assets/images/about-us.jpg';
import CustomBanner from "../../components/CustomBanner";

export function About() {
    return (
        <>
            <div className="about bg-white">
                
                <CustomBanner title={"About Us"} background={archiveBackground} mxh={'98vh'}/>
                <CardLink title={"ABOUT US"}/>
            </div>
        </>
    ) 
}