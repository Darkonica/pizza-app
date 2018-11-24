import React, { Component } from 'react';
import Slider from "react-slick";

import Styles from './styles';

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