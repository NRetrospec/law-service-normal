import * as React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info';
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const variants = {
      default:
        'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
      primary:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      success:
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      warning:
        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
      danger:
        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-medium transition-colors',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
