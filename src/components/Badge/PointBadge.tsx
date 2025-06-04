import React from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../Spinner';


export type Variant = 'accent' | 'fill' | 'outline';
export type Color =  'blue' | 'orange' | 'purple' | 'danger' | 'success' | 'warning' | 'zinc' | 'gray' | 'slate' ;
export type Size = 'sm' | 'md' | 'lg';

export type PointBadgeProps = {
    label?: string;
    variant?: Variant;
    color?: Color;
    size?: Size;
    rightIcon?: React.ReactNode;
    showRightIcon?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PointBadge({
    label,
    variant = 'accent',
    color = 'blue',
    size = 'md',
    rightIcon,
    showRightIcon = true,
    isLoading = false,
    loadingText,
    className,
    ...props
}: PointBadgeProps){
    const baseStyles = 'inline-flex items-center justify-center rounded-full text-center capitalize font-medium leading-[1]';

    const sizeClasses: Record<string, string> = {
        sm: 'text-xs font-medium leading-[14px] tracking-[0.144px] h-5 px-2 py-1 gap-1',
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

    const pointSizeClasses: Record<Size, string> = {
        sm: 'w-1 h-1 ml-1',
        md: 'w-1.5 h-1.5 ml-1',    
        lg: 'w-2 h-2 ml-1', 
      };

    const pointStyleClasses: Record<Color, string> = {
                blue:`
                bg-[var(--shadeui-color-blue-600)] 
                disabled:bg-[var(--shadeui-color-gray-400)] 

                dark:bg-[var(--shadeui-color-blue-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                orange:`
                bg-[var(--shadeui-color-orange-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-orange-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                purple:`
                bg-[var(--shadeui-color-purple-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:text-[var(--shadeui-color-purple-900)]
                dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                danger:`
                bg-[var(--shadeui-color-red-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-red-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                success:`
                bg-[var(--shadeui-color-green-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-green-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                warning:`
                bg-[var(--shadeui-color-yellow-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-yellow-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                zinc:`
                bg-[var(--shadeui-color-zinc-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-zinc-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                gray:`
                bg-[var(--shadeui-color-gray-600)]
                disabled:bg-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-gray-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
                slate:`
                bg-[var(--shadeui-color-slate-600)]
                disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-slate-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-600)]
                `,
     }

    const optionClasses:  Record<Variant, Record<Color, string>>  = {
       //variantClasses - Start
            accent:{
                blue:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-blue-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-blue-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                purple:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-purple-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-purple-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                orange:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-orange-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-orange-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                danger:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-red-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-red-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                success:`
                 bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-green-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-green-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                warning:`
                 bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-yellow-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-yellow-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                zinc:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-zinc-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-zinc-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                gray:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-gray-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-gray-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                slate:`
                bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-slate-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-slate-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
            },
            fill:{
                blue:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-blue-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-blue-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,                
                purple:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-purple-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-purple-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,                
                orange:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-orange-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-orange-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,                
                danger:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-red-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-red-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,                
                success:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-green-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-green-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,                
                warning:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-yellow-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-yellow-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                zinc:`
                border-1 border-[var(--shadeui-color-zinc-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-zinc-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-zinc-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-zinc-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                gray:`
                border-1 border-[var(--shadeui-color-gray-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-gray-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-gray-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-gray-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `,
                slate:`
                border-1 border-[var(--shadeui-color-slate-200)] bg-[var(--shadeui-color-gray-25)] text-[var(--shadeui-color-slate-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]
                
                dark:border-[var(--shadeui-color-slate-600)] dark:bg-[var(--shadeui-color-white-20)] dark:text-[var(--shadeui-color-slate-900)]
                dark:disabled:border-[var(--shadeui-color-gray-600)]  dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)]
                `
            },
            outline:{
            blue:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-blue-600)] 
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-blue-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            purple:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-purple-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-purple-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            orange:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-orange-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-orange-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            danger:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-red-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-red-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            success:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-green-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-green-900)]  dark:text-[var(--shadeui-color-green-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            warning:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-yellow-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-yellow-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            zinc:`
                border border-[var(--shadeui-color-zinc-200)] text-[var(--shadeui-color-zinc-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-zinc-900)]  dark:text-[var(--shadeui-color-zinc-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            gray:`
                border border-[var(--shadeui-color-gray-200)] text-[var(--shadeui-color-gray-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-gray-900)]  dark:text-[var(--shadeui-color-gray-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `,
            slate:`
                border border-[var(--shadeui-color-slate-200)] text-[var(--shadeui-color-slate-600)]
                disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)]

                dark:border-[var(--shadeui-color-slate-900)]  dark:text-[var(--shadeui-color-slate-900)]
                dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] 
            `
            },
        //variantClasses - End  
     }

    const hasRightIcon = rightIcon && showRightIcon;
    const isDisabled = props.disabled || isLoading

    const PointbadgeClassNames = cn(
        baseStyles,
        sizeClasses[size],
        optionClasses[variant][color],
        isLoading,
        isDisabled && `bg-[var(--shadeui-color-gray-100)] text-[var(--shadeui-color-gray-400)] dark:bg-[var(--shadeui-color-gray-800)] dark:text-[var(--shadeui-color-gray-600)]`,
        className
    );

return (
  <span className={PointbadgeClassNames} aria-busy={isLoading} {...props}>
    {isLoading ? (
      <>
        <Spinner className={spinnerSizeClasses[size]} />
        {loadingText && <span>{loadingText}</span>}
      </>
    ) : (
      <>
        {/* Point always shows */}
        <span className={cn('rounded-full', pointSizeClasses[size], pointStyleClasses[color])} />


        {/* Label always required */}
        {label && <span>{label}</span>}


        {/* Optional right icon */}
        {hasRightIcon && (
          <span className={iconSizeClasses[size]}>
            {rightIcon}
          </span>
        )}
      </>
    )}
  </span>
);

}



export default PointBadge