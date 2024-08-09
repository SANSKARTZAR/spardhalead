import Image from "next/image";

import manycourses from "@/app/assets/images/banner-guitar-01.png";
import manycourses1 from "@/app/assets/images/banner-guitar-01.png";
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
                <h1 className="courses-title">With so many Guitar courses in Bangalore, how do you know which one is right for you?</h1>
                <p className="courses-para">Certified Human Resource Management Professional, Spardha, is an ISO 9001-2008 validated, industry accredited online Guitar certification training in Bangalore that stands out from other Guitar training institutes in Bangalore as it provides the best Guitar training in Bangalore. Spardha offers tailor-made Guitar classes in Bangalore for those looking to start their career in Guitar or for Guitar professionals looking to fast track their career in the Guitar domain.</p>
                <p className="courses-para">Students can choose from any of the following four certification courses based on the suitability and eligibility criteria:</p>
              </div>
            </div>

            {/* --------------------------------------- */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="courses-head">
                <h1 className="courses-title">Where do you go from here?</h1>
                <p className="courses-para">This online Guitar certification course in Bangalore will equip you with the skills that are necessary to be an effective Guitar professional. With our online Guitar course in Bangalore, you will learn about all aspects of Guitar including recruitment, selection, training and development, compensation and benefits, policy administration, Guitar Analytics and much more. </p>
                <p className="courses-para">spardhaschoolofmusic online Guitar class will provide you with the right degree of theoretical knowledge with practical implications and training in Bangalore for your career in Human Resources. You can register for this course anytime at any place. It will be a challenging but an enriching experience for you!</p>
                <p className="courses-para">Many of the alumni of our online Guitar course(Human Resource Management course) are heading various domains of Guitar. Be it Learning and Development, Guitar Analytics or are Guitar Business Partners in large multinational companies. And are now also are passing their experience to enthusiastic students with a flair for Guitar. Spardha facilitators provide Guitar training in Chennai as well.</p>
                <p className="courses-para">To start or speed up your career in Guitar today, sign up at https://www.spardhaschoolofmusic.com/ Get certified, get secure.</p>
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
