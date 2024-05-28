import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <div className="w-2/4 flex gap-1 rounded-md border-[1px] border-gray-300">
      <Input
        className="border-0 focus-visible:ring-1 focus-visible:ring-slate-500 transition duration-200 ease-in-out"
        type="text"
        placeholder="Search..."
      />
      <Button type="submit" variant="ghost">
        <FaSearch className="text-gray-600" size={16} />
      </Button>
    </div>
  );
}
