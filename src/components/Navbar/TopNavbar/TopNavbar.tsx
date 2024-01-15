"use client"

import Image from "next/image";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { Roboto_Condensed, Oswald } from "next/font/google";
import { MdOutlinePhoneIphone } from "react-icons/md";
import Language from "./Language";
import { useState } from "react";
import { sendMessageToPhone } from "@/actions/actions";
import { MdOutlineCancel } from "react-icons/md";
import { Prev } from "react-bootstrap/esm/PageItem";


const roboto = Roboto_Condensed({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });



const TopNavbar = (props:any) => {

  const [modal, setModal] = useState(false)
  const [userName, setUserName] = useState<any>('')
  const [phoneNumber, setPhoneNumber] = useState<any>(998)
  const [errorUserName, setErrorUserName] = useState<any>()
  const [errorPhoneNumber, setErrorPhoneNumber] = useState<any>()

  async function sendMessage() {
    if(userName.length > 15){
      setErrorUserName(props?.text4)
      setTimeout(() => {
        setErrorUserName('')  
        setUserName('')      
      }, 2000);
    }
    else if(phoneNumber.length > 13){
      setErrorPhoneNumber(props?.text5)
      setTimeout(() => {
        setErrorPhoneNumber('')
        setPhoneNumber(998)
      }, 2000);
      
    }

   
      let data = `Mening ismim ${userName}   
shu nomerga  +${phoneNumber}   
telefon qilib yuboring `
      setModal(false)
      let r = await sendMessageToPhone(data)    
      setPhoneNumber(998)
      setUserName('')      
  }


  return (
    <div className="h-112 mx-90 pt-20">
      <div className="flex items-center">

        <div className="flex-auto w-30 ">
          <Link href={"/"} className="">
            <Image
              src={"/HDprint.png"}
              alt="logo"
              height="200"
              width="200"
              className="inline-block"
              sizes="100"
              priority
            />
          </Link>
        </div>


        <div className="flex flex-auto w-400 items-center justify-end ">

          <div className="flex">
            <FiPhoneCall className={`h-30 w-30 text-red-400`} />
            <span className={`${roboto.className} font-medium text-xl ml-25`}>
              <a href="tel:+998939108874" className="no-underline text-black">+998 93 910 8874</a>
            </span>
          </div>

          {modal && 
              <div className="fixed bg-slate-200 top-0 left-0 h-screen w-full z-30">

                <div className={`${roboto.className} relative w-50% mx-auto mt-70`}>
                    <span onClick={()=> setModal(false)} className="absolute -right-40 -top-30 text-4xl cursor-pointer"><MdOutlineCancel /></span>
                    <div className=" bg-white rounded-xl p-40">
                        <div className="text-slate-700 text-center text-2xl font-bold">{props?.text1}</div>
                        <div className=" flex flex-col mt-20" >
                          {errorUserName && <div className="text-red-500">{errorUserName}</div>}
                          <label className="ml-5 text-slate-600" htmlFor="userName">{props?.text2}</label>
                          <input onChange={(e:any)=> setUserName(e.target.value)} className="py-2 px-3 rounded-md border-1 border-slate-400 outline-slate-300" value={userName} type="text" name="userName" id="userName"/>
                        </div>
                        <div className=" flex flex-col mt-20">
                          {errorPhoneNumber && <div className="text-red-500">{errorPhoneNumber}</div>}
                          <label className="ml-5 text-slate-600" htmlFor="phoneNumber">{props?.text3}</label>
                          <input onChange={(e) => setPhoneNumber(e.target.value)} className="py-2 px-3 rounded-md border-1 border-slate-400 outline-slate-300" value={phoneNumber} type="number" name="phoneNumber" id="phoneNumber" />
                        </div>
                        <div className="mt-50 text-center">
                            <button onClick={()=> sendMessage()} className="bg-blue-600 text-white text-lg px-5 py-2 rounded">{props?.text6}</button>
                        </div>
                    </div>
                </div>
              </div>
            }

          <div onClick={()=> setModal(true)} className="flex items-center rounded-md ml-25 py-11 cursor-pointer" style={{border:'2px solid #ff7979'}}>
            <span>
              <MdOutlinePhoneIphone className="text-red-400 h-30 w-30 ml-15" />
            </span>
            <span
              className={`${oswald.className} ml-8 text-sm tracking-widest mr-15 text-red-400`}
            >
              {props?.obratniyZvanok}
            </span>
          </div>


          <div className="">
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
