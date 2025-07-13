import Academyvideo from "./AcademyVideo";
import BangaloreCours from "./BangaloreCours";
import CertificateGiven from "./CertificateGiven";
import CertifiedTest from "./CertifiedTestimonial";
import CourseCertifications from "./CourseCertifications";
import Courses from "./CoursesIn";
import Footer from "./Footer";
import HerroBanner from "./HerroBanner";
import OnlineCertification from "./OnlineCertificaion";
import PraticeTool from "./PraticeTool";
import TrustedBy from "./TrustedBy";

export default function HomePage() {
  return (
    <>
      <HerroBanner/>
      <TrustedBy/>
      <Courses/>
      <BangaloreCours/>
      <Academyvideo/>
      <CourseCertifications/>
      <PraticeTool/>
      <OnlineCertification/>
      <CertifiedTest/>
      <CertificateGiven/>
      <Footer/>
    </>
  );
}
