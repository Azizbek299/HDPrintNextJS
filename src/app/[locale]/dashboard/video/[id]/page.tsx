"use client";

import { Oswald } from "next/font/google";
import React, { useState } from "react";
import { createVideo } from "@/actions/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { usePathname } from "next/navigation";
import Link from "next/link";

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

const VideoOne = () => {
  const path = usePathname();
  const url = path.split("/");
  let slug = url[3];

  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState<any>({});
  let [colorForSpinner, setColorForSpinner] = useState("#4834d4");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: any) {
    e.preventDefault();

    if (
      typeof dataList.url !== "string" ||
      dataList.url.length === 0 ||
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

      //  Юзер Youtube дан <frame/> ни туликлигича input га куяпти ундан
      //  биз узимизга керакли  url ни ажратиб оляпмиз
      const srcRegex = /src="([^"]*)"/;
      const match = dataList.url.match(srcRegex);
      if (match) {
        const iframeSrc = match[1];
        dataList.url = iframeSrc;
      }

      if (dataList.url) {
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        let data = {
          uz: {
            title: dataList.uztext,
          },
          ru: {
            title: dataList.rutext,
          },
          cn: {
            title: dataList.cntext,
          },
          en: {
            title: dataList.entext,
          },
          tr: {
            title: dataList.trtext,
          },
          kr: {
            title: dataList.krtext,
          },

          imageURL: dataList.url,
          categories: slug,
        };

        let ress = await createVideo(data);


        if (ress.status == 201) {
          setIsLoading(false);
          setDataList({});
          e.target.reset();

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

          <div className={`${oswald.className}`}>
              <div className="font-light">                
                  Video link yuklash uchun ushbu videoni 17 chi sekundigacha kurasiz  &nbsp;	&nbsp;	&nbsp;	
                  <Link href='https://www.youtube.com/watch?v=w_dil0uYST8&ab_channel=InsiderTech' target="_blank">
                    Ushbu videoni kuring
                  </Link>
                  <br/>
                  So'ng uzizga kerakli video sahifaga utib <br/> 
                  Shu ko'piya qilgan &nbsp;	 <span className="text-red-500">embed</span> &nbsp;		  kodizni shu pastdagi maydonga quyib saqlaysiz                     
              </div>
            <div className="">
              <form onSubmit={onSubmit}>
                {/*   ========    url input  for video   ========     */}
                <div className="my-70">
                  <input
                    type="text"
                    name={`url`}
                    className="px-3 py-2 rounded-sm outline-none w-full"
                    placeholder="Youtube url link"
                    onChange={(e) =>
                      setDataList((prevData: any) => ({
                        ...prevData,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-x-20 gap-y-30">
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
                            className="px-3 py-1 rounded-sm outline-none"
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

export default VideoOne;
