import Detail from "@/components/Price/Detail";
import { useTranslations } from "next-intl";


const page = ({ params }: any) => {
  const t = useTranslations('pricePage')
  let osobennosti = t('osobennosti')
  let srokIzgorovleniya1 = t('srokIzgorovleniya1')
  let srokIzgorovleniya2 = t('srokIzgorovleniya2')

  return (
    <>
    <Detail params={params} osobennosti={osobennosti} srokIzgorovleniya1={srokIzgorovleniya1} srokIzgorovleniya2={srokIzgorovleniya2}/>
    </>
  );
};

export default page;
