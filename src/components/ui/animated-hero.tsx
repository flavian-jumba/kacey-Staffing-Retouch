import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["excellence", "expertise", "confidence", "guidance", "care"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button
              variant="secondary"
              size="sm"
              className="gap-4 rounded-full bg-[#0f2d5c]/[0.04] text-[#0f2d5c]/70 hover:bg-[#0f2d5c]/[0.08] uppercase tracking-[0.18em] text-[10px] border border-[#0f2d5c]/10"
            >
              Study Abroad <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular text-[#0f2d5c]">
              <span className="text-spektr-cyan-50">
                Supporting your study abroad journey with
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-[#8B1A4A] via-[#a01f57] to-[#0f2d5c] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-[#0f2d5c]/60 max-w-2xl text-center">
              Kacey Staffing connects students with curated international
              academic programs — fully supported from application to arrival.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              size="lg"
              className="gap-4 rounded-full border-[#0f2d5c]/15 text-[#0f2d5c] hover:bg-[#0f2d5c]/[0.04] hover:text-[#0f2d5c]"
              variant="outline"
              asChild
            >
              <a href="#how-it-works">
                Learn More <PhoneCall className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              className="gap-4 rounded-full bg-[#8B1A4A] text-white hover:bg-[#a01f57] shadow-[0_8px_24px_rgba(139,26,74,0.28)] hover:shadow-[0_12px_32px_rgba(139,26,74,0.38)]"
              asChild
            >
              <a href="#destinations">
                Explore Programs <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
