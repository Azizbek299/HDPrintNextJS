"use client"

import { UpdateOurService, getOneOurService } from '@/actions/actions';
import { Oswald } from "next/font/google";
import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners';
import { useEdgeStore } from "@/lib/edgestore";
import { usePathname, useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { SingleImageDropzone } from '@/components/ImageUploadAndDelete/single-image-dropzone';





const oswald = Oswald({  
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

let dataa = [
  { title: "O'zbekcha", forName: "uz" },
  { title: "Ruscha", forName: "ru" },
  { title: "Xitoycha", forName: "cn" },
  { title: "Inglizcha", forName: "en" },
  { title: "Turkcha", forName: "tr" },
  { title: "Koreyscha", forName: "kr" },
];




// This page for update
const OurServiceUpdate = () => {

  const { edgestore } = useEdgeStore();
  const router = useRouter()
  const path = usePathname();
  const url = path.split("/");
  let ourServiceID = url[5];





  const [OurServiceData, setOurServiceData] = useState<any>();  //  Serverdan ma'lumot tortib shu erga quyamiz
  const [dataList, setDataList] = useState<any>({});
  const [file1, setFile1] = React.useState<any>(null);
  const [file2, setFile2] = React.useState<any>(null);
  const [file3, setFile3] = React.useState<any>(null);
  const [newFile1, setnewFile1] = React.useState<any>(null);
  const [newFile2, setnewFile2] = React.useState<any>(null);
  const [newFile3, setnewFile3] = React.useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);




  async function onSubmit(e: any) {
    e.preventDefault();

    if (file1 === null) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setErr(" Rasmsiz ma'lumot saqlash imkoni yuq !");
      setTimeout(() => {
        setErr(null);
      }, 3000);
    }


      if (file1 || file2 || file3 || newFile1 || newFile2 || newFile3 ) {
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        let res = {} as any

        if(newFile1 !== null){
          let file = newFile1          
          const res1 = await edgestore.myPublicImages.upload({ 
            file,
            options: {
              replaceTargetUrl: file1,
            },          
          });
    
          res.url1 = res1.url
        }
    
        if(newFile2 !== null){
          let file = newFile2
          const res2 = await edgestore.myPublicImages.upload({
            file,
            options: {
              replaceTargetUrl: file2,
            }, 
          });
          res.url2 = res2.url
        }

        if(newFile3 !== null){
          let file = newFile3
          const res3 = await edgestore.myPublicImages.upload({
            file,
            options: {
              replaceTargetUrl: file3,
            }, 
          });
          res.url3 = res3.url
        }                     


        let data = {
          uz: {
            title: dataList.uztext ? dataList.uztext : OurServiceData?.uz?.title,
            describe: dataList.uztextarea ? dataList.uztextarea : OurServiceData?.uz?.describe,
          },
          ru: {
            title: dataList.rutext ? dataList.rutext : OurServiceData?.ru?.title,
            describe: dataList.rutextarea ? dataList.rutextarea : OurServiceData?.ru?.describe,
          },
          cn: {
            title: dataList.cntext ? dataList.cntext : OurServiceData?.cn?.title,
            describe: dataList.cntextarea ? dataList.cntextarea : OurServiceData?.cn?.describe,
          },
          en: {
            title: dataList.entext ? dataList.entext : OurServiceData?.en?.title,
            describe: dataList.entextarea ? dataList.entextarea : OurServiceData?.en?.describe,
          },
          tr: {
            title: dataList.trtext ? dataList.trtext : OurServiceData?.tr?.title,
            describe: dataList.trtextarea ? dataList.trtextarea : OurServiceData?.tr?.describe, 
          },
          kr: {
            title: dataList.krtext ? dataList.krtext : OurServiceData?.kr?.title,
            describe: dataList.krtextarea ? dataList.krtextarea : OurServiceData?.kr?.describe, 
          },

          imageURL:res 
        
        };
        

   
        let ress = await UpdateOurService(OurServiceData._id, data) as any 
  
        if (ress.status == 200) {
          setIsLoading(false);
          setDataList({});
          e.target.reset();
          setFile1(null);
          setFile2(null);
          setFile3(null);
          setnewFile1(null);
          setnewFile2(null);
          setnewFile3(null);

          toast.success("Ma'lumotingiz saqlandi", {
            position: "top-right",
            autoClose: 9000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {            
            router.push(`/${url[1]}/dashboard/our-service/`)
          }, 2000);
        }

      }
  }






  useEffect(() => {
    setIsLoading(true);
    async function getData() {

      let data = await getOneOurService(ourServiceID);
      let {categories, slug, __v, ...others} = data?.result
      setOurServiceData(others);

      setFile1(data?.result?.imageURL?.url1)
      setFile2(data?.result?.imageURL?.url2)
      setFile3(data?.result?.imageURL?.url3)
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


  if (err) {
    return (
      <div className="mt-30 text-center">
        <div className="">
          <div className="font-bold text-red-500 text-3xl">{err}</div>
        </div>
      </div>
    );
  }




  return (
    <div className="">
    <div className="mb-50">
      <div className="">
        <ToastContainer />

        <div className="my-70 grid grid-cols-3 ">
          <div className="file1">
              <SingleImageDropzone
                width={250}
                height={300}
                value={newFile1 ? newFile1 : file1}
                className="mx-auto bg-slate-600"
                onChange={(file1) => {setnewFile1(file1)}}
              />
            {OurServiceData?.imageURL?.url1 && 
            <div 
            className='text-red-500 text-sm text-center'>
              Rasmni uzgartirish uchun ustiga bosing
            </div>
            }

          </div>
          <div className="file2 ">
              <SingleImageDropzone
                width={250}
                height={300}
                value={newFile2 ? newFile2 : file2}
                className="mx-auto bg-slate-600"
                onChange={(file2) => {setnewFile2(file2)}}
              />
              {OurServiceData?.imageURL?.url2 && 
            <div 
            className='text-red-500 text-sm text-center'>
              Rasmni uzgartirish uchun ustiga bosing
            </div>
            }
          </div>
          <div className="file3 ">
              <SingleImageDropzone
                width={250}
                height={300}
                value={newFile3 ? newFile3 : file3}
                className="mx-auto bg-slate-600"
                onChange={(file3) => {setnewFile3(file3)}}
              />
            {OurServiceData?.imageURL?.url3 && 
            <div 
            className='text-red-500 text-sm text-center'>
              Rasmni uzgartirish uchun ustiga bosing
            </div>
            }
              
          </div>
        </div>


        <div className={`${oswald.className}`}>
          <div className="">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-x-20 gap-y-30">

                  {dataa?.map((item, index)=> {
                    return(
                      <div className="" key={index}>
                          <div className="text-center font-normal tracking-wider text-lg py-3">
                          {item.title} tarjimasi                             
                          </div>
                          <div className="flex flex-col gap-y-8">        

                            {dataList[`${dataa[index].forName}text`]?.length <= 2 ?  
                             <div className='text-red-600'>
                                <div className="">
                                  Maydon bo'sh bulishi mumkin emas !
                                </div>
                                <div className="">
                                    Oldin yangi so'zni yozib , &nbsp; so'ng keraksiz eski suzni o'chiring
                                </div>
                              </div> : ''
                            }                                        

                            <input
                              type="text"
                              name={`${item.forName}text`}
                              placeholder="title ..."
                              value={dataList[`${dataa[index].forName}text`] ? dataList[`${dataa[index].forName}text`] : OurServiceData?.[`${dataa[index].forName}`]?.title}
                              className="px-3 py-1 rounded-sm outline-none font-light"
                              onChange={(e) => 
                                setDataList((prevData: any) => ({
                                  ...prevData,
                                  [e.target.name]: e.target.value,
                                }))
                              }
                            />
                            
                            <textarea                            
                              name={`${item.forName}textarea`}
                              placeholder='describe ...'
                              value={dataList[`${dataa[index].forName}textarea`] ? dataList[`${dataa[index].forName}textarea`] : OurServiceData?.[`${dataa[index].forName}`].describe}
                              className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                              onChange={(e) =>
                                setDataList((prevData: any) => ({
                                  ...prevData,
                                  [e.target.name]: e.target.value,
                                }))
                              }
                            />
                            

                          </div>
                        </div>
                    )
                  })}                        

              </div>

              <div className="text-center mt-60">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-5 rounded-md text-lg tracking-wider"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OurServiceUpdate