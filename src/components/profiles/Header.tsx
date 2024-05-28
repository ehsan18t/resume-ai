import { cn } from "@/lib/utils";

import Image from "@/components/common/Image";

const Header = ({ profile_picture, name, title = null, bio, className }) => {
  return (
    <div className={cn("w-full flex gap-5 items-center", className)}>
      <Image
        src={profile_picture}
        alt={name}
        className="border-gray-400"
        height={120}
        width={120}
        rounded
      />
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">{name}</h1>
        {title && <h2 className="text-xl pb-1 text-stone-600">{title}</h2>}
        <p className="text-sm font-semibold text-justify">{bio}</p>
      </div>
    </div>
  );
};

export default Header;
