"use client";
import { useRouter, usePathname } from "@/navigation";



const Language = ({ locale }: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: any) => {
    router.push(pathname, { locale: e.target.value });
  };


  return (
    <>
      <label id="language"></label>
      <select aria-labelledby="language" value={locale} onClick={handleChange} className="ml-30 py-10 rounded-md outline-none cursor-pointer">
          <option value="uz">&nbsp;🇺🇿 &nbsp;UZ</option>&nbsp;
          <option value="ru">&nbsp;🇷🇺 &nbsp;RU&nbsp; &nbsp;</option>
          <option value="cn">&nbsp;🇨🇳 &nbsp;CN&nbsp; &nbsp;</option>
          <option value="en">&nbsp;🇬🇧 &nbsp;EN&nbsp; &nbsp;</option>
          <option value="tr">&nbsp;🇹🇷 &nbsp;TR&nbsp; &nbsp;</option>
          <option value="kr">&nbsp;🇰🇷 &nbsp;KR&nbsp; &nbsp;</option>
      </select>
    </>
  );
};

export default Language;
