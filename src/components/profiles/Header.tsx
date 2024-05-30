import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BuildProfileFromCV from "./BuildProfileFromCV";

const Header = ({ profile_picture, name, title = null, bio, className }) => {
  return (
    <div className={cn("w-full flex gap-5 items-center", className)}>
      <Avatar className="w-32 h-32">
        <AvatarImage src={profile_picture} alt={name} />
        <AvatarFallback className="text-4xl">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full">
        <span className="flex justify-between">
          <h1 className="text-4xl font-bold">{name}</h1>
          <BuildProfileFromCV />
        </span>
        {title && <h2 className="text-xl pb-1 text-stone-600">{title}</h2>}
        {bio && (
          <>
            <p className="text-gray-600 text-justify">{bio}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
