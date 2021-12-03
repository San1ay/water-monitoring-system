import React from "react";
import { Carousel } from "react-bootstrap";
import "./car-body.scss";
export default function CarBody() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="car-img d-block w-100"
          src="car-01.jpg"
          alt="carousel"
        />
        <Carousel.Caption>
          <h3> Pure Water is the World’s First and Foremost Medicine.</h3>
          <p>Slovakian Proverb</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img d-block w-100"
          src="car-02.jpg"
          alt="carousel"
        />

        <Carousel.Caption>
          {" "}
          <h3> Thousands Have Lived Without Love, Not One Without Water.</h3>
          <p>W.H.Auden</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" car-img d-block w-100 h-80 rounded mx-auto "
          src="car-03.jpg"
          alt="carousel"
        />

        <Carousel.Caption>
          <h3>Water is Life and Clean Water is Means Health. </h3>
          <p>Audrey Hepburn</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
