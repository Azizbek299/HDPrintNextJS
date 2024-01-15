import {createSharedPathnamesNavigation} from 'next-intl/navigation';



 
export const locales = ['uz', 'ru','cn', 'en', 'tr', 'kr'] as const;
export const localePrefix = 'always' // Default  Браузерга хар доим  uz  еки ru  куяди
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales, localePrefix});

