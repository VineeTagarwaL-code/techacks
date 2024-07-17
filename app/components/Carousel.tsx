"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = ["/image-car-2.jpg", "/image-car-2.jpg"];

const Carousel = () => {
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt="carousel"
              width={450}
              height={550}
              className="rounded-2xl object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
