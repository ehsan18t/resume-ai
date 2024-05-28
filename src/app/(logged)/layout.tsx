import Navbar from "@/components/common/nav/LoggedNavbar";
import { RequireAuth } from "@/components/utils";
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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
        <RequireAuth>{children}</RequireAuth>
      </div>
    </Provider>
  );
}
