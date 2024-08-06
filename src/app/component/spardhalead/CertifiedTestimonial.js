'use client';
import React from "react";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "@/app/assets/images/client/1.png";

const testimonials = [
    {
        name: "Ashka Jadhav",
        heading: "Best Online Guitar Course",
        text: "“I love how my teachers adapt the curriculum to my preferences so I excel at what I am good at and stay motivated while also working on improvement.”",
        image: client1,
    },
    {
        name: "Jane Smith",
        heading: "Best Online Guitar Course",
        text: "I'm very satisfied with the quality and speed.",
        image: client1,
    },
    {
        name: "Bob Johnson",
        heading: "Best Online Guitar Course",
        text: "Excellent support and great results. Five stars!",
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
                        <h1 className="section-title">Alumni Testimonials</h1>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
                                <div className="testimonial-div">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        style={{ borderRadius: '50%', width: '100px', height: '100px', objectFit: 'cover', marginBottom: '20px', textAlign: 'center' }}
                                    />
                                    <p style={{ fontStyle: 'italic', fontSize: '1.2em' }}>"{testimonial.text}"</p>
                                    <h3 style={{ marginTop: '10px' }}>{testimonial.name}</h3>
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

