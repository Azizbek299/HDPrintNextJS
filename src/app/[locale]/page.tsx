import ExampleCarouselImage from "@/components/Carusel/ExampleCarouselImage";
import CreateAddEvereWhere from "@/components/Home/CreateAddEvereWhere";
import HowWeWork from "@/components/Home/HowWeWork";
import OurClients from "@/components/Home/OurClients";
import OurService from "@/components/Service/OurService";
import OurWorks from "@/components/Service/OurWorks";
import { useTranslations } from "next-intl";




// const ourWorkImage = [
//   {img:'/assets/our_work/our_work1.png'},
//   {img:'/assets/our_work/our_work2.png'},
//   {img:'/assets/our_work/our_work3.png'},
//   {img:'/assets/our_work/our_work4.png'},
//   {img:'/assets/our_work/our_work5.png'},
//   {img:'/assets/our_work/our_work6.png'},
//   {img:'/assets/our_work/our_work7.png'},
//   {img:'/assets/our_work/our_work8.png'},
//   {img:'/assets/our_work/our_work9.png'},
//   {img:'/assets/our_work/our_work10.png'},
//   {img:'/assets/our_work/our_work11.png'},
//   {img:'/assets/our_work/our_work12.png'},
//   {img:'/assets/our_work/our_work13.png'},
//   {img:'/assets/our_work/our_work14.png'},
//   {img:'/assets/our_work/our_work15.png'},
//   {img:'/assets/our_work/our_work16.png'},
//   {img:'/assets/our_work/our_work17.png'},
//   {img:'/assets/our_work/our_work18.png'},
  
// ]



export default function Home() {
  
  

  const t = useTranslations('homepage')
  const keys = ['ourWork'] as const

  let text1 = t(`${keys}.text1`)
  let text2 = t(`${keys}.text2`) 



  




  return (
    <div className="xl:container mx-auto min-h-screen">
      <div>

      {/* Асосий катта расмдаги карусел  */}
        <ExampleCarouselImage />

      {/* Бизнинг хизмат нималар кила олишимиз образец  */}
        <OurService/>
        
        {/* Бизниг ишлар образецлар курсатилган */}
        <OurWorks text1={text1} text2={text2} />
        
        {/* Как мы работаем  */}
        <HowWeWork/>
        
        {/* Каерларда ишлаймиз Узбекистан харитаси бор жой */}
        <CreateAddEvereWhere/>
       
        <OurClients/>
      </div>
    </div>
  );
}
