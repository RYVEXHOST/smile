import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import { Reveal } from "./Reveal";

const BeforeAfter = ({ before, after }: { before: string; after: string }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-3xl bg-white shadow-elegant"
      onMouseDown={(e) => handleMove(e.clientX)}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img
        src={after}
        alt="After treatment"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain"
      />

      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Before treatment"
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">Before</div>
      <div className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">After</div>

      <div
        className="absolute bottom-0 top-0 w-1 bg-white shadow-glow"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card">
          <MoveHorizontal className="h-4 w-4 text-primary" />
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => (
  <section id="gallery" className="bg-secondary/40 py-20 md:py-28">
    <div className="container mx-auto px-4">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-accent">Smile Gallery</span>
        <h2 className="mt-3 text-4xl font-semibold font-display md:text-5xl">
          Real smile <span className="text-gradient">transformations</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Slide to see the difference. Sample visuals - real patient cases can be added here.
        </p>
      </Reveal>

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <BeforeAfter before={before1} after={after1} />
          <p className="mt-3 text-center text-sm text-muted-foreground">Cosmetic whitening and alignment</p>
          <p className="mt-2 text-center text-sm text-muted-foreground/80">
            Replace this sample with real clinic cases when patient-approved photos are ready.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);
