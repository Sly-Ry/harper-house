// import { jumbotronItems } from '../data/JumbotronItems'

// import photo1 from '../assets/images/photo1.jpg'
// import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'
// import photo4 from '../assets/images/photo4.jpg'
// import photo5 from '../assets/images/photo5.jpg'
import photo6 from '../assets/images/photo10.jpg'
// import photo8 from '../assets/images/photo8.jpg'
// import photo9 from '../assets/images/photo9.jpg'
// import photo10 from '../assets/images/photo10.jpg'
// import photo11 from '../assets/images/photo11.jpg'


export default function JumbotronLayout() {

    // var slides = document.querySelectorAll('.slide');
    // var btns = document.querySelectorAll('.slide_btn');

    // let currentSlide = 1;

    // var manualNav = function(manuel){
    //     slides.forEach((slide) => {
    //         slide.classList.remove('active');

    //         btns.forEach((btn) => {
    //             btn.classList.remove('active');
    //         });
    //     });

    //     slides[manuel].classList.add('active');
    //     btns[manuel].classList.add('active');
    // };

    // btns.forEach((btn, i) => {
    //     btn.addEventListener('click', () => {
    //         manualNav(i);
    //         currentSlide = i;
    //     });
    // });

    // var repeat = function(activeClass) {
    //     let active = document.getElementsByClassName('active');
    //     let i = 1;

    //     var repeater = () => {
    //         setTimeout(function(){
    //             [...active].forEach((activeSlide) => {
    //                 activeSlide.classList.remove('.active');
    //             });

    //             slides[i].classList.add(active);
    //             btns[i].classList.add(active);
    //             i++;

    //             if(slides.length == i){
    //                 i = 0;
    //             }
                
    //             if(i >= slides.length){
    //                 return;
    //             }

    //             repeater();
    //         }, 10000);
    //     }
    //     repeater();
    // } 

    // repeat();

    return ( 
        <>
        <div className="jumbo">
                {/* <div className='slide'>
                    <img src={photo1} alt="" />
                    <div className='info'>
                        <h2>Welcome to<span> HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div>
                <div className='slide'>
                    <img src={photo2} alt="" />
                    <div className='info'>
                        <h2>Welcome to <span>HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div> */}
                <div className='slide'>
                    <img src={photo3} alt="" />
                    <div className='info'>
                        <h2>Welcome to<span> HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div>
                {/* <div className='slide'>
                    <img src={photo4} alt="" />
                    <div className='info'>
                        <h2>Welcome to<span> HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div>
                <div className='slide'>
                    <img src={photo5} alt="" />
                    <div className='info'>
                        <h2>Welcome to<span> HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div>
                </div> */}
                <div className='slide'>
                    <img src={photo6} alt="" />
                    <div className='info'>
                        <h2>Welcome to<span> HARPER HOUSE</span></h2>
                        <p>There's no place like home</p>
                    </div>
                </div>
                {/* <div className="navigation">
                    <div className="slide_btn"></div>
                    <div className="slide_btn"></div>
                    <div className="slide_btn"></div>*/}
                
            </div>
        </>
    )
}