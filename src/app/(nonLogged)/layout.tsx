import { Footer } from "@/components/common";
import Navbar from "@/components/common/nav/Navbar";
import Provider from "@/redux/provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume AI",
  description: "Resume AI application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      <Navbar />
      <div className="mx-auto">{children}</div>
      <Footer />
    </Provider>
  );
}
