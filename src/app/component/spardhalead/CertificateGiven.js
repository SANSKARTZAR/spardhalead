'use client';
import React from "react";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import certificategive from "@/app/assets/images/certified-test.png";

const testimonials = [
    {
        image: certificategive,
    },
    {
        image: certificategive,
    },
    {
        image: certificategive,
    },
    {
        image: certificategive,
    }
];

const CertificateGiven = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <section className="certif-test">
                <div className="container">
                    <div className="">
                        <h1 className="section-title">Where Customers Turn Skills into Guitar Certification Success</h1>
                    </div>
                    <br/>
                    <div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
                                    <div className="testimonial-divcertificet">
                                        <Image
                                            src={testimonial.image}
                                            alt="certified"
                                            style={{ borderRadius: '10px', width: '200px', height: '300px', objectFit: 'cover', marginBottom: '20px', marginLeft: '20%' }}
                                        />
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
export default CertificateGiven;

