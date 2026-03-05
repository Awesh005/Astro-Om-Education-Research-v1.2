import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'glass' | 'secondary';
  className?: string;
  icon?: ReactNode;
}

export function Badge({ children, variant = 'default', className, icon, ...props }: BadgeProps) {
  const variants = {
    default: "bg-blue-100 text-blue-700",
    outline: "border border-slate-200 text-slate-600",
    glass: "bg-white/80 border border-slate-200 text-slate-700 backdrop-blur-md",
    secondary: "bg-slate-100 text-slate-600"
  };

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </span>
  );
}
