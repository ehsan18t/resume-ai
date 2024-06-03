import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CiEdit } from "react-icons/ci";
import { MdAdd, MdDeleteOutline } from "react-icons/md";

export default function Icon({
  icon: BtnIcon,
  onClick,
  size = 25,
  type,
  className,
  btnClass,
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      className={btnClass}
    >
      {type === "edit" && <CiEdit className={cn(className)} size={size} />}
      {type === "add" && <MdAdd className={cn(className)} size={size} />}
      {type === "delete" && (
        <MdDeleteOutline
          className={cn("text-red-500", className)}
          size={size}
        />
      )}
      {!type && <BtnIcon className={cn(className)} size={size} />}
    </Button>
  );
}
