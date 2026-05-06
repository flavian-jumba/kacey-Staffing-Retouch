import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Mercy, Registered Nurse (F1 Visa to EB 3 Visa): Mercy is a nurse from Kenya, initially arrived in the united states as a student under the F1 program and turned her dream of working in the U.S. healthcare system into reality through the EB-3 visa program.With our support throughout the process, she successfully secured a nursing role at a trusted healthcare facility.",
    by: "Mercy, Registered Nurse",
    //imgSrc: "https://i.pravatar.cc/150?img=47"
  },
  {
    tempId: 1,
    testimonial: "Kacey Staffing made the transition seamless. The professional development opportunities here are unmatched.",
    by: "Mercy Jepngetich, Hospitality Manager",
    //imgSrc: "https://i.pravatar.cc/150?img=48"
  },
  {
    tempId: 2,
    testimonial: "Kacey Staffing transformed my career completely. From a nurse in my home country to working in one of America's top hospitals. Their support team was with me every step of the way.",
    by: "Barbara K, Registered Nurse",
    //imgSrc: "https://i.pravatar.cc/150?img=49"
  },
  {
    tempId: 3,
    testimonial: "The J1 visa process seemed overwhelming, but Kacey guided me through every step. I'm now teaching at a fantastic school in Texas and loving every moment.",
    by: "Samuel Okoye, ESL Teacher",
    //imgSrc: "https://i.pravatar.cc/150?img=33"
  },
  {
    tempId: 4,
    testimonial: "Relocating internationally for work is scary, but Kacey made it feel effortless. Their placement team genuinely cares about your success.",
    by: "Priya Menon, Physical Therapist",
    //imgSrc: "https://i.pravatar.cc/150?img=44"
  },
  {
    tempId: 5,
    testimonial: "The J1 visa process seemed overwhelming, but Kacey guided me through every step. I'm now teaching at a fantastic school in Texas and loving every moment.",
    by: "Samuel Okoye, ESL Teacher",
    //imgSrc: "https://i.pravatar.cc/150?img=33"
  },
  {
    tempId: 0,
    testimonial: "Mercy, Registered Nurse (F1 Visa to EB 3 Visa): Mercy is a nurse from Kenya, initially arrived in the united states as a student under the F1 program and turned her dream of working in the U.S. healthcare system into reality through the EB-3 visa program.With our support throughout the process, she successfully secured a nursing role at a trusted healthcare facility.",
    by: "Mercy, Registered Nurse",
    //imgSrc: "https://i.pravatar.cc/150?img=47"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[#8B1A4A] text-white border-[#8B1A4A]"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-[#8B1A4A]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(139,26,74,0.35)"
          : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className={cn(
          "mb-4 h-14 w-12 object-cover object-top",
          isCenter ? "shadow-[3px_3px_0px_rgba(255,255,255,0.2)]" : "shadow-[3px_3px_0px_rgba(0,0,0,0.1)]"
        )}
      />
      <h3 className={cn(
        "text-base sm:text-lg font-medium leading-snug",
        isCenter ? "text-white" : "text-gray-800"
      )}>
        &ldquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/75" : "text-gray-400"
      )}>
        &mdash; {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-50"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-[#8B1A4A] hover:text-white hover:border-[#8B1A4A]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A4A] focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-200 hover:bg-[#8B1A4A] hover:text-white hover:border-[#8B1A4A]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A4A] focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
