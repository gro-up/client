import { Label, Input } from "@/components/shadcn";
import { cn } from "@/utils/shadcn";

interface LabelInputProps extends React.ComponentProps<"input"> {
  label: string;
  className?: string;
}

export const LabelInput = ({ label, className, ...props }: LabelInputProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      <Input {...props} />
    </div>
  );
};
