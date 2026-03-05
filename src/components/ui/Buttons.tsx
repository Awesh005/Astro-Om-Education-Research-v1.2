import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function PrimaryButton({ children, className, icon, ...props }: ButtonProps) {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { scale: 1 },
        hover: { 
          scale: 1.05, 
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
          transition: { type: "spring", stiffness: 400, damping: 17 }
        },
        tap: { scale: 0.95 }
      }}
      className={cn(
        "group relative px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold text-base overflow-hidden transition-all shadow-md hover:bg-blue-700",
        className
      )}
      {...props}
    >
      <motion.span 
        variants={{
          initial: { x: "-100%" },
          hover: { 
            x: "100%", 
            transition: { 
              repeat: Infinity, 
              duration: 1.5, 
              ease: "linear" 
            } 
          }
        }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" 
      />
      <span className="flex items-center justify-center gap-2 relative z-10">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
    </motion.button>
  );
}

export function SecondaryButton({ children, className, icon, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(
        "px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold text-base hover:border-slate-300 transition-all shadow-sm hover:shadow-md",
        className
      )}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  );
}
