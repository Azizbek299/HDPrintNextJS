import Image from "next/image";
import React from "react";
import {Source_Sans_3 } from "next/font/google";


const sorce_sans = Source_Sans_3({ 
  style: ['normal',],
  subsets: ['latin'],
})

const AboutRight = ({img, text}:{img:string, text:string}) => {
  console.log()
  return (
    <div className="mb-60">
      <div className="flex">        
        <div className={`${sorce_sans.className} flex-1 px-25 text-xl`}>         
          <span className="abzats">
            {text}
          </span>
        </div>
        <div className="flex-1 relative h-355 ">
            <Image src={img} 
              fill
            // objectPosition="center"
            // objectFit="cover"
            sizes="100"
            alt="reklama" 
            className="object-cover rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default AboutRight;
