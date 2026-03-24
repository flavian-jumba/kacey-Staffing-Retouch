'use client';

import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef, forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  href?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  href?: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  url,
  color,
  href,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[70vh] flex items-center justify-center sticky top-16"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-4vh + ${i * 24}px)`,
        }}
        className="flex flex-col relative h-[380px] md:h-[340px] w-[90%] md:w-[78%] lg:w-[65%] rounded-2xl p-5 md:p-8 origin-top shadow-2xl"
      >
        <h2 className="text-2xl text-center font-semibold text-white">{title}</h2>
        <div className="flex h-full mt-5 gap-6 md:gap-10 flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] relative lg:top-[10%]">
            <p className="text-sm text-white/95 leading-relaxed">{description}</p>
            <span className="flex items-center gap-2 pt-3">
              <a
                href={href || '#'}
                className="underline cursor-pointer text-white font-medium"
              >
                See more
              </a>
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </div>

          <div className="relative w-full lg:w-[60%] h-[230px] lg:h-full rounded-xl overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardProps {
  projects: ProjectData[];
  className?: string;
}

const StackingCard = forwardRef<HTMLElement, StackingCardProps>(
  ({ projects, className }, _ref) => {
    const container = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end'],
    });

    return (
      <ReactLenis root>
        <main className={cn('py-8', className)} ref={container}>
          <section className="w-full">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Card
                  key={`p_${i}`}
                  i={i}
                  url={project.link}
                  title={project.title}
                  color={project.color}
                  href={project.href}
                  description={project.description}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </section>
        </main>
      </ReactLenis>
    );
  },
);

StackingCard.displayName = 'StackingCard';

export default StackingCard;
