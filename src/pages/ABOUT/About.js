// import '../assets/styles/About'
import Banner from '../../components/Banner';
import CardLink from '../../components/CardLink';

export function About() {
    return (
        <>
            <div className="about page">
                {/* Banner */}
                <Banner title={"About Us"}/>
                <CardLink title={"ABOUT US"}/>
            </div>
        </>
    ) 
}