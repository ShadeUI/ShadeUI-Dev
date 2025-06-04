import React from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../Spinner';

export type Variant = 'accent' | 'fill' | 'outline'  ;
export type Color =  'blue' | 'orange' | 'purple' | 'danger' | 'success' | 'warning' | 'zinc' | 'gray' | 'slate' ;
export type Size = 'sm' | 'md' | 'lg';

export type SolidBadgeProps = {
    label?: string;
    variant?: Variant;
    color?: Color;
    size?: Size;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    showLeftIcon?: boolean;
    showRightIcon?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SolidBadge({
    label,
    variant = 'accent',
    color = 'blue',
    size = 'md',
    leftIcon,
    rightIcon,
    showLeftIcon = true,
    showRightIcon = true,
    isLoading = false,
    loadingText,
    className,
    ...props
}: SolidBadgeProps){
    const baseStyles = 'inline-flex items-center justify-center rounded-full text-center capitalize font-medium leading-[1]';

    const sizeClasses: Record<string, string> = {
        sm: 'text-xs font-medium leading-[14px] tracking-[0.144px] h-[22px] px-2 py-1 gap-1',
        md: 'text-sm font-medium leading-[16px] tracking-[0.168px] h-6 px-2 py-1 gap-1',
        lg: 'text-base font-medium leading-[20px] tracking-[0.192px] h-7 gap-1 py-1 px-3',
      };

    const iconSizeClasses: Record<string, string> = {
        sm: 'w-3 h-3 inline-flex items-center justify-center',
        md: 'w-3.5 h-3.5 inline-flex items-center justify-center',
        lg: 'w-4 h-4 inline-flex items-center justify-center',
    };

     const spinnerSizeClasses: Record<Size, string> = {
      sm: 'w-3 h-3',
      md: 'w-3.5 h-3.5',
      lg: 'w-4 h-4',  
    };
  
    const optionClasses:  Record<Variant, Record<Color, string>>  = {
       //variantClasses - Start
        accent:{
            blue:`
            bg-[var(--shadeui-color-blue-50)] text-[var(--shadeui-color-blue-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-blue-300)] dark:text-[var(--shadeui-color-blue-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            orange:`
            bg-[var(--shadeui-color-orange-50)] text-[var(--shadeui-color-orange-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-orange-300)] dark:text-[var(--shadeui-color-orange-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            purple:`
            bg-[var(--shadeui-color-purple-50)] text-[var(--shadeui-color-purple-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-purple-300)] dark:text-[var(--shadeui-color-purple-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            danger:`
            bg-[var(--shadeui-color-red-50)] text-[var(--shadeui-color-red-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-red-300)] dark:text-[var(--shadeui-color-red-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            success:`
            bg-[var(--shadeui-color-green-50)] text-[var(--shadeui-color-green-700)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-green-300)] dark:text-[var(--shadeui-color-green-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            warning:`
            bg-[var(--shadeui-color-yellow-50)] text-[var(--shadeui-color-yellow-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-yellow-300)] dark:text-[var(--shadeui-color-yellow-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            zinc:`
            bg-[var(--shadeui-color-zinc-50)] text-[var(--shadeui-color-zinc-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-zinc-300)] dark:text-[var(--shadeui-color-zinc-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            gray:`
            bg-[var(--shadeui-color-gray-50)] text-[var(--shadeui-color-gray-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-gray-300)] dark:text-[var(--shadeui-color-gray-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            slate:`
            bg-[var(--shadeui-color-slate-50)] text-[var(--shadeui-color-slate-600)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-slate-300)] dark:text-[var(--shadeui-color-slate-900)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
        },
        fill:{
            blue:`
            bg-[var(--shadeui-color-blue-600)] text-[var(--shadeui-color-blue-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-blue-900)] dark:text-[var(--shadeui-color-blue-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            orange:`
            bg-[var(--shadeui-color-orange-600)] text-[var(--shadeui-color-orange-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-orange-900)] dark:text-[var(--shadeui-color-orange-300)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            purple:`
            bg-[var(--shadeui-color-purple-600)] text-[var(--shadeui-color-purple-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-purple-900)] dark:text-[var(--shadeui-color-purple-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            danger:`
            bg-[var(--shadeui-color-red-600)] text-[var(--shadeui-color-red-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-red-900)] dark:text-[var(--shadeui-color-red-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,                
            success:`
            bg-[var(--shadeui-color-green-700)] text-[var(--shadeui-color-green-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-green-900)] dark:text-[var(--shadeui-color-green-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,                
            warning:`
            bg-[var(--shadeui-color-yellow-600)] text-[var(--shadeui-color-yellow-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-yellow-900)] dark:text-[var(--shadeui-color-yellow-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            zinc:`
            bg-[var(--shadeui-color-zinc-600)] text-[var(--shadeui-color-zinc-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-zinc-900)] dark:text-[var(--shadeui-color-zinc-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            gray:`
            bg-[var(--shadeui-color-gray-600)] text-[var(--shadeui-color-gray-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-gray-900)] dark:text-[var(--shadeui-color-gray-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `,
            slate:`
            bg-[var(--shadeui-color-purple-600)] text-[var(--shadeui-color-purple-50)]
            disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

            dark:bg-[var(--shadeui-color-purple-900)] dark:text-[var(--shadeui-color-purple-100)]
            dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
            `
        },
        outline:{
            blue:`
                border-1 border-[var(--shadeui-color-blue-600)] text-[var(--shadeui-color-blue-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-blue-800)] dark:text-[var(--shadeui-color-blue-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]                         
            `,
            orange:`
                border-1 border-[var(--shadeui-color-orange-600)] text-[var(--shadeui-color-orange-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-orange-800)] dark:text-[var(--shadeui-color-orange-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]   
            `,
            purple:`
                border-1 border-[var(--shadeui-color-purple-600)] text-[var(--shadeui-color-purple-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-purple-800)] dark:text-[var(--shadeui-color-purple-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            danger:`
                border-1 border-[var(--shadeui-color-red-600)] text-[var(--shadeui-color-red-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-red-800)] dark:text-[var(--shadeui-color-red-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            success:`
                border-1 border-[var(--shadeui-color-green-700)] text-[var(--shadeui-color-green-700)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-green-800)] dark:text-[var(--shadeui-color-green-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            warning:`
                border-1 border-[var(--shadeui-color-yellow-600)] text-[var(--shadeui-color-yellow-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-yellow-800)] dark:text-[var(--shadeui-color-yellow-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            zinc:`
                border-1 border-[var(--shadeui-color-zinc-600)] text-[var(--shadeui-color-zinc-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-zinc-800)] dark:text-[var(--shadeui-color-zinc-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            gray:`
                border-1 border-[var(--shadeui-color-gray-600)] text-[var(--shadeui-color-gray-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)] dark:text-[var(--shadeui-color-gray-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            slate:`
                border-1 border-[var(--shadeui-color-slate-600)] text-[var(--shadeui-color-slate-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-slate-800)] dark:text-[var(--shadeui-color-slate-800)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `
        },
        //variantClasses - End  
     }

    const isDisabled = props.disabled || isLoading
    const SolidBadgeClassNames = cn(
        baseStyles,
        sizeClasses[size],
        optionClasses[variant][color],
        isLoading,
        isDisabled && `bg-[var(--shadeui-color-gray-100)] text-[var(--shadeui-color-gray-400)] dark:bg-[var(--shadeui-color-gray-800)] dark:text-[var(--shadeui-color-gray-600)]`,
        className
    );

    return (
    <span
      className={SolidBadgeClassNames}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner className={spinnerSizeClasses[size]} aria-hidden="true" />
          {loadingText && <span>{loadingText}</span>}
        </>
      ) : (
        <>
          {leftIcon && showLeftIcon && (
            <span className={iconSizeClasses[size]}>{leftIcon}</span>
          )}

          {/* Only show label if provided */}
          {label && <span>{label}</span>}

          {rightIcon && showRightIcon && label && (
            <span className={iconSizeClasses[size]}>{rightIcon}</span>
          )}
        </>
      )}
    </span>
  );
};


export default SolidBadge