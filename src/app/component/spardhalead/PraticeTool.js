import Image from "next/image";


import guitartuner from "@/app/assets/images/guitar-tuner.png";
import metronome from "@/app/assets/images/metronome.png";
import ukulele from "@/app/assets/images/ukulele.png";

export default function PraticeTool() {
    return (
        <>
            <section className="praticetool">
                <div className="container">
                    <h2 className="section-title">Online Practise Tools For Learning Guitar Online</h2>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="praticetool-cardtuner">
                                <Image src={guitartuner.src} width="400" height="300" alt="many-cources" />
                                <h2 className="praticetool-card">Guitar Tuner</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="praticetool-cardtuner">
                                <Image src={metronome.src} width="400" height="300" alt="many-cources" />
                                <h2 className="praticetool-card">Metronome</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="praticetool-cardtuner">
                                <Image src={ukulele.src} width="400" height="300" alt="many-cources" />
                                <h2 className="praticetool-card">Ukulele Tuner</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
