"use client";

import { DeleteVideo, getVideo } from "@/actions/actions";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RingLoader } from "react-spinners";

const Video = () => {
  const [VideoData, setVideoData] = useState<any>([]);
  const [areYouSureDelete, setAreYouSureDelete] = useState(false);
  const [idAndUrlForDelete, setIdAndUrlForDelete] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  async function deleteVideo(id: string, imageURL: string) {
    setIsLoading(true);
    setAreYouSureDelete(false);

    await DeleteVideo(id);

    setVideoData(VideoData.filter((item: any) => item._id !== id));

    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      let data = await getVideo();
      setVideoData(data?.result);
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
                deleteVideo(idAndUrlForDelete.id, idAndUrlForDelete.url)
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
              href={"video/create"}
              className="py-3 px-5 relative  no-underline rounded bg-blue-600 text-white "
            >
              <span className="text-lg font-bold tracking-wider">Create</span>
              <span className="absolute top-11 right-20">
                <FaPlus className="inline-block" />
              </span>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-30 gap-y-70 my-70">
          {VideoData?.map((item: any) => {
            return (
              <div className="" key={item._id}>
                <div className="">
                    <div className="my-10 text-center text-lg font-semibold">
                      {item.uz.title}
                    </div>
                  <div className="h-300 rounded overflow-hidden">
                    
                    {/* ==============    frame for youtube   ============== */}
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.imageURL}
                      title="YouTube video player"                      
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="text-center mt-15">
                    <button
                      onClick={(prev) => {
                        setIdAndUrlForDelete({
                          ...prev,
                          id: item._id,
                          url: item.imageURL,
                        }),
                          setAreYouSureDelete(true),
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
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

export default Video;
