// src/app/layout.tsx
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const lexend = Lexend({ 
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Money King",
  description: "Learn in-demand skills with industry experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased bg-white`}>
        {/* Navbar and SecondNavbar must be ABOVE the content */}
        <Navbar />

        {/* Hero starts here – give space so it's not hidden under navbars */}
        <main className="pt-10 lg:pt-15">
          {children}
        </main>
      </body>
    </html>
  );
}