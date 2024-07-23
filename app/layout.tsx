import type { Metadata } from "next";
import "./globals.css";
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
      <body>
        <NavComponent/>
        {children}
        
        </body>
    </html>
  );
}
