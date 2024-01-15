"use client";

import { SingleImageDropzone } from "@/components/ImageUploadAndDelete/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { Oswald } from "next/font/google";
import { createOurService } from "@/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { usePathname } from "next/navigation";
import React, { useState } from "react";





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






const OurServiceCreate = () => {


  const { edgestore } = useEdgeStore();
  const path = usePathname();
  const url = path.split("/");
  let categorySlug = url[3];


  const [file1, setFile1] = React.useState<any>();
  const [file2, setFile2] = React.useState<any>();
  const [file3, setFile3] = React.useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState<any>({});
  const [colorForSpinner, setColorForSpinner] = useState("#4834d4");
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

    if (
      typeof dataList.uztext !== "string" ||
      dataList.uztext.length === 0 ||
      typeof dataList.rutext !== "string" ||
      dataList.rutext.length === 0 ||
      typeof dataList.cntext !== "string" ||
      dataList.cntext.length === 0 ||
      typeof dataList.entext !== "string" ||
      dataList.entext.length === 0 ||
      typeof dataList.trtext !== "string" ||
      dataList.trtext.length === 0 ||
      typeof dataList.krtext !== "string" ||
      dataList.krtext.length === 0
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setErr("Maydonlarni hech qaysi biri bo'sh bulmasligi kerak !");
      setTimeout(() => {
        setErr(null);
      }, 3000);
    } else {

      if (file1 || file2 || file3 ) {
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        let res = [] as any

        if(file1){
          let file = file1
          const res1 = await edgestore.myPublicImages.upload({ file });
          res.push(res1.url)
        }
    
        if(file2){
          let file = file2
          const res2 = await edgestore.myPublicImages.upload({ file });
          res.push(res2.url)
        }

        if(file3){
          let file = file3
          const res3 = await edgestore.myPublicImages.upload({ file});
          res.push(res3.url)
        }
       
        

        let data = {
          uz: {
            title: dataList.uztext,
            describe: dataList.uztextarea
          },
          ru: {
            title: dataList.rutext,
            describe: dataList.rutextarea 
          },
          cn: {
            title: dataList.cntext,
            describe: dataList.cntextarea
          },
          en: {
            title: dataList.entext,
            describe: dataList.entextarea 
          },
          tr: {
            title: dataList.trtext,
            describe: dataList.trtextarea 
          },
          kr: {
            title: dataList.krtext,
            describe: dataList.krtextarea 
          },

          imageURL: res ,
          categories: categorySlug,
        };


        let ress = await createOurService(data) as any 
  
        if (ress.status == 201) {
          setIsLoading(false);
          setDataList({});
          e.target.reset();
          setFile1(null);
          setFile2(null);
          setFile3(null);

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
        }

      }
    }
  }

  if (isLoading) {
    return (
      <div className="mt-50">
        <LoadingSpinner color={colorForSpinner} loading={isLoading} />
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

          <div className="mb-70 grid grid-cols-3">
            <div className="file1">
                <SingleImageDropzone
                  width={250}
                  height={300}
                  value={file1 as any}
                  className="mx-auto bg-slate-600"
                  onChange={(file1) => {setFile1(file1)}}
                />

            </div>
            <div className="file2">
                <SingleImageDropzone
                  width={250}
                  height={300}
                  value={file2 as any}
                  className="mx-auto bg-slate-600"
                  onChange={(file2) => {setFile2(file2)}}
                />
            </div>
            <div className="file3">
                <SingleImageDropzone
                  width={250}
                  height={300}
                  value={file3 as any}
                  className="mx-auto bg-slate-600"
                  onChange={(file3) => {setFile3(file3)}}
                />
            </div>
          </div>

          <div className={`${oswald.className}`}>
            <div className="">
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 gap-x-20 gap-y-30">
                 
                {dataa?.map((item) => {
                    return (
                      <div className="" key={item.title}>
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                          {item.title} tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name={`${item.forName}text`}
                            placeholder='title ...'
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
                    );
                  })}
             

                </div>

                <div className="text-center mt-60">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-5 rounded-md text-lg tracking-wider"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCreate;
