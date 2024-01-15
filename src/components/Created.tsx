import React from "react";




const Created = () => {
  return (
    <div className="bg-slate-900 h-100 pb-10 flex place-content-center items-end " >
      <div className="text-slate-300 ">
        <span className="font-extralight mr-8">Created by </span>
        <span className="font-light text-blue-300"> zzbkahrorov@gmail.com </span>
      </div>
    </div>
  );
};

export default Created;



"use client";

import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const img = [
  {
    text: "У вас есть идея? У нас есть всё, чтобы воплотить её на бумаге!",
    image: "/assets/carusel1.jpg",
  },
  { text: "Оказываем 1", image: "/assets/carusel1.jpg" },
  { text: "Оказываем 2", image: "/assets/carusel1.jpg" },
  { text: "Оказываем 3", image: "/assets/carusel1.jpg" },
  { text: "Оказываем 4", image: "/assets/carusel1.jpg" },
  { text: "Оказываем 5", image: "/assets/carusel1.jpg" },
];

function CarouselFadeExample() {
  return (
    <Carousel fade className="border-2 border-black relative h-1000">
      {img?.map((item) => {
        return (
          <Carousel.Item>
            <Image
              src={item.image}
              alt="trust"
              fill
              objectFit="contain"
              className="border-2 border-red-500 "
              unoptimized
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

// export default CarouselFadeExample;
