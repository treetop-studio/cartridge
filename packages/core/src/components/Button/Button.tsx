import React, { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@treetop-studio/cartridge/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(
          // Base styles
          'cartridge-component inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          
          // Variant styles
          {
            'bg-primary text-white hover:bg-primary/90': variant === 'default',
            'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
            'border border-border bg-surface hover:bg-surface-variant hover:text-foreground': variant === 'outline',
            'bg-secondary text-foreground hover:bg-secondary/80': variant === 'secondary',
            'hover:bg-surface-variant hover:text-foreground': variant === 'ghost',
            'text-primary underline-offset-4 hover:underline': variant === 'link'
          },
          
          // Size styles
          {
            'h-9 rounded-sm px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2': size === 'md',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon'
          },
          
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };