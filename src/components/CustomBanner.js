export default function CustomBanner({ title, background, mxh }) {

    return ( 
        <>
            <div>
                <div className="carousel-inner banner-line">
                    <div className="banner-box c-banner-box" data-bs-interval="8000"
                        style={{maxHeight: mxh}}
                    >
                        <img src={background} className="d-block w-100" alt=""/>
                        <div className="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}