import React from "react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useTranslations } from "next-intl";

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});



const CreateAddEvereWhere = () => {

  const t = useTranslations('homepage')
  const keys = ['createdAddEveryWhere'] as const
  
  return (
    <div className="bg-gray-100 h-800 w-full text-center">
      <div className={`${roboto.className}`}>

            <div className="w-70% mx-auto  mt-100 pt-50">
                <div className="text-[42px] font-[500] leading-tight">
                   {t(`${keys}.text1`)}
                </div>
                <div className="mt-30 text-xl w-50% mx-auto text-slate-800">
                {t(`${keys}.text2`)}
                    
                </div>
            </div>
            {/* ==========    Узбекистон харитаси     ==========  */}
            <div className="h-500 w-full mt-50">
                <div className="h-full w-60% mx-auto">
                    <Image
                    src={"/assets/home/uzbekmap.png"}
                    width={700}
                    height={500}
                    alt="map"
                    className=""
                    loading="lazy"
                    />
                </div>
            </div>
      </div>
    </div>
  );
};

export default CreateAddEvereWhere;
