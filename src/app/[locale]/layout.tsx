import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CommonNavbar from "@/components/Navbar/CommonNavbar";
import { notFound } from "next/navigation";
import FooterForUseTranslations from "@/components/Footer/FooterForUseTranslations";
import { EdgeStoreProvider } from "@/lib/edgestore";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslations } from "next-intl";
import NavMenuDropDown from "@/components/Navbar/BottomNavbar/NavMenuDropDown";

const locales = ["uz", "ru", "cn", "en", "tr", "kr"];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "HD print - Reklama agentligi, Объемные буквы, световые короба, стелло, будки для банкомата, стенды, наружная реклама в Узбекистане",
  description:
    "HD Print предлагает объемные буквы, световые короба, стелло, будки для банкомата, стенды в Узбекистане по самым приемлемым ценам. Звоните по номерам: +998 99 830 00 32",
  keywords:
    "Объемные буквы андижан, рекламные стелло андижан, будки для банкомата андижан, стенды андижан, Объемные буквы узбекистан, рекламные стелло узбекистан, будки для банкомата узбекистан",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/HDprint.png?v=4"],
    shortcut: ["/HDprint.png"],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }



  const t = useTranslations("Navbar");

  let about = t("about");
  let service = t("our_service");
  let portfolio = t("portfolio");
  let main = t("main");
  let price = t("feedback");
  let contacts = t("contacts");



  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="relative">
          <CommonNavbar />      
          <NavMenuDropDown
            main={main}
            about={about}
            service={service}
            portfolio={portfolio}
            price={price}
            contacts={contacts}
          />
          <EdgeStoreProvider>{children}</EdgeStoreProvider>

          <FooterForUseTranslations />
        </div>
      </body>
    </html>
  );
}
