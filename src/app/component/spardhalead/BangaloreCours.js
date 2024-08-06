import Image from "next/image";


export default function BangaloreCours() {
    return (
        <>
            <section className="Bangalorecourses">
                <div className="container">
                    <h1 className="section-title">Select Your Package</h1>
                    <p className="para">Globally recognized Online Guitar Training Institute is now available in Mumbai. A comprehensive learning model applied to learn, grow and excel in Guitar. Gain the skills to be a successful Guitar professional.&nbsp;</p>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cars-section">
                                <div className="package-cards">
                                    <div className="package-cards-month">
                                        <p className="monthscard">3 Months</p>
                                    </div>
                                    <ul className="mt-4 list-disc pl-8 text-sm leading-6 text-secondary">
                                        <li>Session duration: <span>30 Minutes each</span></li>
                                        <li>No. of sessions: <span>24</span></li>
                                        <li>Format: <span>1:1 with Teacher</span></li>
                                    </ul>
                                    <div className="cards-price">
                                        <div>
                                            <div className="packegeprice-inr">INR&nbsp;400/session</div>
                                            <span className="packegeprice">INR 9,600/-</span>
                                        </div>
                                        <div>
                                            <a href="/trial" target="_blank" title="" className="book-nowbtn">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="list-div">
                                <ul className="cources-list">
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Help understand guitar anatomy and concepts </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Play 10+ melodies on guitar</li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Demonstrate proper finger technique and ergonomics </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Distinguish and play different rhythmic patterns </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Execute strumming and chords </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="list-div">
                                <ul className="cources-list">
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Help understand guitar anatomy and concepts </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Play 10+ melodies on guitar</li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Demonstrate proper finger technique and ergonomics </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Distinguish and play different rhythmic patterns </li>
                                    <li><i class="fa fa-check-circle-o" aria-hidden="true"></i> Execute strumming and chords </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="cars-section">
                                <div className="package-cards">
                                    <div className="package-cards-month">
                                        <p className="monthscard">3 Months</p> <p className="offdiv">Most Popular</p>
                                    </div>
                                    <ul className="mt-4 list-disc pl-8 text-sm leading-6 text-secondary">
                                        <li>Session duration: <span>30 Minutes each</span></li>
                                        <li>No. of sessions: <span>48</span></li>
                                        <li>Format: <span>1:1 with Teacher</span></li>
                                    </ul>
                                    <div className="cards-price">
                                        <div>
                                            <div className="packegeprice-inr">INR 380/session</div>
                                            <span className="packegeprice">INR 18,240/-</span>
                                        </div>
                                        <div>
                                            <a href="/trial" target="_blank" title="" className="book-nowbtn">Book Now</a>
                                        </div>
                                    </div>
                                    <div className="div-price">
                                        <strike className="pricediv">INR&nbsp;19200</strike>
                                        <p className="offdiv">5% OFF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
