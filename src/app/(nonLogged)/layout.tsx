import Navbar from "@/components/common/nav/Navbar";
import Provider from "@/redux/provider";
import type { Metadata } from "next";

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
      <div className="p-3">{children}</div>
    </Provider>
  );
}
