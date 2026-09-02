import { cn } from "@/lib/utils";

/**
 * Placeholder fotografico neutro ed elegante.
 * Sostituibile in seguito con le fotografie reali Casa Laffranchi.
 */
export function Photo({
  label,
  className,
  ratio = "4/5",
  tone = "ivory",
  zoom = true,
  labelPosition = "center",
}: {
  label: string;
  className?: string;
  ratio?: string;
  tone?: "ivory" | "cream" | "green";
  zoom?: boolean;
  labelPosition?: "center" | "bottom";
}) {
  const tones = {
    ivory: "bg-ivory",
    cream: "bg-cream",
    green: "bg-green",
  } as const;

  return (
    <figure
      role="img"
      aria-label={label}
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: ratio }}
    >
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center border border-line",
          tones[tone],
          zoom && "img-zoom",
        )}
      >
        <div
          className={cn(
            "absolute inset-4 border",
            tone === "green" ? "border-white/20" : "border-line/70",
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            "relative font-display text-[0.68rem] uppercase tracking-[0.42em]",
            labelPosition === "bottom" && "absolute bottom-8 left-1/2 -translate-x-1/2",
            tone === "green" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {label}
        </span>
      </div>
    </figure>
  );
}
