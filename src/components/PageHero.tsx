import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  backgroundImage,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  backgroundImage?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-ivory">
      {backgroundImage ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-green/50" />
        </div>
      ) : null}
      <div className="container-editorial py-20 text-center lg:py-28">
        <Reveal>
          <p className={cn("eyebrow", backgroundImage && "text-white")}>{eyebrow}</p>
          <h1 className={cn("mx-auto mt-5 max-w-4xl text-[2.4rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4.4rem]", backgroundImage && "text-white")}>
            {title}
          </h1>
          {intro ? (
            <p className={cn("mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground", backgroundImage && "text-white")}>{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
