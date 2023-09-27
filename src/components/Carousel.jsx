// Carousel.jsx

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ images }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  function handlePreviousSlide() {
    sliderRef.slickPrev();
  }

  function handleNextSlide() {
    sliderRef.slickNext();
  }

  let sliderRef;

  function CustomPrevArrow() {
    return (
      <button onClick={handlePreviousSlide} className="absolute top-1/2 left-4 -translate-y-1/4 btn btn-circle z-10 focus:outline-none">❮</button>
    );
  }

  function CustomNextArrow() {
    return (
      <button onClick={handleNextSlide} className="absolute top-1/2 right-4 -translate-y-1/4 btn btn-circle z-10 focus:outline-none">❯</button>
    );
  }

  return (
    <div className="relative">
      <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
