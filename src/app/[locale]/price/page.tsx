
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";





const page = () => {
  const t = useTranslations("service");



  return (
    <div>
      <div className="">
        <div className="relative h-400 overflow-hidden rounded-md">          
            <Image
              src={"/assets/productPrice.png"}
              className="object-cover"
              fill
              sizes="100"
              alt="our-service"
              priority
            />                  
          <div className="absolute  top-20% left-40 h-50%">
            <div className="text-5xl font-semibold text-black"></div>
            <div className="text-xl font-semibold text-slate-700 mt-3"></div>
          </div>
        </div>
          
      </div>
    </div>
  );
};

export default page;
