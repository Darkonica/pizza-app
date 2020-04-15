import React from 'react';
import Slider from 'react-slick';

import slide1 from 'static/images/slider/slide1.jpg';
import slide2 from 'static/images/slider/slide2.jpg';

import Styles from './styles';

function HomeSlider() {
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
            <img src={slide1} alt="" />
          </div>
          <div>
            <img src={slide2} alt="" />
          </div>
          <div>
            <img src={slide1} alt="" />
          </div>
          <div>
            <img src={slide2} alt="" />
          </div>
        </Slider>
      </div>
    </Styles>
  );
}

export default HomeSlider;
