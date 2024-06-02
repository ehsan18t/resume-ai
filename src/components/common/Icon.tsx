import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Icon({
  icon: BtnIcon,
  onClick,
  size = 25,
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
      <BtnIcon className={cn(className)} size={size} />
    </Button>
  );
}
