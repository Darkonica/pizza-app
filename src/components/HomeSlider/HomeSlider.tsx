import React from 'react';
import Slider from 'react-slick';
// import commonStyles from 'styles/commonStyles';

import slide1 from 'static/images/slider/slide1.jpg';
import slide2 from 'static/images/slider/slide2.jpg';
import { SLIDER_SETTINGS } from './constants';

import './styles'; // TODO: wrong

function HomeSlider() {
  return (
    <div className="slider-container">
      <Slider {...SLIDER_SETTINGS}>
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
  );
}

export default HomeSlider;
