import { faq } from '../../data/faqItems'
export function FAQ() {
    return (
        <>
            <div className="faq bg-white">
                <div className="col-12 my-5 py-5"  style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <h1 className="text-center fs-1 m-0">FAQ</h1>
                <div className="row row-cols-2 d-flex justify-content-center">
                    <div className="col-10 col-lg-4 mx-5 pb-5">
                    {
                        faq.map(items => {
                            if(items.id <= 3) {
                                return (
                                    <>
                                        <h3 className='pt-5'>{items.type}</h3>
                                        <div className="accordion accordion-flush" id={"accordionFlushBoxLeft-" + items.type}>
                                            {
                                                items.questions.map(item => {
                                                    return (
                                                        <>
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id={"flush-heading-" + item.type}>
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-" + item.type} aria-expanded="false" aria-controls={"flush-collapse-" + item.type}>
                                                                        {item.question}
                                                                    </button>
                                                                </h2>
                                                                <div id={"flush-collapse-" + item.type} className="accordion-collapse collapse" aria-labelledby={"flush-heading-" + item.type} data-bs-parent="#accordionFlushBox">
                                                                    <div className="accordion-body">{item.answer}</div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                            else return null;
                        })
                    }    
                    </div>
                    <div className="col-10 col-lg-4  mx-5 pb-5">
                    {
                        faq.map(items => {
                            if(items.id > 3) {
                            return (
                                <>
                                        <h3 className='pt-5'>{items.type}</h3>
                                        <div className="accordion accordion-flush" id={"accordionFlushBoxRight-" + items.type}>
                                            {
                                                items.questions.map(item => {
                                                    return (
                                                        <>
                                                            <div className="accordion-item">
                                                                <h2 className="accordion-header" id={"flush-heading-" + item.type}>
                                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse-" + item.type} aria-expanded="false" aria-controls={"flush-collapse-" + item.type}>
                                                                        {item.question}
                                                                    </button>
                                                                </h2>
                                                                <div id={"flush-collapse-" + item.type} className="accordion-collapse collapse" aria-labelledby={"flush-heading-" + item.type} data-bs-parent="#accordionFlushBox">
                                                                    <div className="accordion-body">{item.answer}</div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                )
                            }
                            else return null;
                        })
                    }    
                    </div>
                </div>
                <div className="col-12 my-2 py-2" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>    
            </div>
        </>
    ) 
}