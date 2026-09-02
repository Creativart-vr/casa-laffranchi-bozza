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
}: {
  label: string;
  className?: string;
  ratio?: string;
  tone?: "ivory" | "cream" | "green";
  zoom?: boolean;
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
            tone === "green" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {label}
        </span>
      </div>
    </figure>
  );
}
