import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local"

const inter = Inter({ subsets: ["latin"] });

const clash = localfont(
  {
    src:[
      {
        path:'../../public/fonts/ClashDisplay-Bold.ttf',
        weight:"700"
      },
      {
        path:'../../public/fonts/ClashDisplay-Semibold.ttf',
        weight:"600"
      },
      {
        path:'../../public/fonts/ClashDisplay-Medium.ttf',
        weight:"500"
      },
      {
        path:'../../public/fonts/ClashDisplay-Regular.ttf',
        weight:"400"
      },
    ],
    variable:"--font-clash"
  }
)

export const metadata: Metadata = {
  title: "Uifry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clash.variable}`}>{children}</body>
    </html>
  );
}
