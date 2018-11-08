import React, { Component } from 'react';
import Head from 'next/head';
import Slider from "react-slick";

import Styles from './styles';
// import './style.css';

class HomeSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <Styles>
                {/* <Head>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head> */}
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img src="static/images/slider/slide1.jpg" />
                        </div>
                        <div>
                            <img src="static/images/slider/slide2.jpg" />
                        </div>
                        <div>
                            <img src="static/images/slider/slide1.jpg" />
                        </div>
                        <div>
                            <img src="static/images/slider/slide2.jpg" />
                        </div>
                    </Slider>
                </div>
            </Styles>
        );
    }
}

export default HomeSlider;