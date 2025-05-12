import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'flat' | 'bezel' | 'link' | 'icon';
type Color =  'black' | 'blue' | 'danger' | 'orange' | 'purple' | 'neutral' ;
type ButtonState = 'default' | 'hover' | 'focused' | 'pressed' | 'disabled';
type Size = 'small' | 'medium' | 'large';

type ButtonProps = {
  label?: string;
  variant?: Variant;
  color?: Color;
  size?: Size;
  state?: ButtonState;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  iconOnly?: boolean; 
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  label,
  variant = 'flat',
  color = 'blue',
  size = 'medium',
  state = 'default',
  leftIcon,
  rightIcon,
  showLeftIcon = true,
  showRightIcon = true,
  iconOnly = true,
  className,
  ...props
}: ButtonProps) {
  
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-center transition shrink-0 capitalize font-semibold leading-[1] text-white cursor-pointer ';

  const sizeClasses: Record<string, string> = {
    small: 'text-xs leading-none tracking-[0.015em] h-8 gap-1 p-2',
    medium: 'text-sm leading-none tracking-[0.0175em] h-10 gap-1 p-2.5',
    large: 'text-base leading-none tracking-[0.02em] h-11 gap-2 p-3',
  };

  const iconSizeClasses: Record<string, string> = {
    small: 'w-4 h-4 inline-flex items-center',
    medium: 'w-5 h-5 inline-flex items-center',
    large: 'w-6 h-6 inline-flex items-center',
  };

  const variantClasses: Record<Variant, Record<Color, string>> = {
    //variantClasses - Start
    flat: {
      blue: '',
      black: '',
      danger: '',
      orange: '',
      purple: '',
      neutral: '',
    },
    bezel: {
      blue: '',
      black: '',
      danger: '',
      orange: '',
      purple: '',
      neutral: '',
    },
    link: {
      blue: 'text-blue-600',
      black: 'text-slate-600',
      danger: 'text-red-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600',
      neutral: 'text-zinc-600',
    },
    icon: {
      blue: '',
      black: '',
      danger: '',
      orange: '',
      purple: '',
      neutral: '',
    },
    //variantClasses - End
  };


  const stateClasses: Record<
    Variant,
    Record<Color, Record<ButtonState, string>>
  > = {
    // stateClasses - Start
    flat: {
      blue: {
        default: 'bg-blue-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-blue-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-blue-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-blue-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      black: {
        default: 'bg-slate-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-slate-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-slate-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-slate-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      danger: {
        default: 'bg-red-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-red-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-red-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-red-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      orange: {
        default: 'bg-orange-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-orange-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-orange-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-orange-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      purple: {
        default: 'bg-purple-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-purple-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-purple-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-purple-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      neutral: {
        default: 'border border-slate-300 bg-white shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] text-slate-700',
        hover: 'border border-slate-300 bg-slate-100 text-slate-800',
        focused: 'border border-slate-800 bg-slate-100 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] text-slate-800',
        pressed: 'border border-slate-200 bg-slate-200 text-slate-800',
        disabled: 'border border-slate-100 bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
    },
    bezel: {
      blue: {
        default: 'bg-gradient-to-b from-blue-600 to-[#3358D4] border border-white-20 shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]',
        hover: 'bg-gradient-to-b from-blue-700 to-[#314CC4] border border-white-20 shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]',
        focused: 'bg-gradient-to-b from-blue-700 to-[#314CC4] border border-white-20  shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-gradient-to-b from-blue-800 to-[#314CC4] border border-white-20 shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      black: {
        default: 'bg-gradient-to-b from-slate-700 to-[#020617] border border-white-20 shadow-[0px_0px_0px_1px_#020617,0px_1px_2px_0px_#020617]',
        hover: 'bg-gradient-to-b from-slate-800 to-[#020617] border border-white-20 shadow-[0px_0px_0px_1px_#020617,0px_1px_2px_0px_#020617]',
        focused: 'bg-gradient-to-b from-slate-800 to-[#020617] border border-white-20 shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-gradient-to-b from-slate-950 to-[#0F172A] border border-white-20 shadow-[0px_0px_0px_1px_#0F172A,0px_1px_2px_0px_#1E293B]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      danger: {
        default: 'bg-gradient-to-b from-red-600 to-[#DC2626] border border-white-20 shadow-[0px_0px_0px_1px_#7F1D1D,0px_1px_2px_0px_#450A0A]',
        hover: 'bg-gradient-to-b from-red-700 to-[#B91C1C] border border-white-20 shadow-[0px_0px_0px_1px_#7F1D1D,0px_1px_2px_0px_#450A0A]',
        focused: 'bg-gradient-to-b from-red-700 to-[#B91C1C] border border-white-20 shadow-[0px_0px_0px_5px_rgba(206,_44,_49,_0.12),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-gradient-to-b from-red-800 to-[#991B1B] border border-white-20 shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      orange: {
        default: 'bg-gradient-to-b from-orange-600 to-[#C2410C] border border-white-20 shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#431407]',
        hover: 'bg-gradient-to-b from-orange-700 to-[#9A3412] border border-white-20 shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#431407]',
        focused: 'bg-gradient-to-b from-orange-700 to-[#9A3412] border border-white-20 shadow-[0px_0px_0px_5px_rgba(206,_44,_49,_0.12),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-gradient-to-b from-orange-800 to-[#7C2D12] border border-white-20 shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      purple: {
        default: 'bg-gradient-to-b from-purple-600 to-[#9333EA] border border-white-20 shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#3B0764]',
        hover: 'bg-gradient-to-b from-purple-700 to-[#7E22CE] border border-white-20 shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#3B0764]',
        focused: 'bg-gradient-to-b from-purple-700 to-[#7E22CE] border border-white-20 shadow-[0px_0px_0px_5px_rgba(168,_85,_247,_0.12),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-gradient-to-b from-purple-800 to-[#6B21A8] border border-white-20 shadow-[0px_0px_0px_1px_#3B0764,0px_1px_2px_0px_#3B0764]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      neutral: {
        default: 'bg-gradient-to-b from-slate-25 to-slate-50 border border-black-20 shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#cbd5e1] text-slate-700',
        hover: 'bg-gradient-to-b from-slate-50 to-slate-100 border border-black-20 shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#e2e8f0] text-slate-800',
        focused: 'bg-gradient-to-b from-slate-50 to-slate-100 border border-black-20 shadow-[0px_0px_0px_4px_#f1f5f9,0px_0px_0px_2px_#e2e8f0] text-slate-800',
        pressed: 'bg-gradient-to-b from-slate-100 to-slate-200 border border-black-20 shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#e2e8f0] text-slate-800',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
    },
    link: {
      blue: {
        default: '',
        hover: 'text-blue-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        focused: 'text-blue-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-blue-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
      black: {
        default: '',
        hover: 'text-slate-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        focused: 'text-slate-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-slate-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
      danger: {
        default: '',
        hover: 'text-red-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        focused: 'text-red-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-red-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
      orange: {
        default: '',
        hover: 'text-orange-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        focused: 'text-orange-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-orange-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
      purple: {
        default: '',
        hover: 'text-purple-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        focused: 'text-purple-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-purple-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
      neutral: {
        default: '',
        hover: 'text-zinc-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4 ',
        focused: 'text-zinc-700 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        pressed: 'text-zinc-800 underline decoration-solid decoration-skip-none decoration-2 underline-offset-4',
        disabled: 'text-gray-400 cursor-not-allowed pointer-events-none',
      },
    },
    icon: {
      blue: {
        default: 'bg-blue-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-blue-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-blue-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-blue-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      black: {
        default: 'bg-slate-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-slate-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-slate-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-slate-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      danger: {
        default: 'bg-red-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-red-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-red-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-red-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      orange: {
        default: 'bg-orange-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-orange-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-orange-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-orange-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      purple: {
        default: 'bg-purple-600 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        hover: 'bg-purple-700 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        focused: 'bg-purple-700 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]',
        pressed: 'bg-purple-800 shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)]',
        disabled: 'bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
      neutral: {
        default: 'border border-slate-300 bg-white shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] text-slate-700',
        hover: 'border border-slate-300 bg-slate-100 text-slate-800',
        focused: 'border border-slate-800 bg-slate-100 shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] text-slate-800',
        pressed: 'border border-slate-200 bg-slate-200 text-slate-800',
        disabled: 'border border-slate-100 bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none',
      },
    },
        // stateClasses - End
  };

  const isIconOnly = !iconOnly;

  return (
    <button
      className={cn(
        baseStyles,
        variantClasses[variant][color],
        stateClasses[variant][color][state],
        isIconOnly ? "w-10 h-10" : sizeClasses[size],
        className
      )}
      disabled={state === 'disabled'}
      {...props}
    >
      {isIconOnly ? (
        showRightIcon && rightIcon && (
          <span className={iconSizeClasses[size]} aria-hidden="true">{rightIcon}</span>
        )
      ) : (
        <>
          {showLeftIcon && leftIcon && (
            <span className={iconSizeClasses[size]} aria-hidden="true">{leftIcon}</span>
          )}
          {iconOnly && label && <span>{label}</span>}
          {showRightIcon && rightIcon && (
            <span className={iconSizeClasses[size]} aria-hidden="true">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
}

export default Button;
