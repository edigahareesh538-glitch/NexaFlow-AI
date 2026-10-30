"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/25",
      outline:
        "border-2 border-border bg-transparent hover:bg-muted hover:border-primary/50 text-foreground",
      ghost:
        "bg-transparent hover:bg-muted text-foreground",
      gradient:
        "bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%] text-white hover:opacity-90 shadow-lg shadow-primary/25 animate-gradient",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm gap-1.5",
      md: "h-11 px-5 text-base gap-2",
      lg: "h-12 px-7 text-lg gap-2.5",
      xl: "h-14 px-10 text-xl gap-3",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : icon && iconPosition === "left" ? (
          <span className="flex-shrink-0">{icon}</span>
        ) : null}
        {children}
        {icon && iconPosition === "right" && !loading && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };