import Image from "next/image";

import manycourses from "@/app/assets/images/banner-guitar-01.png";
import manycourses1 from "@/app/assets/images/banner-guitar-02.png";
export default function Courses() {
  return (
    <>
      <section className="courses">
        <div className="container">
          <h1 className="section-title">Why Choose Spardha School of Music in UK?</h1>
          <br />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses_img">
                <Image src={manycourses.src} width="500" height="350" alt="many-cources" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses-head">
                <h2 className="courses-title2">Personalized 1:1 Lessons with Expert Instructors</h2>
                <p className="courses-para">The teaching approach focuses on individual student needs throughout virtual training sessions. The educational staff follows individual student requirements to develop lesson plans that meet the current skills and personal music preferences of learners at any level of experience. Students can achieve personal progress through the immediate feedback that comes with instructor guidance.</p>
              </div>
              <div className="courses-head">
                <h2 className="courses-title2">Flexible Scheduling for UK Time Zones</h2>
                <p className="courses-para">Our platform recognizes the demanding nature of UK-based student, professional, and family life. Students can schedule and take lessons according to their preferred timings since our platform functions within UK time frameworks.</p>
              </div>
            </div>

            {/* --------------------------------------- */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses-head">
                <h2 className="courses-title2">Learn a Variety of Instruments, Vocal Styles & Dance Lessons</h2>
                <br />
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Piano</strong> – Master classical and contemporary styles.</li>
                  <li><strong>Guitar</strong> – Learn acoustic, electric, and bass guitar.</li>
                  <li><strong>Violin</strong> – Develop technique, expression, and musicality.</li>
                  <li><strong>Drums</strong> – Get hands-on experience with beats and rhythms.</li>
                  <li><strong>Vocals</strong> – Train in Western, Bollywood, Classical, and more.</li>
                  <li><strong>Keyboard, Flute, and Ukulele</strong> – Discover different musical instruments according to your taste.</li>
                  <li><strong>Kathak</strong> – Learn graceful spins and expressive storytelling.</li>
                  <li><strong>Bharatnatyam</strong> – Master rhythm, expression, and classical poses.</li>
                  <li><strong>Bollywood Dance</strong> – Learn powerful Bollywood-style moves.</li>
                </ul>
              </div>
              <br />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses_img">
                <br /><br />
                <Image src={manycourses1.src} width="500" height="400" alt="many-cources" />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses_img">
                <br /><br />
                <Image src={manycourses.src} width="500" height="350" alt="many-cources" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
             <br /><br />
              <div className="courses-head">
                <h2 className="courses-title2">Internationally Recognized Certifications</h2>
                <p className="courses-para">Our carefully structured curricula guide the learner toward the internationally recognized certifications of ABRSM, Trinity College London, and Rockschool. These qualifications further deepen one's musical legitimacy, whether that be academically or for personal satisfaction.</p>
              </div>
              <br />
              <div className="courses-head">
                <h2 className="courses-title2">Cultural Relevance and Genre Diversity</h2>
                <p className="courses-para">There is specialization among the expert instructors in various musical styles. The students are thus allowed to explore genres of Western Classical, Jazz, Pop, Bollywood, and Folk. </p>
                <p className="courses-para">We ensure that the educational experience provided to students in the UK by us is relevant and balanced according to their interests in music.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
