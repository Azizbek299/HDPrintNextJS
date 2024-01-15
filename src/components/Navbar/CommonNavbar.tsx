import React from "react";
import TopNavbar from "./TopNavbar/TopNavbar";
import { useTranslations } from "next-intl";


const CommonNavbar = () => {

  const t = useTranslations('Navbar')
  let obratniyZvanok = t('ObratniyZvanok')

  const s = useTranslations('sendSms')
  let text1 = s('text1')
  let text2 = s('text2')
  let text3 = s('text3')
  let text4 = s('text4')
  let text5 = s('text5')
  let text6 = s('text6')



  return (
    <div className="mb-10">
      <div className="bg-gradient-to-t from-slate-50 to-slate-200">
        <TopNavbar 
          obratniyZvanok={obratniyZvanok}
          text1={text1}
          text2={text2}
          text3={text3}
          text4={text4}
          text5={text5}
          text6={text6}
        />
      </div>        
    </div>
  );
};

export default CommonNavbar;
