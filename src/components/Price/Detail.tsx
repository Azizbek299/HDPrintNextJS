"use client";
import { getOneProductForUser } from "@/actions/actions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import { MdOutlineCancel } from "react-icons/md";
import { usePathname } from "next/navigation";
import { Roboto_Condensed } from "next/font/google";

const oswald = Roboto_Condensed({
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Detail = (props: any) => {
  const [products, setProducts] = useState<any>();
  const [isLoading, setisLoading] = useState(false);
  const [imgs, setImgs] = useState<any>();
  const [modal, setModal] = useState(false);

  const path = usePathname();
  const url = path.split("/");

  useEffect(() => {
    async function getData() {
      setisLoading(true);
      let data = await getOneProductForUser(props?.params?.id);
      setProducts(data.result);
      if (data.result.imageURL?.url1) {
        setImgs(data.result.imageURL?.url1);
      } else if (data.result.imageURL?.url2) {
        setImgs(data.result.imageURL?.url2);
      } else if (data.result.imageURL?.url3) {
        setImgs(data.result.imageURL?.url3);
      }
      setisLoading(false);
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
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className={oswald.className}>
      <div className=" grid grid-cols-2">
        <div className="col-span-1">
          <div className="">
            {modal && (
              <div
                onClick={() => setModal(false)}
                className={`bg-white fixed h-screen w-full left-0 top-0 z-30`}
              >
                <Image
                  src={imgs}
                  alt="rasm"
                  fill
                  sizes="100"
                  className="object-contain rounded overflow-hidden pt-30 pb-10"
                />
                <span className="absolute top-10 right-25 text-4xl cursor-pointer">
                  <MdOutlineCancel />
                </span>
              </div>
            )}

            <div
              onClick={() => setModal(true)}
              className="relative h-350 cursor-pointer"
            >
              {products?.imageURL && (
                <Image
                  src={imgs}
                  alt="rasm"
                  fill
                  sizes="100"
                  className="object-contain rounded overflow-hidden"
                />
              )}
            </div>

            <div className="my-15">
              <div className="flex gap-x-10 w-50%">
                {products?.imageURL?.url1 && (
                  <div
                    style={{ height: "70px", width: "100px" }}
                    className="relative cursor-pointer"
                    onClick={() => setImgs(products?.imageURL?.url1)}
                  >
                    <Image
                      src={products?.imageURL?.url1}
                      alt="rasm"
                      fill
                      sizes="100"
                      className="object-center rounded-sm overflow-hidden"
                    />
                  </div>
                )}
                {products?.imageURL?.url2 && (
                  <div
                    style={{ height: "70px", width: "100px" }}
                    className="relative cursor-pointer"
                    onClick={() => setImgs(products?.imageURL?.url2)}
                  >
                    <Image
                      src={products?.imageURL?.url2}
                      alt="rasm"
                      fill
                      sizes="100"
                      className="object-center rounded-sm overflow-hidden"
                    />
                  </div>
                )}

                {products?.imageURL?.url3 && (
                  <div
                    style={{ height: "70px", width: "100px" }}
                    className="relative cursor-pointer"
                    onClick={() => setImgs(products?.imageURL?.url3)}
                  >
                    <Image
                      src={products?.imageURL?.url3}
                      alt="rasm"
                      fill
                      sizes="100"
                      className="object-center rounded-sm overflow-hidden"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="pl-30 ">
          <div className="text-[24px] font-normal uppercase">
            {products?.[`${url[1]}`]?.title}
          </div>
          <div className="mt-20 font-light">
            {products?.price && (
              <>
                <span className="mr-10">{products?.price}</span>
                <span>UZS</span>
              </>
            )}
          </div>
          {products?.[`${url[1]}`]?.description && (
            <div className="my-20 font-light tracking-wide text-[14px]">
              {products?.[`${url[1]}`]?.description}
            </div>
          )}
          {(products?.[`${url[1]}`]?.character1 ||
            products?.[`${url[1]}`]?.character2 ||
            products?.[`${url[1]}`]?.character3 ||
            products?.[`${url[1]}`]?.character4 ||
            products?.[`${url[1]}`]?.character5 ||
            products?.[`${url[1]}`]?.character6 ||
            products?.[`${url[1]}`]?.character7) && (
            <div className="font-light tracking-wide text-[14px]">
              {props?.osobennosti}:
            </div>
          )}
          <ul
            className="pl-30 font-light tracking-wide text-[14px]"
            style={{ listStyleType: "disc" }}
          >
            {products?.[`${url[1]}`]?.character1 && (
              <li>{products?.[`${url[1]}`]?.character1}</li>
            )}
            {products?.[`${url[1]}`]?.character2 && (
              <li>{products?.[`${url[1]}`]?.character2}</li>
            )}
            {products?.[`${url[1]}`]?.character3 && (
              <li>{products?.[`${url[1]}`]?.character3}</li>
            )}
            {products?.[`${url[1]}`]?.character4 && (
              <li>{products?.[`${url[1]}`]?.character4}</li>
            )}
            {products?.[`${url[1]}`]?.character5 && (
              <li>{products?.[`${url[1]}`]?.character5}</li>
            )}
            {products?.[`${url[1]}`]?.character6 && (
              <li>{products?.[`${url[1]}`]?.character6}</li>
            )}
            {products?.[`${url[1]}`]?.character7 && (
              <li>{products?.[`${url[1]}`]?.character7}</li>
            )}
          </ul>
          {products?.productTime && (
            <div className="font-light tracking-wide text-[14px] mt-20">
              {props?.srokIzgorovleniya1} {products?.productTime}{" "}
              {props.srokIzgorovleniya2}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
