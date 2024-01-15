"use client"
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import ModalImagePopUp from "../Modal/ModalImagePopUp";
import { ClockLoader } from "react-spinners";
import { getOurJobForUser } from "@/actions/actions";




const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});




const OurWorks = (props:any) => {

  const [ourWorks, setOurWorks] = useState<any>()
  const [isLoading, setisLoading] = useState(false)


  useEffect(()=> {
    async function getData() {
      setisLoading(true) 
      let data = await getOurJobForUser()
      setOurWorks(data?.result?.slice(0, 15))
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
      <ClockLoader        
        color={"#130f40"}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }




  return (
    <div>
      <div className="">   

        <div className="w-full text-center">
          <div className={`${roboto.className}`}>
            <div className="w-90% mx-auto  mt-100 pt-50">
              <div className="text-[42px] font-medium leading-tight">
                {props.text1}
              </div>
              <div className="mt-30 text-xl font-light w-50% mx-auto text-slate-800">
                {props.text2}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-around gap-3 mt-70">
            {ourWorks?.map((item:any, index:number)=> {
                return (
                  <div className="" key={index}>
                    <div className="relative h-300 " >                        
                        
                        {/* ==========    Бизнинг ишлар     ==========  */}
                        
                    <ModalImagePopUp img={item.imageURL} height={'300'}/>   
                                          
                    </div>                            
                  </div>
                )
            })}

        </div>
      </div>
    </div>
  );
};

export default OurWorks;
