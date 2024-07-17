import type { Metadata } from "next";
import { Inter, Allerta } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const allerts = Allerta({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Techacks",
  description: "Collborate, Contribute, Enpower",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="application-name" content={"Techacks"} />
      </Head>
      <body className={` ${allerts.className}`}>{children}</body>
    </html>
  );
}
