export default function SoonCard({ img, fontColor, fontFamily, fontSize, title, date, type }) {
    return (
        <>
            <div className="
                col-sm-10 
                col-md-8 
                col-lg-6 
                col-xl-4 
                px-5 
                mb-5"
            >
                <div className="card rounded-0">
                    <img src={img} className="card-img-top rounded-0 d-flex align-items-center justify-content-center" alt="..." style={{}}/>
                    <div className="card-img-overlay">
                        <h1 
                            className="card-title" 
                            style={{
                                color: fontColor, 
                                fontFamily: fontFamily,
                                fontSize: fontSize
                            }}
                        >
                            {title}
                        </h1>
                    </div>
                    <div className="card-body">
                        <div className="date py-2">
                            <h5>{date}</h5>
                        </div>
                        <p className="card-text">{type}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
