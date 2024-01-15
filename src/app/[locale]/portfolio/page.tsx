import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";



const page = () => {

  const t = useTranslations('homepage')  
  const keys = ['ourWork'] as const;

  return (
    <div>
      <div className="">
        <div className="relative h-500 overflow-hidden rounded-md">          
            <Image
              src={"/assets/for_our_work_page.jpg"}
              className="object-none"
              fill
              sizes="100"
              alt="our-work"
              priority
            />                  
          <div className="absolute  top-20% left-40 h-50%">
            <div className="text-5xl font-bold text-white">{t(`${keys}.text1`)}</div>
            <div className="text-xl font-semibold text-white mt-3">{t(`${keys}.text3`)}</div>
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default page;
