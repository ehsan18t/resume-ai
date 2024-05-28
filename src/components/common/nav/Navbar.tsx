"use client";

import { useVerify } from "@/hooks";
import { useAppSelector } from "@/redux/hooks";
import LoggedNavbar from "./LoggedNavbar";
import NonLoggedNav from "./NonLoggedNav";

export default function Navbar() {
  useVerify();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return <LoggedNavbar />;
  } else {
    return <NonLoggedNav />;
  }
}
