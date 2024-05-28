import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center text-gray-600 font-semibold text-3xl font-sans">
      <Link href="/">
        <img className="h-16" src="/logo.svg" alt="" />
      </Link>
    </div>
  );
}
