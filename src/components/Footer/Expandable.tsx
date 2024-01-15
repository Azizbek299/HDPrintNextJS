"use client";
import { usePathname } from "next/navigation";
import {Oswald } from "next/font/google";
import { IoLocationOutline } from "react-icons/io5";





const uz = [
  {
    tel: "998 99 000 00 00",
    names: "Alisher",
    skill: "Tashqi reklama",
  },
  { tel: "998 99 000 00 00", names: "Ozoda", skill: "3D pechat" },
  {
    tel: "998 99 000 00 00",
    names: "Sherali",
    skill: "Material frezirovkasi",
  },
];

const ru = [
  {
    tel: "998 99 000 00 00",
    names: "Олег",
    skill: "Наружная реклама",
  },
  { tel: "998 99 000 00 00", names: "Юлия", skill: "3D печать", },
  {
    tel: "998 99 000 00 00",
    names: "Александр",
    skill: "Фрезеровка материалов",
  },
];

const cn = [
  {
    tel: "998 99 000 00 00",
    names: "Олег",
    skill: "户外广告",
  },
  { tel: "998 99 000 00 00", names: "Юлия", skill: "3D打印", },
  {
    tel: "998 99 000 00 00",
    names: "Александр",
    skill: "物料铣削",
  },
];

const en = [
  {
    tel: "998 99 000 00 00",
    names: "Олег",
    skill: "Outdoor advertising",
  },
  { tel: "998 99 000 00 00", names: "Юлия", skill: "3D printing", },
  {
    tel: "998 99 000 00 00",
    names: "Александр",
    skill: "Milling of materials",
  },
];

const tr = [
  {
    tel: "998 99 000 00 00",
    names: "Олег",
    skill: "Açık Hava reklamcılığı",
  },
  { tel: "998 99 000 00 00", names: "Юлия", skill: "3D baskı", },
  {
    tel: "998 99 000 00 00",
    names: "Александр",
    skill: "Malzemelerin öğütülmesi",
  },
];

const kr = [
  {
    tel: "998 99 000 00 00",
    names: "Олег",
    skill: "옥외 광고",
  },
  { tel: "998 99 000 00 00", names: "Юлия", skill: "3 차원 인쇄", },
  {
    tel: "998 99 000 00 00",
    names: "Александр",
    skill: "재료 밀링",
  },
];


const oswald = Oswald({ 
  subsets: ['latin'],
})


const Expandable = ({address, addressText, ourContact}:{address:string, addressText:string, ourContact:string}) => {

  const path = usePathname().slice(1, 3);

  let lang = null

  if (path === 'uz') { 
    lang = uz
  } else if (path === 'ru') {
    lang = ru
  } else if (path === 'cn') {
    lang = cn
  } else if (path === 'en') {
    lang = en
  } else if (path === 'tr') {
    lang = tr
  } else if (path === 'kr') {
    lang = kr
  }


  return (
    <div className="bg-slate-900 mt-50">
      <div className="flex justify-between py-70 mx-auto lg:w-full xl:w-10/12">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197.62142962067654!2d72.35372578196785!3d40.759443518560836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced7112cae98b%3A0x886c916572ccbfdd!2sHDprint%20Reklama%20agentligi!5e0!3m2!1sen!2s!4v1703010428706!5m2!1sen!2s"
            width="500"
            height="400"
            // style="border:0;"
            // allowFullScreen=""
            loading="lazy"
            title="map"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>

        <div className={`${oswald.className} relative`}>

          <div className="text-white text-[25px] leading-5">{ourContact}</div>
          <ul className="mt-50">
            {lang?.map((items: any, i) => {
              return (
                <li key={i} className="grid grid-cols-10 items-end font-light ">
                  <span className="text-green-500 text-[23px] col-span-3 mb-7 ">{items.tel}</span>
                  <span className="text-slate-300 text-[25px] col-span-3 grid justify-center ml-10 mb-7 ">{items.names}</span>
                  <span className="text-slate-300 text-[25px] col-span-4 mb-7 ">{items.skill}</span>
                </li>
              );
            })}
          </ul>

            <div className="mx-auto absolute text-slate-300 font-light bottom-1 w-full tracking-wide flex items-end leading-5">            
              <IoLocationOutline size={25} color="red"/> 
              <span className="ml-10">
                <span className="text-white font-semibold mr-7">{address}:</span>
                <span> {addressText} </span>
              </span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Expandable;
