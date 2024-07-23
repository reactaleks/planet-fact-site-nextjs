import type { Metadata } from "next";
import "./globals.css";


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
      <body>{children}</body>
    </html>
  );
}
