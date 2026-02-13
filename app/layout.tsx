import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import { Quintessential } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"]
});

const dancing = Dancing_Script({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Happy Valentine Day ❤️",
  description: "A special surprise made with love 😘",

  openGraph: {
    title: "Happy Valentine Day ❤️",
    description: "Open this surprise 😉",
    url: "https://velvety-beignet-2b2463.netlify.app", // 👈 apna netlify link dalna
    siteName: "Valentine Surprise",
    images: [
      {
        url: "/Images/love.gif", // 👈 preview image
        width: 1200,
        height: 630,
        alt: "Happy Valentine",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Happy Valentine Day ❤️",
    description: "Open this surprise 😉",
    images: ["/Images/p1.jpeg"],
  },
};

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"] // this font has only one weight
});

export { quintessential };

export { playfair, dancing };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${quintessential.className}`}>
        {children}
      </body>
    </html>
  );
}

