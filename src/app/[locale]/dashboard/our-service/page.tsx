"use client";

import {DeleteOurService, getOurService,} from "@/actions/actions";
import { useEdgeStore } from "@/lib/edgestore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RingLoader } from "react-spinners";






const OurService = () => {
  const { edgestore } = useEdgeStore();                           //  Rasmlar bilan ishlash uchun
  const [OurServiceData, setOurServiceData] = useState<any>([]);  //  Serverdan ma'lumot tortib shu erga quyamiz
  const [areYouSureDelete, setAreYouSureDelete] = useState(false);  // modal pop-up for  delete
  const [idAndUrlForDelete, setIdAndUrlForDelete] = useState<any>({});  //  rasm va text ni uchirish funktsia
  const [isLoading, setIsLoading] = useState(false)





  async function deleteOurService(id: string, imageURL: string) {
    
    setIsLoading(true)
    setAreYouSureDelete(false);

    
    if (idAndUrlForDelete.url1) {
      await edgestore.myPublicImages.delete({
        url: idAndUrlForDelete.url1,
      });
    }
    if (idAndUrlForDelete.url2) {
      await edgestore.myPublicImages.delete({
        url: idAndUrlForDelete.url2,
      });
    }if (idAndUrlForDelete.url3) {
      await edgestore.myPublicImages.delete({
        url: idAndUrlForDelete.url3,
      });
    }

    await DeleteOurService(idAndUrlForDelete.id);

    setOurServiceData(OurServiceData.filter((item:any)=> item._id !== id))

    setIsLoading(false)

  }



  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      let data = await getOurService();
      setOurServiceData(data?.result);
      setIsLoading(false);
    }
    
    getData();
  }, []);


  const override = {
    display: "block",
    margin: "0 auto",
  };


  if (isLoading) {
    return (
      <div className="mt-70">
      <RingLoader        
        color={"#130f40"}
        loading={isLoading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    );
  }



  if (areYouSureDelete) {
    return (
      <div className="">
        <div className="w-80% bg-white mx-auto py-20">
          <div className="text-2xl font-medium text-center mt-20 ">
            Ma'lumotni uchirish ?
          </div>
          <div className=" w-70% mx-auto flex justify-around mt-70 mb-30">
            <button
              onClick={() =>
                deleteOurService(idAndUrlForDelete.id, idAndUrlForDelete.url)
              }
              className="py-2 px-5 bg-red-600 text-white text-xl font-medium tracking-wide rounded-sm"
            >
              Ha
            </button>
            <button
              onClick={() => setAreYouSureDelete(false)}
              className="py-2 px-5 bg-blue-600 text-white text-xl font-medium tracking-wide rounded-sm"
            >
              Yo'q
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <div className="">

          <div className="text-end mt-30">
            <Link
              href={"our-service/create"}
              className="py-3 px-5 relative  no-underline rounded bg-blue-600 text-white "
            >
              <span className="text-lg font-bold tracking-wider">Create</span>
              <span className="absolute top-11 right-20">
                <FaPlus className="inline-block" />
              </span>
            </Link>
          </div>

        </div>

        <div className="grid grid-cols-1 gap-x-20 gap-y-70 my-70">
          {OurServiceData?.map((item: any) => {
            return (
              <div className="" key={item._id}>
                  <div className="my-10 text-center text-lg font-semibold">
                      {item?.uz?.title}                      
                    </div>
                <div className="">

                  <div className='grid grid-cols-3 gap-x-10'>
                        {item.imageURL?.url1 &&
                          <div className="relative h-200">
                              <Image
                                fill
                                sizes="100"
                                src={item?.imageURL.url1}
                                alt="rasm"
                                priority
                                className="rounded overflow-hidden"
                              />                  
                          </div>                          
                        }
                        {item.imageURL?.url2 ? 
                          <div className="relative h-200">
                              <Image
                                fill
                                sizes="100"
                                src={item?.imageURL.url2}
                                alt="rasm"
                                priority
                                className="rounded overflow-hidden"
                              />                               
                          </div> 
                          :
                          <div className="relative h-200 border-2 border-slate-500 rounded font-bold text-lg flex items-center justify-center text-slate-600">Rasm yuklamagansiz</div>                                              
                        }
                        {item.imageURL?.url3 ? 
                          <div className="relative h-200">
                              <Image
                                fill
                                sizes="100"
                                src={item?.imageURL.url3}
                                alt="rasm"
                                priority                                
                                className="rounded overflow-hidden"
                              />                    
                          </div>
                          : 
                          <div className="relative h-200 border-2 border-slate-500 rounded font-bold text-lg flex items-center justify-center text-slate-600">Rasm yuklamagansiz</div>                                              
                        }
                  </div>

                  <div className="mt-20 flex justify-around w-80% mx-auto">
                  <Link href={`our-service/update/${item._id}`}                      
                      className="bg-green-500 no-underline py-2 px-5 rounded text-white font-medium tracking-wider"
                    >
                      Update
                    </Link>

                    <button
                      onClick={(prev) => {
                        setIdAndUrlForDelete({
                          ...prev,
                          id: item._id,
                          url1: item.imageURL.url1 ? item.imageURL.url1 : null,
                          url2: item.imageURL.url2 ? item.imageURL.url2 : null,
                          url3: item.imageURL.url3 ? item.imageURL.url3 : null,
                        }),
                          setAreYouSureDelete(true),
                          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                      }}
                      className="bg-red-500 py-2 px-5 rounded text-white font-medium tracking-wider"
                    >
                      Delete
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurService;
