import Image from "next/image";
import React from "react";
import { Oswald } from "next/font/google";
import { useTranslations } from "next-intl";



const oswald = Oswald({
  // style: ["normal"],
  subsets: ["latin"],
  // display: "swap",
});




const HowWeWork = () => {

  const t = useTranslations('homepage')  
  const keys = ['howWeWork'] as const;


  return (
    <div className={oswald.className}>
      <div className="mt-150">
        <div className="">
          <div className="text-5xl font-medium text-center mb-70">{t(`${keys}.text`)}</div>

          <div className="flex justify-around">
                <div className="h-100% w-20% ">
                    <div className="flex justify-center">
                        <Image
                        src={"/assets/home/1.svg"}
                        className=""
                        width={200}
                        height={200}
                        alt="how we work"
                        loading="lazy"
                        />
                    </div>
                    <div className="mt-30 text-center ">
                        <div className="text-2xl mb-20 font-medium">{t(`${keys}.imageText1`)}</div>
                        <span className="text-lg">
                          {t(`${keys}.imageSubText1`)}
                        </span>
                    </div>
                </div>

                <div className="h-100% w-20% ">
                    <div className="flex justify-center">
                        <Image
                        src={"/assets/home/2.svg"}
                        className=""
                        width={200}
                        height={200}
                        alt="how we work"
                        loading="lazy"
                        />
                    </div>
                    <div className="mt-30 text-center ">
                        <div className="text-2xl mb-20 font-medium">{t(`${keys}.imageText2`)}</div>
                        <span className="text-lg">
                          {t(`${keys}.imageSubText2`)}
                        </span>
                    </div>
                </div>

                <div className="h-100% w-20% ">
                    <div className="flex justify-center">
                        <Image
                        src={"/assets/home/3.svg"}
                        className=""
                        width={200}
                        height={200}
                        alt="how we work"
                        loading="lazy"
                        />
                    </div>
                    <div className="mt-30 text-center ">
                        <div className="text-2xl mb-20 font-medium">{t(`${keys}.imageText3`)}</div>
                        <span className="text-lg">
                          {t(`${keys}.imageSubText3`)}
                        </span>
                    </div>
                </div>

                <div className="h-100% w-20% ">
                    <div className="flex justify-center">
                        <Image
                        src={"/assets/home/4.svg"}
                        className=""
                        width={200}
                        height={200}
                        alt="how we work"
                        loading="lazy"
                        />
                    </div>
                    <div className="mt-30 text-center">
                        <div className="text-2xl mb-20 font-medium">{t(`${keys}.imageText4`)}</div>
                        <span className="text-lg">
                         {t(`${keys}.imageSubText4`)}
                        </span>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
