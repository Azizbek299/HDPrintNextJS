"use client";

import { Oswald } from "next/font/google";
import { BiLogoTelegram } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, usePathname } from "@/navigation";
import { useEffect, useState } from "react";

const oswald = Oswald({ subsets: ["latin"] });

interface IMenu {
  main: string;
  about: string;
  service: string;
  portfolio: string;
  price: string;
  contacts: string;
}





const NavMenuDropDown = (props: IMenu) => {

  const [navbar, setNavbar] = useState(false)
  
  const path = usePathname();
  let activeMenu = path.split("/")[1];


  
// ===========    Экранни кимирлаганини кузатади


useEffect(()=> {

  function changeBackgound() {
    if(window.scrollY >= 150){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  //  Экран Браузер кимирласа
  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener('scroll', changeBackgound)
  }

}, [])   




 



  return (
    <div className={`nav-menu ${navbar ? 'active mx-auto ' : ''} h-65 mb-15 `}>
      <div className="flex pt-17 ">
        <div className="w-3/4 relative  ">
          <ul
            className={`${oswald.className} bottom-Nav text-blue-500 flex justify-between tracking-wider text-[15px] font-normal`}
          >
            <li className="">
              <Link
                className={`${activeMenu == "/" ? "activeMenu" : ""}`}
                href={"/"}
              >
                {props.main}
              </Link>
            </li>
            <li>
              <Link
                className={`${activeMenu == "about" ? "activeMenu" : ""}`}
                href={"/about"}
              >
                {props.about}
              </Link>
            </li>
            <li>
              <Link
                className={`${activeMenu == "service" ? "activeMenu" : ""}`}
                href={"/service"}
              >
                {props.service}
              </Link>
            </li>
            <li>
              <Link
                className={`${activeMenu == "portfolio" ? "activeMenu" : ""}`}
                href={"/portfolio"}
              >
                {props.portfolio}
              </Link>
            </li>
            <li>
              <Link
                className={`${activeMenu == "price" ? "activeMenu" : ""}`}
                href={"/price"}
              >
                {props.price}
              </Link>
            </li>
            <li>
              <Link
                className={`${activeMenu == "contacts" ? "activeMenu" : ""}`}
                href={"/contacts"}
              >
                {props.contacts}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-around items-center w-1/5 text-base">
          <span>
            <Link
              href={"https://t.me/hdprintreklama"}
              aria-label="Telegram"
              target="_blank"
            >
              <BiLogoTelegram className="text-blue-600 h-30 w-30" />
            </Link>{" "}
          </span>
          <span>
            <Link
              href={"https://www.youtube.com"}
              aria-label="Youtube"
              target="_blank"
            >
              <GrYoutube className="text-red-500 h-30 w-30" />
            </Link>
          </span>
          <span>
            <Link
              href={"https://www.facebook.com"}
              aria-label="Facebook"
              target="_blank"
            >
              <FaFacebookSquare className="text-blue-600 h-30 w-30" />
            </Link>
          </span>
          <span>
            <Link
              href={"https://www.instagram.com"}
              aria-label="Instagram"
              target="_blank"
            >
              <RiInstagramFill className="text-red-600 h-30 w-30" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavMenuDropDown;
