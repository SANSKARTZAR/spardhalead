'use client';
import React, { Component } from "react";
import Slider from "react-slick";

import Image from "next/image";
import certification from "@/app/assets/images/best-online-guitar-lessons.png";




export default class CertifiedTest extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            autoplay: false,
            slidesToShow: 1,
            arrows: true,
            autoplaySpeed: 1000,
            speed: 500
        };
        return (
            <>
                <section className="certif-test">
                    <div className="container">
                        <div className="">
                            <h1 className="section-title">Alumni Testimonials</h1>
                        </div>
                        <div>
                            <Slider {...settings} className="Containertest">
                                <div className="testSlidebox" >
                                    “I love the way things are set up at spardha. Everything is so organized and systematic. Both the teachers and customers are handled very well. I mainly like the way classes are arranged and both the parties are kept in sync. Any concerns and problems get solved immediately. There is always a dedicated staff to help us & guide us.”
                                    Chitranshi Chavan
                                    Electron
                                </div>
                                <div className="testSlidebox">
                                    2
                                </div>
                                <div className="testSlidebox" >
                                    3
                                </div>
                                <div className="testSlidebox" >
                                    4
                                </div>
                                <div className="testSlidebox" >
                                    5
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
