"use client"
import {getOurJobByNameForUser} from '@/actions/actions';
import React, { useEffect, useState } from 'react'
import { ClockLoader } from 'react-spinners';
import ModalImagePopUp from "@/components/Modal/ModalImagePopUp";


// const ourServices = [
//   {
//     title: "Призматрон", 
//     img: [
//       {image:"/assets/our_service/prismatron1.jpg"},
//       {image: "/assets/our_service/prismatron2.jpg"},
//       {image:"/assets/our_service/trivision.jpg"},
//     ],
//   },
//   {
//     title: "Крышные установки", 
//     img: [
//       {image:"/assets/our_service/roof_reklama1.jpg"},
//       {image: "/assets/our_service/roof_reklama2.jpg"},
//       {image:"/assets/our_service/roof_reklama3.jpg"},
//     ],
//   },

//   {
//     title: "Вывески",  
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },

//   {
//     title: "Лайтбоксы",
//     img: [
//       {image:"/assets/our_service/lightbox1.jpg"},
//       {image: "/assets/our_service/lightbox2.jpeg"},
//       {image:"/assets/our_service/lightbox3.jpg"},
//     ],
//   },

//   {
//     title: "Панель кронштейн",
//     img: [
//       {image:"/assets/our_service/panel_kronshteyn1.jpg"},
//       {image: "/assets/our_service/panel_kronshteyn2.jpg"},
//       {image:"/assets/our_service/panel_kronshteyn3.jpg"},
//     ],
//   },

//   {
//     title: "Билборд",
//     img: [
//       {image:"/assets/our_service/bilbord1.jpg"},
//       {image: "/assets/our_service/bilbord2.jpg"},
//       {image:"/assets/our_service/bilbord3.jpg"},
//     ],
//   },

//   {
//     title: "Цифровые экрани",
//     img: [
//       {image:"/assets/our_service/tsivroviy_ekrani1.jpg"},
//       {image: "/assets/our_service/tsivroviy_ekrani2.jpg"},
//       {image:"/assets/our_service/tsivroviy_ekrani3.jpg"},
//     ],
//   },

//   {
//     title: "Брендирования авто",
//     img: [
//       {image:"/assets/our_service/brend-avto-1.jpg"},
//       {image: "/assets/our_service/brend-avto-2.jpg"},
//       {image:"/assets/our_service/brend-avto-3.jpg"},
//     ],
//   },

//   {
//     title: "Таблички",
//     img: [
//       {image:"/assets/our_service/tablichki1.jpg"},
//       {image: "/assets/our_service/tablichki2.jpg"},
//       {image:"/assets/our_service/tablichki3.jpeg"},
//     ],
//   },

//   {
//     title: "Световая панель",
//     img: [
//       {image:"/assets/our_service/svet_panel1.webp"},
//       {image: "/assets/our_service/svet_panel2.jpg"},
//       {image:"/assets/our_service/svet_panel3.jpg"},
//     ],
//   },

//   {
//     title: "Штендер",
//     img: [
//       {image:"/assets/our_service/shtender1.jpg"},
//       {image: "/assets/our_service/shtender2.webp"},
//       {image:"/assets/our_service/shtender3.jpeg"},
//     ],
//   },

//   {
//     title: "Объемные буквы",
//     img: [
//       {image:"/assets/our_service/obyemnyye-bukvy-1.jpg"},
//       {image: "/assets/our_service/obyemnyye-bukvy-2.webp"},
//       {image:"/assets/our_service/obyemnyye-bukvy-3.jpg"},
//     ],
//   },

//   {
//     title: "Стелла",
//     img: [
//       {image:"/assets/our_service/stella1.jpg"},
//       {image: "/assets/our_service/stella2.webp"},
//       {image:"/assets/our_service/stella3.jpeg"},
//     ],
//   },

//   {
//     title: "Печать на баннере",
//     img: [
//       {image:"/assets/our_service/pechat_bannere1.jpg"},
//       {image: "/assets/our_service/pechat_bannere2.jpg"},
//       {image:"/assets/our_service/pechat_bannere3.webp"},
//     ],
//   },

//   {
//     title: "Печать на оракале",
//     img: [
//       {image:"/assets/our_service/pechat_oracal_1.jpg"},
//       {image: "/assets/our_service/pechat_oracal_2.jpg"},
//       {image:"/assets/our_service/pechat_oracal_3.jpg"},
//     ],
//   },

//   {
//     title: "Печать на обои",
//     img: [
//       {image:"/assets/our_service/pechat-na-oboyakh-1.jpg"},
//       {image: "/assets/our_service/pechat-na-oboyakh-2.jpg"},
//       {image:"/assets/our_service/pechat-na-oboyakh-3.jpeg"},
//     ],
//   },

//   {
//     title: "Печать на ткань",
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },

//   {
//     title: "Сувениры",
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },

//   {
//     title: "Изготовление флаги",
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },

//   {
//     title: "Рамки из багета",
//     img: [
//       {image:"/assets/our_service/viveska_1.jpg"},
//       {image: "/assets/our_service/viveska_2.jpg"},
//       {image:"/assets/our_service/viveska_3.jpg"},
//     ],
//   },


// ];



const page = ({params}:any) => {
  const [ourWorks, setOurWorks] = useState<any>()
  const [isLoading, setisLoading] = useState(false)
  


  useEffect(()=> {
    async function getData(){
      setisLoading(true)
      let data = await getOurJobByNameForUser(params.product)
      setOurWorks(data.result)
      setisLoading(false)
    }
    getData()
  }, [])



  
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
    <div>
      <div style={{position:'relative'}}>
      <div className="grid grid-cols-3 justify-around gap-3 mt-10">
            {ourWorks?.map((item:any, index:number)=> {
                return (
                  <div className="" key={index}>
                    <div className="relative h-300" >                                                
                        {/* ==========    Бизнинг ишлар     ==========  */}                        
                        <ModalImagePopUp img={item.imageURL} height={'400'}/>                                             
                    </div>                            
                  </div>
                )
            })}

        </div>
      </div>
    </div>  
  )
}

export default page