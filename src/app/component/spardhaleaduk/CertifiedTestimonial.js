'use client';
import React from "react";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "@/app/assets/images/client/1.png";

const testimonials = [
    {
        name: "Emma, 14 (London)",
        heading: "- Piano Enthusiast",
        text: "“Spardha's online piano classes helped me prepare for my ABRSM Grade 5 exam. Learning was fun, thanks to a tailored approach and patient guidance. Highly recommended!”",
        image: client1,
    },
    {
        name: "Liam, 25 (Manchester)",
        heading: "– Guitar Student",
        text: "“At the beginning, I was looking for a course that was both structured and flexible. The guitar tutor made it so exciting, and now I am confidently playing my best songs.”",
        image: client1,
    },
    {
        name: "Priya, 30 (Birmingham)",
        heading: "– Bollywood Vocals",
        text: "“I wanted to learn Bollywood singing, but finding the right trainer in the UK was tough. Spardha connected me with an amazing teacher, and my vocal skills have improved tremendously!”",
        image: client1,
    }
];

const CertifiedTest = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <section className="certif-test">
                <div className="container">
                    <div className="">
                        <h1 className="section-title">See What Our Students Want to Say About Us <br/>- Success Stories from UK Students</h1>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
                                    <div className="testimonial-div">
                                        <h4 className="testimonial-tilte">{testimonial.heading}</h4>
                                        <p style={{ fontStyle: 'italic', fontSize: '1.2em' }}>"{testimonial.text}"</p>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'cover', marginBottom: '20px', marginLeft: '48%' }}
                                        />
                                        <h5 style={{ marginTop: '10px' }}>{testimonial.name}</h5>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CertifiedTest;

