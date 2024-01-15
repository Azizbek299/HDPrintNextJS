"use client"

import {getOurJobForUser } from "@/actions/actions";
import CategoryForServicePage from "@/components/Service/CategoryForServicePage";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";


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



const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const [ourJob, setOurJob] = useState<any>()
  const [isLoading, setisLoading] = useState(false)
  
  const arrayUniqueByKey = [...new Map(ourJob?.map((item:any) => [item['slug'], item])).values() as any];

  

  useEffect(()=> {
    async function getData(){
      setisLoading(true)
      let data = await getOurJobForUser()
      setOurJob(data.result)
      setisLoading(false)
    }
    getData()
  }, [])



  
  const override = {
    display: "block",
    margin: "0 auto",
  };

  if (isLoading) {
    return (
      <div className="mt-70">
      <MoonLoader        
        color={"#130f40"}
        loading={isLoading}
        cssOverride={override}
        size={100} 
        speedMultiplier={0.6}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }

  

  return (
    <div className="grid grid-cols-12 h-full">
      <div className="col-start-1 col-span-3 ml-25 bg-slate-100 rounded-lg">
        <CategoryForServicePage category={arrayUniqueByKey} />
      </div>
      <div className="col-start-4 col-span-12 mr-25 ml-10 bg-slate-300 rounded-lg py-25 px-40">
        {children}
      </div>
    </div>
  );
};

export default PortfolioLayout;
