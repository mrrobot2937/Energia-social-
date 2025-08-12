"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  target,
  duration = 1600,
  prefix = "",
  suffix = "",
  start = 0,
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  start?: number;
}) {
  const [value, setValue] = useState<number>(start);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRunRef.current) {
            hasRunRef.current = true;
            const startTime = performance.now();

            const animate = (time: number) => {
              const elapsed = time - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.floor(start + (target - start) * eased);
              setValue(current);
              if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [duration, start, target]);

  return (
    <div ref={ref}>
      <span>
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
    </div>
  );
}
