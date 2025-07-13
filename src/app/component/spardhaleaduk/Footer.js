import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/icons/spardhalogo.png"
import social1 from "@/app/assets/images/icons/social1.png"
import social2 from "@/app/assets/images/icons/social2.png"
import MumbaiBtf from "./UKBtf";
import UKBtf from "./UKBtf2";
export default function Footer() {
    return (
        <>
            <section className="enquiry">
                <h1 className="footer-enquiry section-title">Global Music Lessons with Local Resonance: For New York Learners</h1>
                <p style={{ textAlign: "center" }}>
                    Spardha School of Music runs an extensive array of digital music and dance classes that are adaptable to students of varying ages and training abilities. Expert instructors at Spardha School of Music deliver scheduled curricula that match your specific requirements, whether you start as a beginner or already consider yourself an advanced musician. 
                </p>
                {/* <Link href="/" className="enquiry-btn">Enroll Now</Link> */}
            </section>

            <MumbaiBtf />
            <UKBtf/>

            <section className="footer">
                <div className="container">
                    <div className="social-icons">
                        <Image src={logo.src} width="60" height="60" alt="logo" />
                        <Image src={social1.src} width="100" height="35" alt="logo" />
                        <Image src={social2.src} width="100" height="35" alt="logo" />
                    </div>
                    <hr />
                </div>
            </section>
        </>
    );
}
