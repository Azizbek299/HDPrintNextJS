"use client";

import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import React from "react";




const CategoriesForDashboard = (props: any) => {
  const path = usePathname(); 
  const url = path.split('/')

  let s = decodeURI(url[3])

  // console.log('=============== path: ', s)

  return (
    <div className="overflow-y-scroll">
      <div className="col-start-1 col-span-3 py-15 pl-25 font-medium">
        {props?.category?.map((item: any) => {
          return (
            <div
              className={`categoryText my-2 w-90% rounded-md ${
                s === item.slug ? "activeLink" : ""
              }`}
              key={item._id}
            >
              <Link
                href={`/${url[2]}/${item.slug}`}
                replace={true}
                className={`no-underline text-blue-900`}
              >
                <div className="py-2 pl-20">{item.title}
                
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesForDashboard;
