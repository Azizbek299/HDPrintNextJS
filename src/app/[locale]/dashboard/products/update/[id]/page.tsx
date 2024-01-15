"use client"

import { UpdateProduct, getOneProduct } from '@/actions/actions';
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
const ProductUpdate = () => {

  const { edgestore } = useEdgeStore();
  const router = useRouter()
  const path = usePathname();
  const url = path.split("/");
  let productID = url[5];





  const [productData, setProductData] = useState<any>();  //  Serverdan ma'lumot tortib shu erga quyamiz
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

        productData.imageURL = res
   
        let ress = await UpdateProduct(productData._id, productData) as any 
  
        if (ress.status == 200) {
          setIsLoading(false);          
          e.target.reset();
          setFile1(null);
          setFile2(null);
          setFile3(null);
          setnewFile1(null);
          setnewFile2(null);
          setnewFile3(null);

          toast.success("Ma'lumotingiz yangilandi ", {
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
            router.push(`/${url[1]}/dashboard/products/`)
          }, 1000);
        }

      }
  }






  useEffect(() => {
    setIsLoading(true);
    async function getData() {

      let data = await getOneProduct(productID);
      let {slug, __v, ...others} = data?.result
      setProductData(others);

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
            {productData?.imageURL?.url1 && 
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
              {productData?.imageURL?.url2 && 
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
            {productData?.imageURL?.url3 && 
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

                {/* =========   Narhi   ======= */}
                <div className="">                    
                  <input 
                    type="number" 
                    name="price" 
                    placeholder="Mahsulot narxi" 
                    className="px-3 py-1 rounded-sm outline-none font-light tracking-wider  w-full"
                    required
                    value={productData?.price}
                    onChange={(e) => setProductData({...productData, price:e.target.value})
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
                          value={productData?.productTime}
                          onChange={(e) => setProductData({...productData, productTime:e.target.value})}
                        />
                </div>

        


              <div className="grid grid-cols-1 gap-x-20 gap-y-30">
                    {/* =========================   O'zbekcha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                          O'zbekcha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.title}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.uz?.description}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character1}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character2}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character3}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character4}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character5}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character6}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.uz?.character7}
                            onChange={(e) => setProductData({ ...productData, uz: { ...productData.uz, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>

                     {/* =========================   Ruscha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                          Ruscha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.title}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.ru?.description}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character1}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character2}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character3}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character4}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character5}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character6}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.ru?.character7}
                            onChange={(e) => setProductData({ ...productData, ru: { ...productData.ru, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>

                     {/* =========================   Xitoycha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                            Xitoycha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.title}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.cn?.description}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character1}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character2}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character3}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character4}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character5}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character6}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.cn?.character7}
                            onChange={(e) => setProductData({ ...productData, cn: { ...productData.cn, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>

                      {/* =========================   Inglizcha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                            Inglizcha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.title}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.en?.description}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character1}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character2}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character3}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character4}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character5}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character6}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.en?.character7}
                            onChange={(e) => setProductData({ ...productData, en: { ...productData.en, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>

                      {/* =========================   Turkcha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                            Turkcha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.title}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.tr?.description}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character1}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character2}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character3}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character4}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character5}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character6}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.tr?.character7}
                            onChange={(e) => setProductData({ ...productData, tr: { ...productData.tr, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>
                      

                      {/* =========================   Koreyscha   ========================= */}
                      <div className="">
                        <div className="text-center font-normal tracking-wider text-lg py-3">
                            Koreyscha tarjimasi
                        </div>
                        <div className="flex flex-col gap-y-8">
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.title}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, title: e.target.value } })}                         
                          />

                          <textarea
                            name=''
                            placeholder={` Mahsulot sifati haqida ...`}
                            className="px-3 py-1 rounded-sm outline-none h-200 font-light"
                            value={productData?.kr?.description}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, description: e.target.value } })} 
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character1}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character1: e.target.value } })}                         
                          />
                          
                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character2}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character2: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character3}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character3: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character4}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character4: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character5}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character5: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character6}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character6: e.target.value } })}                         
                          />

                          <input
                            type="text"
                            name=''
                            placeholder="Mahsulot nomi ..."
                            className="px-3 py-1 rounded-sm outline-none font-light tracking-wide"
                            value={productData?.kr?.character7}
                            onChange={(e) => setProductData({ ...productData, kr: { ...productData.kr, character7: e.target.value } })}                         
                          />

                        </div>
                      </div>

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

export default ProductUpdate