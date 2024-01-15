import createMiddleware from 'next-intl/middleware';



 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['uz', 'ru', 'cn', 'en', 'tr', 'kr'],
 
  // Used when no locale matches
  defaultLocale: 'uz',
  // localeDetection: false
});
 
export const config = {
  // Match only internationalized pathnames
  // matcher: ['/((?!api|_next|.*\\..*).*)']
   matcher: ['/', '/(ru|uz|cn|en|tr|kr)/:path*']
};

