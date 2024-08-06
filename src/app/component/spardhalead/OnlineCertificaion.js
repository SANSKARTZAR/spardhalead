import Image from "next/image";


import icon1 from "@/app/assets/images/icons/rsl_cert.png";
import icon2 from "@/app/assets/images/icons/abgmm_cert.png";
import icon3 from "@/app/assets/images/icons/abrsm_cert.png";
import icon4 from "@/app/assets/images/icons/istd_cert.png";
import icon5 from "@/app/assets/images/icons/spardha_cert.png";
import icon6 from "@/app/assets/images/icons/trinity_cert.png";



export default function OnlineCertification() {
    return (
        <>
            <section className="OnlineCertification">
                <div className="container">
                    <div className="">
                        <h1 className="section-title">Get online certificaion</h1>
                        <p className="para">Here’s a look at how our self-paced learning system works.You’ll see what your learning experience will be like upon enrollment.</p>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon1.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">Rock School London</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon2.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">ABGMM Certification</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon3.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">ABRSM London</h2>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon4.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">ISTD London</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon5.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">Spardha Certification</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="praticetool-cardtuner">
                                <Image src={icon6.src} width="100" height="100" alt="many-cources" />
                                <h2 className="certificateclass">Trinity Music London</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
