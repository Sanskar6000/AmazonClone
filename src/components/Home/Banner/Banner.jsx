import React from 'react';
import Carousel from 'react-material-ui-carousel';

import BannerData from './BannerData';
import './Banner.css';

const Banner = function () {
  return (
    // Passing props in Carousel
    <Carousel
      class="carousel"
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={false}
      cycleNavigation={true}
    >
      {BannerData.map((image) => (
        <img src={image} className="bannerImage" alt="banner-img" />
      ))}
    </Carousel>
  );
};

export default Banner;
