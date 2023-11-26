import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.variable}>
        <Theme appearance='light' accentColor='violet'>
          <Navbar />
          <main className='p-5'>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
