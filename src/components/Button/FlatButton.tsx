import React from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../Spinner';

export type Color =  'slate' | 'blue' | 'danger' | 'orange' | 'purple' | 'neutral'  | 'zinc' | 'gray' ;
export type Size = 'sm' | 'md' | 'lg';


export type FlatButtonProps = {
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


export function FlatButton({
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
}: FlatButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-center transition shrink-0 capitalize font-semibold leading-[1] text-white cursor-pointer transition-colors transition-shadow duration-300 ease-in-out';

 const sizeClasses: Record<string, string> = {
   sm: 'text-xs leading-none tracking-[0.015em] h-8 gap-1 p-2',
   md: 'text-sm leading-none tracking-[0.0175em] h-10 gap-1 p-2.5',
   lg: 'text-base leading-none tracking-[0.02em] h-11 gap-2 p-3',
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
     blue:`
      bg-[var(--shadeui-color-blue-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-blue-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-blue-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-blue-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]
      
      dark:bg-[var(--shadeui-color-blue-500)]
      dark:hover:bg-[var(--shadeui-color-blue-400)] 
      dark:focus:bg-[var(--shadeui-color-blue-400)] 
      dark:active:bg-[var(--shadeui-color-blue-300)]
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
      `,
     slate: `
      bg-[var(--shadeui-color-slate-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-slate-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-slate-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-slate-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]
      
      dark:bg-[var(--shadeui-color-slate-500)] 
      dark:hover:bg-[var(--shadeui-color-slate-400)]
      dark:focus:bg-[var(--shadeui-color-slate-400)]
      dark:active:bg-[var(--shadeui-color-slate-300)]
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
     `,
     zinc: `
      bg-[var(--shadeui-color-zinc-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-zinc-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-zinc-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-zinc-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-zinc-100)] disabled:text-[var(--shadeui-color-zinc-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:bg-[var(--shadeui-color-zinc-500)] 
      dark:hover:bg-[var(--shadeui-color-zinc-400)]
      dark:focus:bg-[var(--shadeui-color-zinc-400)]
      dark:active:bg-[var(--shadeui-color-zinc-300)]
      dark:disabled:bg-[var(--shadeui-color-zinc-800)] dark:disabled:text-[var(--shadeui-color-zinc-600)] dark:disabled:shadow-[0px_0px_0px_0px]
    `,
      gray: `
      bg-[var(--shadeui-color-gray-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-gray-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-gray-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-gray-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:bg-[var(--shadeui-color-gray-500)] 
      dark:hover:bg-[var(--shadeui-color-gray-400)]
      dark:focus:bg-[var(--shadeui-color-gray-400)]
      dark:active:bg-[var(--shadeui-color-gray-300)]
      dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] dark:disabled:shadow-[0px_0px_0px_0px]
    `,
     danger: `
      bg-[var(--shadeui-color-red-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-red-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-red-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-red-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:bg-[var(--shadeui-color-red-500)]
      dark:hover:bg-[var(--shadeui-color-red-400)] 
      dark:active:bg-[var(--shadeui-color-red-300)]
      dark:focus:bg-[var(--shadeui-color-red-400)]
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]     
     `,
     orange: `
      bg-[var(--shadeui-color-orange-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-orange-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-orange-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-orange-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:bg-[var(--shadeui-color-orange-500)]
      dark:hover:bg-[var(--shadeui-color-orange-400)]
      dark:focus:bg-[var(--shadeui-color-orange-400)] 
      dark:active:bg-[var(--shadeui-color-orange-300)] 
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
      `,
     purple: `
      bg-[var(--shadeui-color-purple-600)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      hover:bg-[var(--shadeui-color-purple-700)] hover:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      focus:bg-[var(--shadeui-color-purple-700)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] 
      active:bg-[var(--shadeui-color-purple-800)] active:shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:bg-[var(--shadeui-color-purple-500)]
      dark:hover:bg-[var(--shadeui-color-purple-400)]
      dark:focus:bg-[var(--shadeui-color-purple-400)]
      dark:active:bg-[var(--shadeui-color-purple-300)]
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
     `,
     neutral: `
      border border-[var(--shadeui-color-slate-300)] bg-[var(--shadeui-color-white)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] text-[var(--shadeui-color-slate-700)] 
      hover:border-[var(--shadeui-color-slate-300)] hover:bg-[var(--shadeui-color-slate-50)] hover:text-[var(--shadeui-color-slate-800)] 
      focus:border-[var(--shadeui-color-slate-800)] focus:bg-[var(--shadeui-color-slate-100)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF] focus:text-[var(--shadeui-color-slate-800)] 
      active:border-[var(--shadeui-color-slate-200)] active:bg-[var(--shadeui-color-slate-200)] active:text-[var(--shadeui-color-slate-800)] 
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:cursor-not-allowed disabled:pointer-events-none disabled:shadow-[0px_0px_0px_0px]

      dark:border-[var(--shadeui-color-slate-700)] dark:bg-[var(--shadeui-color-slate-900)] dark:text-[var(--shadeui-color-slate-200)] 
      dark:hover:border-[var(--shadeui-color-slate-600)] dark:hover:bg-[var(--shadeui-color-slate-800)] dark:hover:text-[var(--shadeui-color-slate-100)] 
      dark:focus:border-[var(--shadeui-color-slate-500)] dark:focus:bg-[var(--shadeui-color-slate-800)] dark:focus:text-[var(--shadeui-color-slate-100)] 
      dark:active:border-[var(--shadeui-color-slate-500)] dark:active:bg-[var(--shadeui-color-slate-700)] dark:active:text-[var(--shadeui-color-slate-100)]
      dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
     `,
   //variantClasses - End
 };

 const activeStyleMap:  Record<Color, string> = {
    blue:`
     disabled:bg-[var(--shadeui-color-blue-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-blue-300)]
     `,
    slate: `
     disabled:bg-[var(--shadeui-color-slate-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-slate-300)]
    `,
    zinc: `
     disabled:bg-[var(--shadeui-color-zinc-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-zinc-300)]
    `,
    gray: `
     disabled:bg-[var(--shadeui-color-gray-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-gray-300)]
    `,
    danger: `
     disabled:bg-[var(--shadeui-color-red-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-red-300)]    
    `,
    orange: ` 
     disabled:bg-[var(--shadeui-color-orange-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-orange-300)] 
     `,
    purple: `
     disabled:bg-[var(--shadeui-color-purple-800)] shadow-[0px_1px_2px_0px_rgba(0,_0,_0,_0.05)] 
     dark:bg-[var(--shadeui-color-purple-300)]
    `,
    neutral: `
     border-[var(--shadeui-color-slate-200)] bg-[var(--shadeui-color-slate-200)] text-[var(--shadeui-color-slate-800)] 
     dark:border-[var(--shadeui-color-slate-500)] dark:bg-[var(--shadeui-color-slate-700)] dark:text-[var(--shadeui-color-slate-100)]
    `, 
};


const showIconOnly = iconOnly;
const isDisabled = props.disabled || isLoading
const buttonClassNames = cn(
  baseStyles,
  sizeClasses[size],
  colorClasses[color],
  isLoading && activeStyleMap[color],
  isDisabled,
  className,
  
);


return (
  <button
    className={buttonClassNames}
    disabled={isDisabled || isLoading}
    aria-busy={isLoading}
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

export default FlatButton;


