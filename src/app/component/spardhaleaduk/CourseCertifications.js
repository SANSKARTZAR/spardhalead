import Image from "next/image";
import certification from "@/app/assets/images/best-online-guitar-lessons.png";
import support from "@/app/assets/images/icons/support.png";
import guitar from "@/app/assets/images/icons/guitar.png";
import doc from "@/app/assets/images/icons/documents.png";



export default function CourseCertifications() {
    return (
        <>
            <section className="certif-coursers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="">
                                <h1 className="lessons-head">How Do Our Online Music Classes Work in the UK?</h1>
                                {/* <p className="">The MUSIC MASTER Advantage</p> */}

                                <Image src={certification.src} width="400" height="400" alt="many-cources" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="certificatecards-div">
                                <div className="certificatecards">
                                    <Image src={doc.src} width="90" height="90" alt="certificate-img" />
                                    <span>
                                        <h1 className="certif-title">Step 1: Choose Your Instrument & Course</h1>
                                        <p className="certif-para">You will find various programs on our list, including piano lessons, guitar lessons, and much more, that allow you to select the correct training path for your instrument or vocals. The institution provides specific programs for Western, Classical, Carnatic music classes in UK, Hindustani music online in UK, and many others on the list.</p>
                                    </span>
                                </div>
                                <br />
                                <div className="certificatecards">
                                    <Image src={guitar.src} width="90" height="90" alt="certificate-img" />
                                    <span>
                                        <h1 className="certif-title">Step 2: Get a Free Trial Session</h1>
                                        <p className="certif-para">You can try our teaching system through our no-cost trial instructional session. Here, you will have the opportunity to meet an instructor and experience firsthand our lesson structure and live interactive instruction methods. A customized musical journey map and instrument/vocal technique basics constitute your initial introduction to our service.</p>
                                    </span>
                                </div>
                                <br />
                                <div className="certificatecards">
                                    <Image src={support.src} width="90" height="90" alt="certificate-img" />
                                    <span>
                                        <h1 className="certif-title">Step 3: Personalized Learning Plan</h1>
                                        <p className="certif-para">Your trial leads to a personalized learning plan that adapts to your abilities, targets, and open scheduling times. Your teachers will analyze your current skills and create an education plan that enables smooth progression.</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="certificatecards-div">
                                <div className="certificatecards">
                                    <span>
                                        <h1 className="certif-title">Step 4: Live Interactive Sessions</h1>
                                        <p className="certif-para">Our institution delivers 1:1 lessons through high-definition video connections, allowing students to talk to their instructors during class hours. Students observe instructional demonstrations while receiving correct practice guidance through experiential learning, making every lesson dynamic and participatory.</p>
                                    </span>
                                    <Image src={doc.src} width="90" height="90" alt="certificate-img" />
                                </div>
                                <br />
                                <div className="certificatecards">
                                    <span>
                                        <h1 className="certif-title">Step 5: Assignments and Practice Sessions</h1>
                                        <p className="certif-para">Regular assignments and organized practice routines strengthen classroom learning. Music students receive their lesson materials as sheet music with exercises and practice directions from their instructors to use during the intervals between lessons.</p>
                                    </span>
                                    <Image src={guitar.src} width="90" height="90" alt="certificate-img" />
                                </div>
                                <br />
                                <div className="certificatecards">
                                    <span>
                                        <h1 className="certif-title">Step 6: Performance Opportunities & Certifications</h1>
                                        <p className="certif-para">Virtual show performances and contests allow students to demonstrate their mastered skills effectively. Our program also offers international music assessment programs to help students pursue excellent credentials when seeking official musical recognition.</p>
                                    </span>
                                    <Image src={support.src} width="90" height="90" alt="certificate-img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="">
                                {/* <h1 className="lessons-head">How Do Our Online Music Classes Work in the UK?</h1> */}
                                {/* <p className="">The MUSIC MASTER Advantage</p> */}

                                <Image src={certification.src} width="400" height="400" alt="many-cources" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
