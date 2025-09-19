"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "default" | "lg"
  className?: string
}

export function CTAButton({ 
  children, 
  variant = "primary", 
  size = "lg", 
  className,
  ...props 
}: CTAButtonProps) {
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  }

  return (
    <Button
      size={size}
      className={cn(
        "font-semibold rounded-lg transition-all duration-300",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}
