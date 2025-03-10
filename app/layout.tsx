import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import NavComponent from "@/components/NavComponent";

export const metadata: Metadata = {
  title: "Planet Fact Site",
  description: "Project created as part of front end mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative h-full bg-black md:overflow-hidden md:max-h-screen">
        <Image className="relative -z-10" src={'/assets/background-stars.svg'} alt="" fill style={{objectFit: 'cover'}} priority/>
        <NavComponent/>
        {children}
        
        </body>
    </html>
  );
}
