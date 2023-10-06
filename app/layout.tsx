import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Resume builder",
  description: "free resume builder without regestring and saving any data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${open_sans.variable} ${space_grotesk.variable}`}
      >
        {children}
        <footer className=" bg-black py-8 text-white w-full text-sm">
          <div className=" container px-4">Created with &#9829;</div>
        </footer>
      </body>
      <script async data-id="101429109" src="//static.getclicky.com/js" />
    </html>
  );
}
