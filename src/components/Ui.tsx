import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "relative inline-flex items-center justify-center border px-8 py-4 font-display text-[0.72rem] uppercase tracking-[0.32em] transition-colors duration-500";

const variants = {
  green: "border-green text-green hover:bg-green hover:text-white",
  light: "border-line text-green hover:bg-green hover:text-white",
  onDark: "border-white/60 text-white hover:bg-white hover:text-green",
  solid: "border-green bg-green text-white hover:bg-green-soft hover:border-green-soft",
} as const;

type Variant = keyof typeof variants;

/** Dettagli grafici aperti negli angoli, come nel riferimento editoriale */
function Corners({ variant }: { variant: Variant }) {
  const color = variant === "onDark" ? "bg-white" : "bg-green";
  return (
    <>
      <span aria-hidden className={cn("absolute -left-[1px] -top-[1px] h-[1px] w-6", color)} />
      <span aria-hidden className={cn("absolute -right-[1px] -bottom-[1px] h-[1px] w-6", color)} />
    </>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "green",
  className,
  ...rest
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  params?: Record<string, string>;
}) {
  const LinkAny = Link as unknown as (props: Record<string, unknown>) => JSX.Element;
  return (
    <LinkAny to={to} className={cn(base, variants[variant], className)} {...rest}>

      <Corners variant={variant} />
      {children}
    </LinkAny>
  );
}

export function ActionButton({
  children,
  variant = "green",
  className,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Corners variant={variant} />
      {children}
    </button>
  );
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  as: Tag = "h2",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <Tag className="text-[2.1rem] leading-[1.04] sm:text-[2.9rem] lg:text-[3.6rem]">{title}</Tag>
      {subtitle ? (
        <div
          className={cn(
            "mt-5 flex items-center gap-6",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          {align === "center" && <span className="hidden h-px w-24 bg-line sm:block" />}
          <p className="eyebrow">{subtitle}</p>
          {align === "center" && <span className="hidden h-px w-24 bg-line sm:block" />}
        </div>
      ) : null}
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("h-px w-full border-0 bg-line", className)} />;
}
