import React from "react";
import { Roboto } from "next/font/google";
import { useTranslations } from "next-intl";
import Carusel from "../Carusel/Carusel";

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };


  const img = [
    {image:'/assets/about_ishonadi_1.png'},
    {image:'/assets/about_ishonadi_2.png'},
    {image:'/assets/about_ishonadi_3.jpg'},
    {image:'/assets/about_ishonadi_4.png'},
    {image:'/assets/about_ishonadi_5.jpg'}
  ]
  
  const img2 = [
    {image:'/assets/about_ishonadi_6.jpg'},
    {image:'/assets/about_ishonadi_7.png'},
    {image:'/assets/about_ishonadi_8.webp'},
    {image:'/assets/about_ishonadi_9.jpg'},
    {image:'/assets/about_ishonadi_10.webp'}
  ]



const OurClients = () => {

    const t = useTranslations('homepage')
    const keys = ['ourClients'] as const

    const clNameContainer = 'relative h-150 w-220 my-10'
    const clNameImg = '-ml-50 object-contain'
    const sizes = '100'
    const autoPlaySpeed = 10
    const transDuration = 1000


  return (
    <div>
      <div className="w-full text-center">
            <div className={`${roboto.className}`}>
                <div className="w-90% mx-auto  mt-100 pt-50">
                    <div className="text-[42px] font-[500] leading-tight">
                    {t(`${keys}.text1`)}
                    </div>
                    <div className="mt-30 text-xl font-light w-50% mx-auto text-slate-800">
                    {t(`${keys}.text2`)}
                    </div>
                </div>
            </div>
      </div>

        <div className="mt-30">
            <Carusel 
                img={img} 
                clNameContainer={clNameContainer} 
                clNameImg={clNameImg} 
                sizes={sizes}
                autoPlaySpeed={autoPlaySpeed}
                transDuration = {transDuration}
                responsive={responsive}
                arrow={false}
                />
            <Carusel 
                img={img2} 
                clNameContainer={clNameContainer} 
                clNameImg={clNameImg} 
                sizes={sizes}
                autoPlaySpeed={autoPlaySpeed}
                transDuration = {transDuration}
                responsive={responsive}
                arrow={false}
                />
        </div>

    </div>
  );
};

export default OurClients;
