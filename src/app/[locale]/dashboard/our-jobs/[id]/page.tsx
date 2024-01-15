"use client";

import { SingleImageDropzone } from "@/components/ImageUploadAndDelete/single-image-dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { Oswald } from "next/font/google";
import React, { useState } from "react";
import { createOurJob } from "@/actions/actions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { usePathname } from "next/navigation";

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

const OurJobsOne = () => {
  const { edgestore } = useEdgeStore();
  const path = usePathname();
  const url = path.split("/");
  let slug = url[3];

  const [file, setFile] = React.useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState<any>({});
  let [colorForSpinner, setColorForSpinner] = useState("#4834d4");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: any) {
    e.preventDefault();

    if (file === null) {
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
      if (file) {
        setIsLoading(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        const res = await edgestore.myPublicImages.upload({ file });
        //  save your data here for use
        //  setUrl({url: res.url});
        // you can run some server action or api here
        // to add the necessary data to your database
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

          imageURL: res.url,
          categories: slug,
        };

        let ress = await createOurJob(data);

        if (ress.status == 201) {
          setIsLoading(false);
          setDataList({});
          e.target.reset();
          setFile(null);

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

          <div className="mb-70">
            <SingleImageDropzone
              width={400}
              height={300}
              value={file as any}
              className="mx-auto bg-slate-600"
              onChange={(file) => {
                setFile(file);
              }}
            />
          </div>

          <div className={`${oswald.className}`}>
            <div className="">
              <form onSubmit={onSubmit}>
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

export default OurJobsOne;
