"use client";

import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Montserrat } from "next/font/google";
import Carusel from './Carusel';
import { useEffect, useState } from "react";
import { getCarouselForUser } from "@/actions/actions";
import { usePathname } from "next/navigation";
import { ClockLoader } from "react-spinners";


// 1 чи хил карусель размери катта 500*500

const montserrat = Montserrat({
  style: ["normal"],
  subsets: ["latin"],
  // display: "swap",
});




// const img = [
//   {
//     text1: "У вас есть идея?  ",
//     text2: "У нас есть всё ,",
//     text3: "чтобы воплотить её на бумаге!",
//     image: "/assets/carousel1.jpg",
//   },
//   {
//     text1: "Оказываем",
//     text2: "весь",
//     text3: "спектр услуг",
//     image: "/assets/carousel2.jpg",
//   },

//   {
//     text1: "",
//     text2: "У нас есть всё ,",
//     text3: "чтобы воплотить её !",
//     image: "/assets/carousel4.jpg",
//   },

//   {
//     text1: "",
//     text2: "У нас есть всё ,",
//     text3: "чтобы воплотить её на бумаге!",
//     image: "/assets/carousel3.webp",
//   },
// ];




function CarouselFadeExample() {
  const path = usePathname()
  let lang = path.split('/')[1]

  const [carusel, setCarusel] = useState() as any
  const [isLoading, setisLoading] = useState(false)



  useEffect(()=> {
    async function getData() {
      setisLoading(true) 
      let data = await getCarouselForUser()
      setCarusel(data.result)
      setisLoading(false) 
    }
    getData()
  },[])


  
  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (isLoading) {
    return (
      <div className="mt-70">
      <ClockLoader        
        color={"#030303"}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }




  return (
    
    <Carousel fade interval={2000} className={montserrat.className}>
      {carusel?.map((items:any, index:number) => {
        return (
          <Carousel.Item key={index}>
            <div className="relative h-600 w-full">
              <Image
                src={items.imageURL}
                alt="trust"
                fill
                sizes="100"
                className="object-cover"
                loading="lazy"
              />
              <div className="carousel-home absolute h-full w-full"></div>
            </div>
            <Carousel.Caption>
              <div className="mb-270">
                <div className="text-5xl font-bold tracking-wide">                  
                  {items?.[`${lang}`]?.text1 && items?.[`${lang}`]?.text1}
                </div>
                <div className="text-5xl my-2 font-bold tracking-wide">
                {items?.[`${lang}`]?.text2 && items?.[`${lang}`]?.text2}
                </div>
                <div className="text-5xl font-bold tracking-wide">
                {items?.[`${lang}`]?.text3 && items?.[`${lang}`]?.text3}
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CarouselFadeExample;
