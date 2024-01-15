"use client";

import { SingleImageDropzone } from "@/components/ImageUploadAndDelete/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { Oswald } from "next/font/google";
import { createProduct } from "@/actions/actions";
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





const ProductCreate = () => {
  const { edgestore } = useEdgeStore();
  const path = usePathname();
  const url = path.split("/");
  let categorySlug = url[3];

  const [file1, setFile1] = React.useState<any>(null);
  const [file2, setFile2] = React.useState<any>(null);
  const [file3, setFile3] = React.useState<any>(null);
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
      typeof dataList.uztitle !== "string" || dataList.uztitle.length === 0 ||
      typeof dataList.rutitle !== "string" || dataList.rutitle.length === 0 ||
      typeof dataList.cntitle !== "string" || dataList.cntitle.length === 0 ||
      typeof dataList.entitle !== "string" || dataList.entitle.length === 0 ||
      typeof dataList.trtitle !== "string" || dataList.trtitle.length === 0 ||
      typeof dataList.krtitle !== "string" || dataList.krtitle.length === 0
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setErr("Maxsulot nomi hech qaysi biri bo'sh bulmasligi kerak !");
      setTimeout(() => {
        setErr(null);
      }, 3000);
    } else {
      if (file1 || file2 || file3) {
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        let res = [] as any;

        if (file1) {
          let file = file1;
          const res1 = await edgestore.myPublicImages.upload({ file });
          res.push(res1.url);
        }

        if (file2) {
          let file = file2;
          const res2 = await edgestore.myPublicImages.upload({ file });
          res.push(res2.url);
        }

        if (file3) {
          let file = file3;
          const res3 = await edgestore.myPublicImages.upload({ file });
          res.push(res3.url);
        }

        let data = {
          uz: {
            title: dataList.uztitle,
            description: dataList.uzdescription,
            character1: dataList.uzcharacter1,
            character2: dataList.uzcharacter2,
            character3: dataList.uzcharacter3,
            character4: dataList.uzcharacter4,
            character5: dataList.uzcharacter5,
            character6: dataList.uzcharacter6,
            character7: dataList.uzcharacter7,
          },
          ru: {
            title: dataList.rutitle,
            description: dataList.rudescription,
            character1: dataList.rucharacter1,
            character2: dataList.rucharacter2,
            character3: dataList.rucharacter3,
            character4: dataList.rucharacter4,
            character5: dataList.rucharacter5,
            character6: dataList.rucharacter6,
            character7: dataList.rucharacter7,
          },
          cn: {
            title: dataList.cntitle,
            description: dataList.cndescription,
            character1: dataList.cncharacter1,
            character2: dataList.cncharacter2,
            character3: dataList.cncharacter3,
            character4: dataList.cncharacter4,
            character5: dataList.cncharacter5,
            character6: dataList.cncharacter6,
            character7: dataList.cncharacter7,
          },
          en: {
            title: dataList.entitle,
            description: dataList.endescription,
            character1: dataList.encharacter1,
            character2: dataList.encharacter2,
            character3: dataList.encharacter3,
            character4: dataList.encharacter4,
            character5: dataList.encharacter5,
            character6: dataList.encharacter6,
            character7: dataList.encharacter7,
          },
          tr: {
            title: dataList.trtitle,
            description: dataList.trdescription,
            character1: dataList.trcharacter1,
            character2: dataList.trcharacter2,
            character3: dataList.trcharacter3,
            character4: dataList.trcharacter4,
            character5: dataList.trcharacter5,
            character6: dataList.trcharacter6,
            character7: dataList.trcharacter7,
          },
          kr: {
            title: dataList.krtitle,
            description: dataList.krdescription,
            character1: dataList.krcharacter1,
            character2: dataList.krcharacter2,
            character3: dataList.krcharacter3,
            character4: dataList.krcharacter4,
            character5: dataList.krcharacter5,
            character6: dataList.krcharacter6,
            character7: dataList.krcharacter7,
          },

          price:dataList.price,
          imageURL: res,
          productTime:dataList.productTime,
          categories: categorySlug,
        };

        let ress = await createProduct(data) as any;

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
                onChange={(file1) => {
                  setFile1(file1);
                }}
              />
            </div>
            <div className="file2">
              <SingleImageDropzone
                width={250}
                height={300}
                value={file2 as any}
                className="mx-auto bg-slate-600"
                onChange={(file2) => {
                  setFile2(file2);
                }}
              />
            </div>
            <div className="file3">
              <SingleImageDropzone
                width={250}
                height={300}
                value={file3 as any}
                className="mx-auto bg-slate-600"
                onChange={(file3) => {
                  setFile3(file3);
                }}
              />
            </div>
          </div>

          <div className={`${oswald.className}`}>
            <div className="">
              <form onSubmit={onSubmit}>

                {/* =========   Narhi   ======= */}
                <div className="">
                  <input 
                    type="number" 
                    name="price" 
                    placeholder="Mahsulot narxi, raqam bilan" 
                    className="px-3 py-1 rounded-sm outline-none font-light tracking-wider w-full"                 
                    // value={dataList?.price}
                    onChange={(e) =>
                      setDataList((prevData: any) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    />
                </div>
                
                {/* =========   Mahsulot tayor bulish kuni   ======= */}
                <div className="mt-20">
                  <input 
                    type="number" 
                    name="productTime" 
                    placeholder="Mahsulot necha kunda tayor buladi , raqam bilan" 
                    className="px-3 py-1 rounded-sm outline-none font-light tracking-wider w-full"
                    // value={dataList?.price}
                    onChange={(e) =>
                      setDataList((prevData: any) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                    />
                </div>

        


                <div className="grid grid-cols-1 gap-x-20 gap-y-30">                  
                  {dataa?.map((item, index) => {
                    return (
                      <div className="" key={item.title}>
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                          {item.title} tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name={`${item.forName}title`}                            
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            // value={dataList[`${item.forName}text`]}
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />

                          <textarea
                            name={`${item.forName}description`}
                            placeholder={`${item.forName}     Mahsulot haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />

                          <input
                            type="text"
                            name={`${item.forName}character1`}
                            placeholder={`1) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />
                          <input
                            type="text"
                            name={`${item.forName}character2`}
                            placeholder={`2) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />
                          <input
                            type="text"
                            name={`${item.forName}character3`}
                            placeholder={`3) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />
                          <input
                            type="text"
                            name={`${item.forName}character4`}
                            placeholder={`4) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />
                          <input
                            type="text"
                            name={`${item.forName}character5`}
                            placeholder={`5) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />
                          <input
                            type="text"
                            name={`${item.forName}character6`}
                            placeholder={`6) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
                            onChange={(e) =>
                              setDataList((prevData: any) => ({
                                ...prevData,
                                [e.target.name]: e.target.value,
                              }))
                            }
                          />

                          <input
                            type="text"
                            name={`${item.forName}character7`}
                            placeholder={`7) ${item.forName}     Mahsulot qulayligi haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none font-light"
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

export default ProductCreate;
