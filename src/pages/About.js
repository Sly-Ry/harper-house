// import '../assets/styles/About'
import Banner from '../components/Banner';
import CardLink from '../components/CardLink';

export function About() {
    return (
        <>
            <div className="about page">
                {/* Banner */}
                <Banner title={"ABOUT US"}/>
                <CardLink title={"ABOUT US"}/>
            </div>
        </>
    ) 
}