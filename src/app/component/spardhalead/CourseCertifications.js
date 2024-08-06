import Image from "next/image";
import certification from "@/app/assets/images/best-online-guitar-lessons.png";




export default function CourseCertifications() {
    return (
        <>
            <section className="certif-coursers">
                <div className="container">
                                       <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="">
                                <h1 className="lessons-head">Best Online Guitar Lessons</h1>
                                <p className="">The MUSIC MASTER Advantage</p>

                                <Image src={certification.src} width="400" height="400" alt="many-cources" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                        <div className="certificatecards-div">
                            <div className="certificatecards">
                                <Image src={certification.src} width="90" height="90" alt="certificate-img" />
                                <span>
                                    <h1 className="certif-title">Goal Based Guitar Lessons</h1>
                                    <p className="certif-para">You will learn from a qualified Guitar teacher, who has already done it all. Grade exams, stage shows and performances. Set your goals, then the Guitar teacher will help you with right lesson plan, exercises and track progress to get faster results.</p>
                                </span>
                            </div>
                            <br/>
                            <div className="certificatecards">
                                <Image src={certification.src} width="90" height="90" alt="certificate-img" />
                                <span>
                                     <h1 className="certif-title">Play Your Favourite Songs</h1>
                                     <p className="certif-para">The whole point is to play your favourite songs in Guitar. Discuss your favourite songs with your Guitar teacher & your tutor will help you learn quickly. All you have to do is to focus on practise.</p>
                                </span>
                            </div>
                            <br/>
                            <div className="certificatecards">
                                <Image src={certification.src} width="90" height="90" alt="certificate-img" />
                                <span>
                                     <h1 className="certif-title">Friendly Online Guitar Teacher</h1>
                                     <p className="certif-para">Your Guitar teacher will keep you motivated and you can reach them to get your doubts cleared. You can send recorded videos and ask for feedback. The teacher will help you to achieve your goal and will support in your Guitar journey.</p>
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
