import Navbar from "@/components/common/nav/LoggedNavbar";
import { RequireAuth, Setup } from "@/components/utils";
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
      <Setup />
      <Navbar />
      <div className="p-3">
        <RequireAuth>{children}</RequireAuth>
      </div>
    </Provider>
  );
}
