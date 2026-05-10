import React, { useEffect, useState } from 'react';

export type TypewriterSegment = {
  text: string;
  className?: string;
  /** Insert a line break after this segment when rendering. */
  breakAfter?: boolean;
};

interface TypewriterProps {
  segments: TypewriterSegment[];
  /** ms before typing starts */
  startDelay?: number;
  /** ms per character */
  speed?: number;
  /** show blinking cursor after typing completes (and during typing) */
  cursor?: boolean;
  cursorClassName?: string;
  className?: string;
  /** Change this to re-run the animation (e.g. slide id) */
  resetKey?: string | number;
  onDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({
  segments,
  startDelay = 0,
  speed = 55,
  cursor = true,
  cursorClassName = '',
  className = '',
  resetKey,
  onDone,
}) => {
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setCount(0);
    setDone(false);

    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount(c => {
          if (c + 1 >= totalChars) {
            if (interval) clearInterval(interval);
            setDone(true);
            onDone?.();
            return totalChars;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      if (interval) clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey, totalChars, speed, startDelay]);

  let remaining = count;
  const rendered: React.ReactNode[] = [];

  segments.forEach((seg, i) => {
    const take = Math.max(0, Math.min(seg.text.length, remaining));
    remaining -= take;
    const visible = seg.text.slice(0, take);
    if (visible.length > 0) {
      rendered.push(
        <span key={`s-${i}`} className={seg.className}>
          {visible}
        </span>
      );
    }
    if (seg.breakAfter && take === seg.text.length) {
      rendered.push(<br key={`br-${i}`} />);
    }
  });

  return (
    <span className={className} aria-label={segments.map(s => s.text).join(' ')}>
      {rendered}
      {cursor && (
        <span
          className={`inline-block w-[3px] ml-1 align-middle bg-current ${
            done ? 'typewriter-cursor-blink' : ''
          } ${cursorClassName}`}
          style={{ height: '0.85em' }}
          aria-hidden="true"
        />
      )}
    </span>
  );
};

export default Typewriter;
