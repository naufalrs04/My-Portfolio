import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    time: string;
    description1: string;
    description2: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-rows", className)}>
      {items.map((item, idx) => (
        <div
          key={item.id} // Menggunakan key berdasarkan title atau properti lain yang unik
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-200/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.time}</CardTitle>
            <CardDescription1 description1={item.description1} />
            <CardDescription2 description2={item.description2} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden relative z-20 shadow-md transition-all duration-300",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at center, #1e2a47 20%, #090a0f 70%, #010101 100%)",
        border: "2px solidrgb(201, 184, 184)",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)", // Efek bayangan halus
      }}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
      {/* Soft gradient effect on hover */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-all duration-300" />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-center text-lg text-zinc-100 font-bold tracking-wide text-green-400",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription1 = ({
  className,
  description1,
}: {
  className?: string;
  description1: string;
}) => {
  return (
    <p
      className={cn(
        "my-3 font-bold text-zinc-300 tracking-wide leading-relaxed text-lg",
        className
      )}
    >
      {description1}
    </p>
  );
};

export const CardDescription2 = ({
  className,
  description2,
}: {
  className?: string;
  description2: string;
}) => {
  return (
    <p
      className={cn(
        "my-3 text-zinc-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {description2}
    </p>
  );
};
