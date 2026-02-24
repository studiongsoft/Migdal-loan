import type { Metadata } from "next";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

const migdalFont = localFont({
  src: [
    {
      path: "../../public/Font/1_Migdal_RagSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Font/1_Migdal_RagSans-Black.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Font/1_Migdal_RagSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-migdal",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="he" dir="rtl" className={`h-full ${migdalFont.variable}`}>
        <body className="h-full font-migdal antialiased">
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}