import React from "react";
import {Oswald } from "next/font/google";
import About from "@/components/About/About";
import {useTranslations} from 'next-intl';
import AboutRight from "@/components/About/AboutRight";
import Carusel from "@/components/Carusel/Carusel";





const oswald = Oswald({ 
  style: ['normal',],
  subsets: ['latin'],
  display: 'swap',
})


const img = [
  {image:'/assets/about_ishonadi_1.png'},
  {image:'/assets/about_ishonadi_2.png'},
  {image:'/assets/about_ishonadi_3.jpg'},
  {image:'/assets/about_ishonadi_4.png'},
  {image:'/assets/about_ishonadi_5.jpg'}
]



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






const page = () => {

  const t = useTranslations('aboutText');
  
  const clNameContainer = 'relative h-150 w-220 my-50'
  const clNameImg = '-ml-50 object-contain'
  const sizes = '100'
  const autoPlaySpeed = 10
  const transDuration = 1000

  return (
    <div className="xl:container mx-auto min-h-screen">
      
        <div className={`${oswald.className} bg-about bg-cover bg-center h-400 rounded-md overflow-hidden`}>
          <div className="parentOtmen flex flex-col justify-center items-center h-400 ">
            <span className="otmen text-[70px] font-semibold text-white uppercase tracking-normal">{t('text')}</span>
            <span className="otmen text-[35px] font-semibold text-white uppercase tracking-normal">{t('textt')}</span>
          </div>
          
      </div>
      <div className="">
        <div className={`${oswald.className} my-100 text-center text-[50px] font-medium`}>{t('text_0')}</div>
          <About img={'/assets/dinar.png'} text={t('text_1')}/>
          <AboutRight img={'/assets/evos.png'} text={t('text_2')}/>
          <About img={'/assets/about_2.jpg'} text={t('text_3')}/>
      </div>
      <div className="">
        <div className={oswald.className}>
          <div className={`mt-100 text-center text-[50px] font-medium`}>{t('text_0')}</div>
          <div className="mt-15 text-[17px] text-center font-semibold text-slate-800">{t('text_4')}</div>
        </div>
        <div className="mb-50">
          <Carusel 
            img={img} 
            clNameContainer={clNameContainer} 
            clNameImg={clNameImg} 
            sizes={sizes}
            autoPlaySpeed={autoPlaySpeed}
            transDuration = {transDuration}
            responsive={responsive}
            arrow={true}
            />
        </div>
      </div>
    </div>
  );
};

export default page;



