import { type AnchorHTMLAttributes } from "react";
import { buttonVariants } from "@/lib/button-variants";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
