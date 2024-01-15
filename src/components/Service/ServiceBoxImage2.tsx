"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import { Oswald } from 'next/font/google';



const oswald = Oswald({ 			
  subsets: ['latin'],
  display: 'swap',
})


  
function ServiceBoxImage2(props:any){

  const path = usePathname()
  let lang = path.split('/')[1]

  const [loaded, setLoaded] = useState(false)

  return (
    <div>

        {/* ==============    Boxes   ============== */}

        <div className={oswald.className}>
          {props?.ourServices?.map((item:any, index:number) => {
            return (
              <div key={index} className="mt-50">

                <div className="text-center text-3xl font-medium tracking-wide text-slate-700">
                  {item?.[`${lang}`]?.title}                                               
                </div>

                <div className="grid grid-cols-3">

                        <div className="mt-30 w-90% mx-auto">                                     
                              <div className="relative h-200 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={item.imageURL?.url1}
                                  alt="our service"   
                                  fill                         
                                  sizes="100"
                                  className={loaded ? 'object-cover transition-opacity duration-[2s]' : 'object-cover transition-opacity opacity-0 duration-[2s]'}
                                  // priority={true}
                                  loading='lazy'
                                  onLoad={() => setLoaded(true)}                                                                                                      
                                />
                              </div>                                                                
                        </div>    
                        <div className="mt-30 w-90% mx-auto">                                     
                              <div className="relative h-200 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={item.imageURL?.url2}
                                  alt="our service"   
                                  fill                         
                                  sizes="100"
                                  className={loaded ? 'object-cover transition-opacity duration-[2s]' : 'object-cover transition-opacity opacity-0 duration-[2s]'}
                                  // priority={true}
                                  loading='lazy'
                                  onLoad={() => setLoaded(true)}                                                                                                      
                                />
                              </div>                                                                
                        </div>  
                        <div className="mt-30 w-90% mx-auto">                                     
                              <div className="relative h-200 w-full rounded-lg overflow-hidden">
                                <Image
                                  src={item.imageURL?.url3}
                                  alt="our service"   
                                  fill                         
                                  sizes="100"
                                  className={loaded ? 'object-cover transition-opacity duration-[2s]' : 'object-cover transition-opacity opacity-0 duration-[2s]'}
                                  // priority={true}
                                  loading='lazy'
                                  onLoad={() => setLoaded(true)}                                                                                                      
                                />
                              </div>                                                                
                        </div>                                                                        
                </div>

                <div className="font-light my-40 px-20" style={{whiteSpace: "pre-line"}}>
                    {item?.[`${lang}`]?.describe}                                                               
                </div>
              </div>
            );
          })}
        </div>

    </div>
  )
}

export default ServiceBoxImage2