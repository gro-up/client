import { cn } from "@/utils/shadcn";

type ContainerTag = "div" | "section" | "main" | "article" | "aside" | "nav" | "footer" | "header";

type ContainerProps = {
  as: ContainerTag;
  children?: React.ReactNode;
  className?: string;
};

export const Container = ({ as, children, className, ...rest }: ContainerProps) => {
  const Component = as || "div";
  return (
    <Component {...rest} className={cn("rounded-md relative w-full h-full", className)}>
      {children}
    </Component>
  );
};
