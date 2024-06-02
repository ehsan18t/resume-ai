import Link from "next/link";

interface Props {
  to?: string;
  name: string;
  icon: any;
  onClick?: () => void;
  [rest: string]: any;
}

const NavItem = ({ to, name, icon: Icon, onClick, ...rest }: Props) => {
  const className =
    "hover:bg-primary/10 flex items-center text-gray-800 no-underline px-3 py-2 rounded-md transition duration-200 ease-in-out";

  if (!to) {
    return (
      <span className={className} role="button" onClick={onClick}>
        <Icon className="w-6 h-6 mr-2" />
        <span>{name}</span>
      </span>
    );
  }

  return (
    <Link href={to} className={className}>
      <Icon className="w-6 h-6 mr-2" />
      <span>{name}</span>
    </Link>
  );
};

export { NavItem };
