import React, { useState } from "react";
import img1 from "../../../images/banner/smartphone.jpg";
import img2 from "../../../images/banner/drone.jpg";
import img3 from "../../../images/banner/applewatch.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block w-100' src={img1} alt='First slide' />
        <Carousel.Caption className='text-secondary'>
          <h3 className='fs-1 textPrimary'>FlagShip Phone</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img2} alt='Third slide' />

        <Carousel.Caption>
          <h3 className='fs-1'>Moders Drone</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img3} alt='Third slide' />

        <Carousel.Caption>
          <h3 className='fs-1'>In Future Watch</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
