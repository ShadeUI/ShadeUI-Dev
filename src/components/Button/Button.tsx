import React from 'react';
import { cn } from '@/lib/utils';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

// Extend native button props
type ButtonProps = {
  label?: string;
  color?: 'blue' | 'black' | 'red' | 'orange' | 'purple';
  size?: 'small' | 'medium' | 'large';
  state?: 'default' | 'hover' | 'focused' | 'pressed' | 'disabled';
  leftIcon?: boolean | React.ReactNode;
  rightIcon?: boolean | React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  label,
  color = 'blue',
  size = 'medium',
  state = 'default',
  leftIcon,
  rightIcon,
  className,
  ...rest
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center rounded font-medium transition';

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-600 text-white hover:bg-blue-700',
    black: 'bg-black text-white hover:bg-gray-800',
    red: 'bg-red-600 text-white hover:bg-red-700',
    orange: 'bg-orange-500 text-white hover:bg-orange-600',
    purple: 'bg-purple-600 text-white hover:bg-purple-700',
  };

  const sizeClasses: Record<string, string> = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  };

  const stateClasses: Record<string, string> = {
    default: '',
    hover: '',
    focused: 'ring-2 ring-offset-2 ring-blue-500',
    pressed: 'scale-[0.98]',
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
  };

  const renderLeftIcon = () => {
    if (leftIcon === true) return <span ><FiArrowLeft /></span>;
    if (React.isValidElement(leftIcon)) return <span >{leftIcon}</span>;
    return null;
  };

  const renderRightIcon = () => {
    if (rightIcon === true) return <span ><FiArrowRight /></span>;
    if (React.isValidElement(rightIcon)) return <span >{rightIcon}</span>;
    return null;
  };


  return (
    <button
      className={cn(
        baseStyles,
        colorClasses[color],
        sizeClasses[size],
        stateClasses[state],
        className
      )}
      disabled={state === 'disabled'}
      {...rest}
    >
      {renderLeftIcon()}
      {label }
      {renderRightIcon()}
    </button>
  );
}

export default Button;
