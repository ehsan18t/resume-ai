import Link from "next/link";
import Logo from "./Logo";

export default function NonLoggedNav() {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="text-gray-700 flex gap-3 font-semibold p-4 underline">
          <Link className="hover:text-blue-800" href="/auth/login">
            Login
          </Link>
          <Link className="hover:text-blue-800" href="/auth/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
