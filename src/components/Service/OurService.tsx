

import React from "react";
import { Oswald } from "next/font/google";
import ServiceBoxImage from "./ServiceBoxImage";
import { useTranslations } from "next-intl";


const oswald = Oswald({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


// const ourServices = [
//   {
//     ru: "Призматрон", uz:"Prizmatron",
//     img: [
//       {image:"/assets/our_service/prismatron1.jpg"},
//       {image: "/assets/our_service/prismatron2.jpg"},
//       {image:"/assets/our_service/trivision.jpg"},
//     ],
//   },
//   {
//     ru: "Крышные установки", uz:"Tomlarga o'rnatish",
//     img: [
//       {image:"/assets/our_service/roof_reklama1.jpg"},
//       {image: "/assets/our_service/roof_reklama2.jpg"},
//       {image:"/assets/our_service/roof_reklama3.jpg"},
//     ],
//   },

//   {
//     ru: "Вывески",  uz:"Belgilar",
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },

  // {
  //   title: "Лайтбоксы",
  //   img: [
  //     {image:"/assets/our_service/lightbox1.jpg"},
  //     {image: "/assets/our_service/lightbox2.jpeg"},
  //     {image:"/assets/our_service/lightbox3.jpg"},
  //   ],
  // },

  // {
  //   title: "Панель кронштейн",
  //   img: [
  //     {image:"/assets/our_service/panel_kronshteyn1.jpg"},
  //     {image: "/assets/our_service/panel_kronshteyn2.jpg"},
  //     {image:"/assets/our_service/panel_kronshteyn3.jpg"},
  //   ],
  // },

  // {
  //   title: "Билборд",
  //   img: [
  //     {image:"/assets/our_service/bilbord1.jpg"},
  //     {image: "/assets/our_service/bilbord2.jpg"},
  //     {image:"/assets/our_service/bilbord3.jpg"},
  //   ],
  // },

  // {
  //   title: "Цифровые экрани",
  //   img: [
  //     {image:"/assets/our_service/tsivroviy_ekrani1.jpg"},
  //     {image: "/assets/our_service/tsivroviy_ekrani2.jpg"},
  //     {image:"/assets/our_service/tsivroviy_ekrani3.jpg"},
  //   ],
  // },

  // {
  //   title: "Брендирования авто",
  //   img: [
  //     {image:"/assets/our_service/brend-avto-1.jpg"},
  //     {image: "/assets/our_service/brend-avto-2.jpg"},
  //     {image:"/assets/our_service/brend-avto-3.jpg"},
  //   ],
  // },

  // {
  //   title: "Таблички",
  //   img: [
  //     {image:"/assets/our_service/tablichki1.jpg"},
  //     {image: "/assets/our_service/tablichki2.jpg"},
  //     {image:"/assets/our_service/tablichki3.jpeg"},
  //   ],
  // },

  // {
  //   title: "Световая панель",
  //   img: [
  //     {image:"/assets/our_service/svet_panel1.webp"},
  //     {image: "/assets/our_service/svet_panel2.jpg"},
  //     {image:"/assets/our_service/svet_panel3.jpg"},
  //   ],
  // },

  // {
  //   title: "Штендер",
  //   img: [
  //     {image:"/assets/our_service/shtender1.jpg"},
  //     {image: "/assets/our_service/shtender2.webp"},
  //     {image:"/assets/our_service/shtender3.jpeg"},
  //   ],
  // },

  // {
  //   title: "Объемные буквы",
  //   img: [
  //     {image:"/assets/our_service/obyemnyye-bukvy-1.jpg"},
  //     {image: "/assets/our_service/obyemnyye-bukvy-2.webp"},
  //     {image:"/assets/our_service/obyemnyye-bukvy-3.jpg"},
  //   ],
  // },

  // {
  //   title: "Стелла",
  //   img: [
  //     {image:"/assets/our_service/stella1.jpg"},
  //     {image: "/assets/our_service/stella2.webp"},
  //     {image:"/assets/our_service/stella3.jpeg"},
  //   ],
  // },

  // {
  //   title: "Печать на баннере",
  //   img: [
  //     {image:"/assets/our_service/pechat_bannere1.jpg"},
  //     {image: "/assets/our_service/pechat_bannere2.jpg"},
  //     {image:"/assets/our_service/pechat_bannere3.webp"},
  //   ],
  // },

  // {
  //   title: "Печать на оракале",
  //   img: [
  //     {image:"/assets/our_service/pechat_oracal_1.jpg"},
  //     {image: "/assets/our_service/pechat_oracal_2.jpg"},
  //     {image:"/assets/our_service/pechat_oracal_3.jpg"},
  //   ],
  // },

  // {
  //   title: "Печать на обои",
  //   img: [
  //     {image:"/assets/our_service/pechat-na-oboyakh-1.jpg"},
  //     {image: "/assets/our_service/pechat-na-oboyakh-2.jpg"},
  //     {image:"/assets/our_service/pechat-na-oboyakh-3.jpeg"},
  //   ],
  // },

  // {
  //   title: "Печать на ткань",
  //   img: [
  //     {image:"/assets/our_service/viveska_1.jpg"},
  //     {image: "/assets/our_service/viveska_2.jpg"},
  //     {image:"/assets/our_service/viveska_3.jpg"},
  //   ],
  // },

  // {
  //   title: "Сувениры",
  //   img: [
  //     {image:"/assets/our_service/viveska_1.jpg"},
  //     {image: "/assets/our_service/viveska_2.jpg"},
  //     {image:"/assets/our_service/viveska_3.jpg"},
  //   ],
  // },

  // {
  //   title: "Изготовление флаги",
  //   img: [
  //     {image:"/assets/our_service/viveska_1.jpg"},
  //     {image: "/assets/our_service/viveska_2.jpg"},
  //     {image:"/assets/our_service/viveska_3.jpg"},
  //   ],
  // },

  // {
  //   title: "Рамки из багета",
  //   img: [
  //     {image:"/assets/our_service/viveska_1.jpg"},
  //     {image: "/assets/our_service/viveska_2.jpg"},
  //     {image:"/assets/our_service/viveska_3.jpg"},
  //   ],
  // },


//];




const OurService = () => {

  const t = useTranslations('homepage')

  return (
    <div className="">
      <div className={`${oswald.className} `}>

        <div className="w-60% mt-150 mx-auto text-center mb-80">
          <div className="text-4xl font-medium tracking-wide mb-30">
            {t('serviceText1')}
          </div>
          <span className="font-light">
            {t('serviceText2')}
          </span>
        </div>

        <ServiceBoxImage/>

      </div>
    </div>
  );
};

export default OurService;
