import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'light' | 'dark' | 'gradient';
  animate?: boolean;
}

export function SectionWrapper({ 
  children, 
  className, 
  id, 
  background = 'default',
  animate = true,
  ...props 
}: SectionWrapperProps) {
  const backgrounds = {
    default: "bg-white",
    light: "bg-slate-50 border-y border-slate-200",
    dark: "bg-slate-900 text-white",
    gradient: "bg-gradient-to-b from-white to-blue-50"
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-20 md:py-24 relative overflow-hidden",
        backgrounds[background],
        className
      )}
      {...props}
    >
      {animate ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  );
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
