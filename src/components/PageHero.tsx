import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory">
      <div className="container-editorial py-20 text-center lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-[2.4rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4.4rem]">
            {title}
          </h1>
          {intro ? (
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
