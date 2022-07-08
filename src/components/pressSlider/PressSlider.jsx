import React from "react";
import Slider from "react-slick";
import "./pressSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bplans from "../../images/Bplans.png";
import eShe from "../../images/eShe.png";
import LinkedIn from "../../images/LinkedIn.png";
import timesNext from "../../images/timesNext.png";

const PressSlider = () => {
  const images = [Bplans, eShe, LinkedIn, timesNext];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pressContainer">
      <h2>Featured In</h2>
      <div className="pressSlick">
        <Slider {...settings}>
          {images.map((image) => (
            <div>
              <img src={image} alt={image} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PressSlider;
