import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import VideoModal from '../ModalVideo'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'



class Hero extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="static-hero">
                <div className="hero-container">
                    <div className="hero-wrapper">
                            <div className="hero-slide">
                                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                                    <div className="container-fluid">
                                        <div className="slide-content">
                                            <div className="slide-title">
                                                <h2>We Fight For Your Justice As Like A Friend.</h2>
                                            </div>
                                            <div className="slide-text">
                                                <p>Law is commonly understood as a system of rules that are created and enforced
                                                    through social or government.</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <div data-swiper-parallax="500" className="slide-btns">
                                                <Link to="/about" className="theme-btn">Contact us</Link>
                                                <VideoModal />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;