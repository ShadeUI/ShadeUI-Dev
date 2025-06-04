import React from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../Spinner';

export type Color =  'neutral' | 'blue' | 'danger' | 'orange' | 'purple' | 'slate' | 'zinc' | 'gray' ;
export type Size = 'sm' | 'md' | 'lg';


export type LinkButtonProps = {
 label?: string;
 color?: Color;
 size?: Size;
 leftIcon?: React.ReactNode;
 rightIcon?: React.ReactNode;
 showLeftIcon?: boolean;
 showRightIcon?: boolean;
 iconOnly?: boolean;
 isLoading?: boolean;
 loadingText?: string;
 className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


export function LinkButton({
 label,
 color = 'blue',
 size = 'md',
 leftIcon,
 rightIcon,
 showLeftIcon = true,
 showRightIcon = true,
 iconOnly = false,
 isLoading = false,
 loadingText,
 className,
 ...props
}: LinkButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-center transition shrink-0 capitalize font-semibold leading-[1] text-white cursor-pointer transition-colors transition-shadow duration-300 ease-in-out';

 const sizeClasses: Record<string, string> = {
   sm: 'text-xs leading-none tracking-[0.015em] h-8 gap-1 py-2',
   md: 'text-sm leading-none tracking-[0.0175em] h-10 gap-1 py-2.5',
   lg: 'text-base leading-none tracking-[0.02em] h-11 gap-2 py-3',
 };

 const iconSizeClasses: Record<string, string> = {
   sm: 'w-4 h-4 inline-flex items-center justify-center',
   md: 'w-5 h-5 inline-flex items-center justify-center',
   lg: 'w-6 h-6 inline-flex items-center justify-center',
 };

 const spinnerSizeClasses: Record<Size, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',  
};

 const colorClasses:  Record<Color, string> = {
   //variantClasses - Start
   
     blue: `
     text-[var(--shadeui-color-blue-600)]
     hover:text-[var(--shadeui-color-blue-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
     focus:text-[var(--shadeui-color-blue-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
     active:text-[var(--shadeui-color-blue-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
     disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

     dark:text-[var(--shadeui-color-blue-400)]
     dark:hover:text-[var(--shadeui-color-blue-300)]
     dark:focus:text-[var(--shadeui-color-blue-300)]
     dark:active:text-[var(--shadeui-color-blue-200)]
     dark:disabled:text-[var(--shadeui-color-gray-600)]
     `,
     neutral: `
      text-[var(--shadeui-color-gray-25)]
      hover:text-[var(--shadeui-color-gray-50)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-gray-50)] focus:underline decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-gray-100)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-300)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-slate-50)]
      dark:hover:text-[var(--shadeui-color-slate-100)]
      dark:focus:text-[var(--shadeui-color-slate-100)]
      dark:active:text-[var(--shadeui-color-slate-200)]
      dark:disabled:text-[var(--shadeui-color-gray-900)]
      `,
     danger: `
      text-[var(--shadeui-color-red-600)]
      hover:text-[var(--shadeui-color-red-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-red-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-red-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-red-400)]
      dark:hover:text-[var(--shadeui-color-red-300)]
      dark:focus:text-[var(--shadeui-color-red-300)]
      dark:active:text-[var(--shadeui-color-red-200)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
      `,
     orange: `
      text-[var(--shadeui-color-orange-600)]
      hover:text-[var(--shadeui-color-orange-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-orange-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-orange-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-orange-400)]
      dark:hover:text-[var(--shadeui-color-orange-300)]
      dark:focus:text-[var(--shadeui-color-orange-300)]
      dark:active:text-[var(--shadeui-color-orange-200)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
     `,
     purple: `
      text-[var(--shadeui-color-purple-600)]
      hover:text-[var(--shadeui-color-purple-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-purple-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-purple-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-purple-400)]
      dark:hover:text-[var(--shadeui-color-purple-300)]
      dark:focus:text-[var(--shadeui-color-purple-300)]
      dark:active:text-[var(--shadeui-color-purple-200)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
      `,
     zinc: `
      text-[var(--shadeui-color-zinc-600)]
      hover:text-[var(--shadeui-color-zinc-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-zinc-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-zinc-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-zinc-300)]
      dark:hover:text-[var(--shadeui-color-zinc-200)]
      dark:focus:text-[var(--shadeui-color-zinc-200)]
      dark:active:text-[var(--shadeui-color-zinc-100)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
      `,
     slate: `
      text-[var(--shadeui-color-slate-600)]
      hover:text-[var(--shadeui-color-slate-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-slate-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-slate-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-slate-300)]
      dark:hover:text-[var(--shadeui-color-slate-200)]
      dark:focus:text-[var(--shadeui-color-slate-200)]
      dark:active:text-[var(--shadeui-color-slate-100)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
      `,
     gray: `
      text-[var(--shadeui-color-gray-500)]
      hover:text-[var(--shadeui-color-gray-700)] hover:underline hover:decoration-solid hover:decoration-skip-none hover:decoration-2 hover:underline-offset-4
      focus:text-[var(--shadeui-color-gray-700)] focus:underline focus:decoration-solid focus:decoration-skip-none focus:decoration-2 focus:underline-offset-4
      active:text-[var(--shadeui-color-gray-800)] active:underline active:decoration-solid active:decoration-skip-none active:decoration-2 active:underline-offset-4
      disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none

      dark:text-[var(--shadeui-color-gray-300)]
      dark:hover:text-[var(--shadeui-color-gray-200)]
      dark:focus:text-[var(--shadeui-color-gray-200)]
      dark:active:text-[var(--shadeui-color-gray-100)]
      dark:disabled:text-[var(--shadeui-color-gray-600)]
      `,
   //variantClasses - End
 };

 const activeStyleMap:  Record<Color, string> = {
    blue: `
    text-[var(--shadeui-color-blue-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
    dark:text-[var(--shadeui-color-blue-200)]
    `,
    neutral: `
     text-[var(--shadeui-color-slate-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-slate-100)]
     `,
    danger: `
     text-[var(--shadeui-color-red-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-red-200)]
     `,
    orange: `
     text-[var(--shadeui-color-orange-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-orange-200)]
    `,
    purple: `
     text-[var(--shadeui-color-purple-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-purple-200)]
     `,
    zinc: `
     text-[var(--shadeui-color-zinc-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-zinc-100)]
     `,
    slate: `
     text-[var(--shadeui-color-slate-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-slate-100)]
     `,
    gray: `
     text-[var(--shadeui-color-gray-800)] underline decoration-solid decoration-skip-none decoration-2 underline-offset-4
     dark:text-[var(--shadeui-color-gray-100)]
     `,
};


const showIconOnly = iconOnly;
const isDisabled = props.disabled || isLoading

const buttonClassNames = cn(
  baseStyles,
  sizeClasses[size],
  colorClasses[color],
  isLoading && activeStyleMap[color],
  className,
  
);


return (
  <button
    className={buttonClassNames}
    aria-busy={isLoading}
    disabled={isDisabled || isLoading}
    {...props}
  >
    {isLoading ? (
      <>
        <Spinner
          className={cn(spinnerSizeClasses[size])} aria-hidden="true" />
        {!showIconOnly && loadingText && <span>{loadingText}</span>}
      </>
    ) : showIconOnly ? (
      leftIcon && showLeftIcon ? (
        <span className={iconSizeClasses[size]}>{leftIcon}</span>
      ) : (
        <span className={iconSizeClasses[size]} aria-hidden="true" />
      )
    ) : (
      <>

        {leftIcon && showLeftIcon && (
          <span className={cn(iconSizeClasses[size])}>
            {leftIcon}
          </span>
        )}


        {label && <span>{label}</span>}


        {rightIcon && showRightIcon && (
          <span className={cn(iconSizeClasses[size])}>
            {rightIcon}
          </span>
        )}
      </>
    )}
  </button>
);

}

export default LinkButton;


