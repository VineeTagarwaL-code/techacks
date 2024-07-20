import type { Metadata } from "next";
import { Inter, Allerta, Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
const allerta = Allerta({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const raleway = Raleway({ weight: "400", subsets: ["latin"], display: "swap" });
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
    <html lang="en" className={`${allerta.className} `}>
      <Head>
        <meta name="application-name" content={"Techacks"} />
      </Head>
      <body className={``}>{children}</body>
    </html>
  );
}
