import Academyvideo from "./AcademyVideo";
import BangaloreCours from "./BangaloreCours";
import CourseCertifications from "./CourseCertifications";
import Courses from "./CoursesIn";
import Footer from "./Footer";
import HerroBanner from "./HerroBanner";
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
      <Footer/>
    </>
  );
}
