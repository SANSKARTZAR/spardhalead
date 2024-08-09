import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/icons/spardhalogo.png"
import social1 from "@/app/assets/images/icons/social1.png"
import social2 from "@/app/assets/images/icons/social2.png"
import MumbaiBtf from "./MumbaiBtf";
export default function Footer() {
    return (
        <>
            <section className="enquiry">
                <h1 className="footer-enquiry section-title">Where Our Customers' Passion Meets Expertise</h1>
                <Link href="/" className="enquiry-btn">Enroll Now</Link>
            </section>

            <MumbaiBtf />

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
