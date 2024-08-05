import Image from "next/image";

import manycourses from "@/app/assets/images/bangalore-many-course.png";
import manycourses1 from "@/app/assets/images/bagalore-where-from-here.png";
export default function Courses() {
  return (
    <>
      <section className="courses">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses_img">
                <Image src={manycourses.src} width="500" height="350" alt="many-cources" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses-head">
                <h1 className="courses-title">With so many Piano courses in Bangalore, how do you know which one is right for you?</h1>
                <p className="courses-para">Certified Human Resource Management Professional, Spardha, is an ISO 9001-2008 validated, industry accredited online Piano certification training in Bangalore that stands out from other Piano training institutes in Bangalore as it provides the best Piano training in Bangalore. Spardha offers tailor-made Piano classes in Bangalore for those looking to start their career in Piano or for Piano professionals looking to fast track their career in the Piano domain.</p>
                <p className="courses-para">Students can choose from any of the following four certification courses based on the suitability and eligibility criteria:</p>
              </div>
            </div>

            {/* --------------------------------------- */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses-head">
                <h1 className="courses-title">Where do you go from here?</h1>
                <p className="courses-para">This online Piano certification course in Bangalore will equip you with the skills that are necessary to be an effective Piano professional. With our online Piano course in Bangalore, you will learn about all aspects of Piano including recruitment, selection, training and development, compensation and benefits, policy administration, Piano Analytics and much more. </p>
                <p className="courses-para">spardhaschoolofmusic online Piano class will provide you with the right degree of theoretical knowledge with practical implications and training in Bangalore for your career in Human Resources. You can register for this course anytime at any place. It will be a challenging but an enriching experience for you!</p>
                <p className="courses-para">Many of the alumni of our online Piano course(Human Resource Management course) are heading various domains of Piano. Be it Learning and Development, Piano Analytics or are Piano Business Partners in large multinational companies. And are now also are passing their experience to enthusiastic students with a flair for Piano. Spardha facilitators provide Piano training in Chennai as well.</p>
                <p className="courses-para">To start or speed up your career in Piano today, sign up at https://www.spardhaschoolofmusic.com/ Get certified, get secure.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses_img">
                <Image src={manycourses1.src} width="500" height="400" alt="many-cources" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
