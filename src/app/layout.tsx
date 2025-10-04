import "@/app/global.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={vazirmatn.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
