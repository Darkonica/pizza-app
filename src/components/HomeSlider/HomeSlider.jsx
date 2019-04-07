import React, { Component } from "react";
import Slider from "react-slick";

import slide1 from "../../static/images/slider/slide1.jpg";
import slide2 from "../../static/images/slider/slide2.jpg";

import Styles from "./styles";

class HomeSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Styles>
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src={slide1} />
            </div>
            <div>
              <img src={slide2} />
            </div>
            <div>
              <img src={slide1} />
            </div>
            <div>
              <img src={slide2} />
            </div>
          </Slider>
        </div>
      </Styles>
    );
  }
}

export default HomeSlider;
