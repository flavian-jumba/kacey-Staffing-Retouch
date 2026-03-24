import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration,
  durationOnHover,
  speed = 40,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [hovered, setHovered] = useState(false);

  // Duration in seconds: lower speed number = longer duration = slower scroll
  const normalDuration = duration ?? (2000 / speed);
  const hoverDuration = durationOnHover ?? (speedOnHover ? 2000 / speedOnHover : normalDuration * 3);
  const effectiveDuration = hovered && (speedOnHover || durationOnHover) ? hoverDuration : normalDuration;

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn('flex w-max', reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll')}
        style={{
          gap: `${gap}px`,
          animationDuration: `${effectiveDuration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
