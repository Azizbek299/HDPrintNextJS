"use client";

import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React from "react";

// const category = [
//   { ru: "Призматрон", uz: "aaa", en: "prismatron" },
//   { ru: "Крышные установки", uz: "bbbb", en: "roofInstalation" },
//   { ru: "Вывески", uz: "", en: "signboard" },
//   { ru: "Лайтбоксы", uz: "", en: "lightboxes" },
//   { ru: "Панель кронштейн", uz: "", en: "panelBracket" },
//   { ru: "Билборд", uz: "", en: "billboard" },
//   { ru: "Цифровые экрани", uz: "", en: "digitalScreens" },
//   { ru: "Брендирования авто", uz: "", en: "carBranding" },
//   { ru: "Таблички", uz: "", en: "signs" },
//   { ru: "Световая панель", uz: "", en: "theLightPanel" },
//   { ru: "Штендер", uz: "", en: "pillar" },
//   { ru: "Объемные буквы", uz: "", en: "threeDimensionalLetters" },
//   { ru: "Стелла", uz: "", en: "stella" },
//   { ru: "Печать на баннере", uz: "", en: "printingOnABanner" },
//   { ru: "Печать на оракале", uz: "", en: "theSealOnTheOracle" },
//   { ru: "Печать на обои", uz: "", en: "printingOnWallpaper" },
//   { ru: "Печать на ткань", uz: "", en: "printingOnWallpaper" },
//   { ru: "Сувениры", uz: "", en: "souvenirs" },
//   { ru: "Изготовление флаги", uz: "", en: "makingFlags" },
//   { ru: "Рамки из багета", uz: "", en: "baguetteFrames" },
// ];




const Categories = (props: any) => {
  const path = usePathname(); 
  const url = path.split('/')
  const lang = url[1]
  const p = url[2]
   
  //    url[0]  === ''
  //    url[1]  === 'ru'
  //    url[2]  === 'service'
 

  return (
    <div className="overflow-y-scroll">
      <div className="col-start-1 col-span-3 py-15 pl-25 font-medium"> 
        {props?.category?.map((item: any, index:number) => {
          return (
            <div
              className={`categoryText my-2 w-90% rounded-md ${p === item[`${lang}`].slug ? "activeLink" : ""}`}
              key={index}
            >             
              <Link
                href={`/${url[2]}/${item.slug}`} 
                replace={true}
                className={`no-underline text-blue-900`}   
              >
                <div className="py-2 pl-20">{item[`${lang}`].title}</div>
              </Link>              
            </div>
          );
        })}
        {url[2] === 'portfolio' && 
            <div className={`categoryText my-2 w-90% rounded-md ${url[3] === 'video' ? "activeLink" : ""}`}>
                <Link
                  href={`/portfolio/video`} 
                  replace={true}
                  className={`no-underline text-blue-900`}   
              >
                <div className="py-2 pl-20">Video</div>
              </Link> 
            </div>}
      </div>
    </div>
  );
};

export default Categories;
