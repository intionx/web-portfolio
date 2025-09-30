import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const OvoFont = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata: Metadata = {
  title: "Kenneth Sulaiman",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
