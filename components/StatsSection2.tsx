import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, animate } from "framer-motion";

// Define the types for the props of the AnimatedNumber component
type AnimatedNumberProps = {
  value: number;
  isInt?: boolean;
};

function AnimatedNumber({ value, isInt = true }: AnimatedNumberProps) {
  const ref = useRef<HTMLParagraphElement>(null); // Specify the element type for the ref
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (isInView) {
      const node = ref.current;
      if (node) {
        // Use the animate function from Framer Motion for the count-up effect
        const animationControls = animate(0, value, {
          duration: 2,
          onUpdate(latest) {
            if (isInt) {
              node.textContent = Math.round(latest).toString();
            } else {
              node.textContent = latest.toFixed(1);
            }
          },
        });
        // Return a cleanup function to stop the animation when the component unmounts
        return () => animationControls.stop();
      }
    }
  }, [isInView, value, isInt]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className="text-6xl md:text-7xl lg:text-8xl text-black text-center"
    >
      0
    </motion.span>
  );
}

export default function StatsSection() {
  return (
    <section className="flex flex-col items-center px-4 py-12 md:py-20 lg:py-32">
      <div className="flex flex-col items-center gap-5 md:gap-8 mb-12 md:mb-20 max-w-[90%] md:max-w-[461px]">
        <h2 className="text-5xl md:text-6xl lg:text-7xl text-black text-center w-full">
          Tangible results
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-center w-full">
          Within 3 months of service
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-[90%] lg:max-w-[1100px]">
        <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl p-6 md:p-8 flex-1 min-h flex flex-col items-center justify-between">
          <p className="text-6xl md:text-7xl lg:text-8xl text-black text-center">
            <AnimatedNumber value={400} />+
          </p>
          <p className="text-2xl md:text-3xl text-black text-center">
            Hours saved
          </p>
        </div>

        <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl p-6 md:p-8 flex-1 min-h-[280px] md:min-h-[316px] flex flex-col items-center justify-between">
          <p className="text-6xl md:text-7xl lg:text-8xl text-black text-center">
            <AnimatedNumber value={1.2} isInt={false} />x
          </p>
          <p className="text-2xl md:text-3xl text-black text-center px-4">
            Average revenue increased
          </p>
        </div>

        <div className="bg-gradient-to-b from-purple-300/60 to-purple-100/60 rounded-2xl p-6 md:p-8 flex-1 min-h-[280px] md:min-h-[316px] flex flex-col items-center justify-between">
          <p className="text-6xl md:text-7xl lg:text-8xl text-black text-center">
            <AnimatedNumber value={47} />%
          </p>
          <p className="text-2xl md:text-3xl text-black text-center px-4">
            Decrease in no shows
          </p>
        </div>
      </div>
    </section>
  );
}
