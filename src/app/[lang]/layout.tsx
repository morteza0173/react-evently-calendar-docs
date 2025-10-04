import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Vazirmatn } from "next/font/google";
import { defineI18nUI } from "fumadocs-ui/i18n";
import { i18n } from "@/lib/i18n";

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: "English",
    },
    fa: {
      displayName: "فارسی",
      search: "جستجوی مستندات",
    },
  },
});

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html
      dir={lang === "fa" ? "rtl" : "ltr"}
      lang="en"
      className={vazirmatn.className}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            enabled: lang === "fa" ? false : true,
          }}
          i18n={provider(lang)}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
