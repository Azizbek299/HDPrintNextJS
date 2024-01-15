import { useTranslations } from "next-intl";
import Expandable from "./Expandable";


const FooterForUseTranslations = () => {
  //  useTranslations()  дан маълумот факат  NextJS да  "use server" да ишлайди шунинг учун 
  //  шу ерда малумотни олиб боласи  <Expandable/>  "use client"  ни ишлатгани учун 
  //  маълумотни шу ерда обналичка килиб кейин боласига беряпмиз
    const t = useTranslations('footer')
    let address = t('address')
    let addressText = t('addressText')
    let ourContact = t('ourContacts')

  return (
    <div>
        <Expandable address={address} addressText={addressText} ourContact={ourContact}/>
    </div>
  )
}

export default FooterForUseTranslations