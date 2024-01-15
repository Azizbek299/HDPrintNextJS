"use client"

import Image from 'next/image'
import React, {  useEffect, useState } from 'react'
import { getOurServiceForUser } from '@/actions/actions';
import { usePathname } from 'next/navigation';
import { ClockLoader } from 'react-spinners';
import { Link } from '@/navigation';






  
function ServiceBoxImage(){

  const path = usePathname()
  let lang = path.split('/')[1]

  const [loaded, setLoaded] = useState(false)
  const [ourService, setOurService] = useState<any>()
  const [isLoading, setisLoading] = useState(false)


  useEffect(()=> {
    async function getData() {
      setisLoading(true) 
      let data = await getOurServiceForUser()
      setOurService(data?.result?.slice(0, 3))
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

        {/* ==============    Boxes   ============== */}

        <div className="">

          {ourService?.map((item:any, index:number) => {
            return (
              <div key={index} className="mt-50">

                <div className="text-center text-3xl font-medium tracking-wide text-slate-700">
                  {item?.[`${lang}`]?.title}
                </div>

                <Link href={`/service/${item.slug}`}>                
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
                </Link>
              </div>
            );
          })}
        </div>

    </div>
  )
}

export default ServiceBoxImage