import type { Metadata } from 'next'
import './globals.css'
//@ts-ignore
import {Inter, IBM_Plex_Serif} from "next/font/google"

//@ts-ignore
const inter = Inter({subsets:["latin"],variable: '--font-inter'});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: '--font-ibm-plex-serif',
  weight: ["400", "700"] // or "300", "500", "600", "700", "800", "900"
})
export const metadata: Metadata = {
  title: 'Horizons',
  description: 'Banking Platform',
  icons:{
    icon:"/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
 
    <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
  </html>
  );
  
}