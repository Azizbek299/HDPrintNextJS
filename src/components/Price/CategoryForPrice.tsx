"use client";

import { getProductsForUser } from "@/actions/actions";
import { Link } from "@/navigation";
import { Oswald } from "next/font/google";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";



const oswald = Oswald({ 
  style: ['normal',],						
  subsets: ['latin'],
  display: 'swap',
})



const CategoryForPrice = () => {
  const path = usePathname(); 
  const url = path.split('/')
  const lang = url[1]
  const idInBrowserUrl = url[3]
   
  //    url[0]  === ''
  //    url[1]  === 'ru'
  //    url[2]  === 'service'


  const [category, setCategory] = useState<any>()
  const [isLoading, setisLoading] = useState(false)
  

  

  useEffect(()=> {
    async function getData(){
      setisLoading(true)
      let data = await getProductsForUser()
      setCategory(data.result)
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
    <div className={`${oswald.className} overflow-y-scroll`}>
      <div className="col-start-1 col-span-3 py-15 pl-25 font-normal"> 
        {category?.map((item: any, index:number) => {
          return (
            <div
              className={`categoryText my-2 w-90% rounded-md ${idInBrowserUrl === item._id ? "activeLink" : ""}`}
              key={index}
            >             
              <Link
                href={`/${url[2]}/${item._id}`} 
                replace={true}
                className={`no-underline text-blue-900`}   
              >
                <div className="py-2 pl-20">{item[`${lang}`].title}</div>
              </Link>              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryForPrice;
