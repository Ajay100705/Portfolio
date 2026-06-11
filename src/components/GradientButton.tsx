import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'outline' | 'text';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  href?: string;
  download?: boolean;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
}

export function GradientButton({
  children,
  variant = 'gradient',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  href,
  download,
  className,
  disabled = false,
  fullWidth = false,
  type = 'button',
}: GradientButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-sans font-semibold text-base rounded-pill transition-all duration-200 whitespace-nowrap',
    fullWidth && 'w-full',
    disabled && 'opacity-50 cursor-not-allowed',
    className
  );

  const variantClasses = {
    gradient: cn(
      'gradient-bg text-white px-9 py-3.5',
      !disabled && 'hover:shadow-glow hover:-translate-y-0.5'
    ),
    outline: cn(
      'border border-white/[0.06] bg-transparent text-white px-9 py-3.5',
      !disabled && 'hover:border-amber hover:text-amber'
    ),
    text: 'bg-transparent text-white/70 px-0 py-0 font-medium hover:text-amber',
  };

  const Component = href ? motion.a : motion.button;
  const props = href
    ? { href, download, target: download ? undefined : '_blank', rel: 'noopener noreferrer' }
    : { type, onClick, disabled };

  return (
    <Component
      className={cn(baseClasses, variantClasses[variant])}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={16} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={16} />}
    </Component>
  );
}
