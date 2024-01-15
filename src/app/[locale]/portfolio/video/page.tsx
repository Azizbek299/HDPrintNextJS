"use client";

import { getVideoForUser } from "@/actions/actions";
import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

const page = () => {
  const [VideoData, setVideoData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      let data = await getVideoForUser();
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
        <ClockLoader
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

 

  return (
    <div>
      <div className="">
      
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
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
