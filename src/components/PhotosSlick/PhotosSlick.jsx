import React from "react";
import "./photosSlick.css";
import { useState } from "react";
import Slider from "react-slick";
import photoSlick1 from "../../images/photoSlick1.png";
import photoSlick2 from "../../images/photoSlick2.png";
import photoSlick3 from "../../images/photoSlick3.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [photoSlick1, photoSlick1, photoSlick1];
const PhotosSlick = () => {
  const images = [photoSlick1, photoSlick1, photoSlick1, photoSlick1];
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
    <div className="photosContainer">
      <div className="photosSlick">
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

  /* const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="PhotosSlickContainer">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img className="slickImg" src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  ); */
};

export default PhotosSlick;
