import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hamburger({ user, ref, onClick }) {
  return (
    <div className="flex gap-3 items-center">
      <button
        ref={ref}
        onClick={() => onClick()}
        className="text-gray-800 block"
        aria-label="Toggle sidebar"
      >
        {user && (
          <Avatar className="w-16 h-16">
            <AvatarImage src={user?.profile_picture} alt={name} />
            <AvatarFallback className="text-4xl">
              {user?.firstName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        )}
      </button>
    </div>
  );
}
