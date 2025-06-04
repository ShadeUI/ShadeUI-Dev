import React from 'react';
import { cn } from '@/lib/utils';
import Spinner from '../Spinner';


export type Color =  'slate' | 'blue' | 'danger' | 'orange' | 'purple' | 'zinc'  | 'gray'  | 'neutral'  ;
export type Size = 'sm' | 'md' | 'lg';


export type BezelButtonProps = {
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


export function BezelButton({
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
}: BezelButtonProps) {
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

 const colorClasses: Record<Color, string> = {
   //variantClasses - Start

     blue: `
       bg-gradient-to-b from-[var(--shadeui-color-blue-600)] to-[#3358D4] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]
       hover:bg-gradient-to-b hover:from-[var(--shadeui-color-blue-700)] hover:to-[#314CC4] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-blue-700)] focus:to-[#314CC4] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#FFF]
       active:bg-gradient-to-b active:from-[var(--shadeui-color-blue-800)] active:to-[#314CC4] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]

       disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:from-[var(--shadeui-color-blue-500)] dark:to-[#3C63DF] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#3C63DF,0px_1px_2px_0px_#2A3B8C]
       dark:hover:from-[var(--shadeui-color-blue-600)] dark:hover:to-[#3C63DF] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#3C63DF,0px_1px_2px_0px_#2A3B8C]   
       dark:focus:from-[var(--shadeui-color-blue-600)] dark:focus:to-[#3C63DF] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_5px_rgba(49,_76,_196,_0.08),_0px_0px_0px_2px_#1F1F1F] 
       dark:active:from-[var(--shadeui-color-blue-700)] dark:active:to-[#3C63DF] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#3C63DF,0px_1px_2px_0px_#2A3B8C] 

       dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
     slate: `
       bg-gradient-to-b from-[var(--shadeui-color-slate-700)] to-[#020617] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#020617,0px_1px_2px_0px_#020617] 
       hover:bg-gradient-to-b hover:from-[var(--shadeui-color-slate-800)] hover:to-[#020617] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#020617,0px_1px_2px_0px_#020617]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-slate-800)] focus:to-[#020617] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#FFF]
       active:bg-gradient-to-b active:from-[var(--shadeui-color-slate-950)] active:to-[#0F172A] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#0F172A,0px_1px_2px_0px_#1E293B]
       
      disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:bg-gradient-to-b dark:from-[var(--shadeui-color-slate-950)] dark:to-[#0f172a] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#0f172a,0px_1px_2px_0px_#0f172a]
       dark:hover:from-[var(--shadeui-color-slate-900)] dark:hover:to-[#0f172a] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#0f172a,0px_1px_2px_0px_#0f172a]
       dark:focus:from-[var(--shadeui-color-slate-900)] dark:focus:to-[#0f172a] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#0f172a]
       dark:active:from-[var(--shadeui-color-slate-800)] dark:active:to-[#1e293b] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#1e293b,0px_1px_2px_0px_#1e293b]

        dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
      zinc: `
        bg-gradient-to-b from-[var(--shadeui-color-zinc-700)] to-[#09090b] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#09090b,0px_1px_2px_0px_#09090b] 
        hover:bg-gradient-to-b hover:from-[var(--shadeui-color-zinc-800)] hover:to-[#09090b] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#09090b,0px_1px_2px_0px_#09090b]
        focus:bg-gradient-to-b focus:from-[var(--shadeui-color-zinc-800)] focus:to-[#09090b] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#FFF]
        active:bg-gradient-to-b active:from-[var(--shadeui-color-zinc-950)] active:to-[#18181b] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#18181b,0px_1px_2px_0px_#27272a]

        disabled:bg-[var(--shadeui-color-zinc-100)] disabled:text-[var(--shadeui-color-zinc-400)] disabled:pointer-events-none
        disabled:from-[var(--shadeui-color-zinc-100)] disabled:to-[var(--shadeui-color-zinc-100)] disabled:border-[var(--shadeui-color-zinc-100)] disabled:shadow-[0px_0px_0px_0px]

        dark:bg-gradient-to-b dark:from-[var(--shadeui-color-zinc-950)] dark:to-[#18181b] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#18181b,0px_1px_2px_0px_#18181b]
        dark:hover:from-[var(--shadeui-color-zinc-900)] dark:hover:to-[#18181b] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#18181b,0px_1px_2px_0px_#18181b]
        dark:focus:from-[var(--shadeui-color-zinc-900)] dark:focus:to-[#18181b] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#18181b]
        dark:active:from-[var(--shadeui-color-zinc-800)] dark:active:to-[#27272a] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#27272a,0px_1px_2px_0px_#27272a]

        dark:disabled:bg-[var(--shadeui-color-zinc-800)] dark:disabled:text-[var(--shadeui-color-zinc-600)] dark:disabled:shadow-[0px_0px_0px_0px]
        dark:disabled:from-[var(--shadeui-color-zinc-800)] dark:disabled:to-[var(--shadeui-color-zinc-800)] dark:disabled:border-[var(--shadeui-color-zinc-800)]
      `,
      gray: `
        bg-gradient-to-b from-[var(--shadeui-color-gray-700)] to-[#030712] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#030712,0px_1px_2px_0px_#030712] 
        hover:bg-gradient-to-b hover:from-[var(--shadeui-color-gray-800)] hover:to-[#030712] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#030712,0px_1px_2px_0px_#030712]
        focus:bg-gradient-to-b focus:from-[var(--shadeui-color-gray-800)] focus:to-[#030712] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#FFF]
        active:bg-gradient-to-b active:from-[var(--shadeui-color-gray-950)] active:to-[#111827] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#111827,0px_1px_2px_0px_#1f2937]

        disabled:bg-[var(--shadeui-color-gray-100)] disabled:text-[var(--shadeui-color-gray-400)] disabled:pointer-events-none
        disabled:from-[var(--shadeui-color-gray-100)] disabled:to-[var(--shadeui-color-gray-100)] disabled:border-[var(--shadeui-color-gray-100)] disabled:shadow-[0px_0px_0px_0px]

        dark:bg-gradient-to-b dark:from-[var(--shadeui-color-gray-950)] dark:to-[#111827] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#111827,0px_1px_2px_0px_#111827]
        dark:hover:from-[var(--shadeui-color-gray-900)] dark:hover:to-[#111827] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#111827,0px_1px_2px_0px_#111827]
        dark:focus:from-[var(--shadeui-color-gray-900)] dark:focus:to-[#111827] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_4px_rgba(128,_131,_141,_0.12),_0px_0px_0px_2px_#111827]
        dark:active:from-[var(--shadeui-color-gray-800)] dark:active:to-[#1f2937] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#1f2937,0px_1px_2px_0px_#1f2937]

        dark:disabled:bg-[var(--shadeui-color-gray-800)] dark:disabled:text-[var(--shadeui-color-gray-600)] dark:disabled:shadow-[0px_0px_0px_0px]
        dark:disabled:from-[var(--shadeui-color-gray-800)] dark:disabled:to-[var(--shadeui-color-gray-800)] dark:disabled:border-[var(--shadeui-color-gray-800)]
      `,
     danger: `
       bg-gradient-to-b from-[var(--shadeui-color-red-600)] to-[#DC2626] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#7F1D1D,0px_1px_2px_0px_#450A0A]
       hover:bg-gradient-to-b hover:from-[var(--shadeui-color-red-700)] hover:to-[#B91C1C] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#7F1D1D,0px_1px_2px_0px_#450A0A]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-red-700)] focus:to-[#B91C1C] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_5px_rgba(206,_44,_49,_0.12),_0px_0px_0px_2px_#FFF]
       active:bg-gradient-to-b active:from-[var(--shadeui-color-red-800)] active:to-[#991B1B] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A]
       
        disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:from-[var(--shadeui-color-red-800)] dark:to-[#7f1d1d] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#7f1d1d,0px_1px_2px_0px_#450A0A]
       dark:hover:from-[var(--shadeui-color-red-900)] dark:hover:to-[#7f1d1d] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#7f1d1d,0px_1px_2px_0px_#450A0A]
       dark:focus:from-[var(--shadeui-color-red-900)] dark:to-[#7f1d1d] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_5px_rgba(206,_44,_49,_0.12),_0px_0px_0px_2px_#7f1d1d]
       dark:active:from-[var(--shadeui-color-red-950)] dark:active:to-[#450a0a] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#450a0a,0px_1px_2px_0px_#450a0a]
        
        dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
     orange: `
       bg-gradient-to-b from-[var(--shadeui-color-orange-600)] to-[#C2410C] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#431407]
       hover:bg-gradient-to-b hover:from-[var(--shadeui-color-orange-700)] hover:to-[#9A3412] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#431407]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-orange-700)] focus:to-[#9A3412] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_5px_rgba(206,_44,_49,_0.12),_0px_0px_0px_2px_#FFF]
       active:bg-gradient-to-b active:from-[var(--shadeui-color-orange-800)] active:to-[#7C2D12] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A]
       
       disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:from-[var(--shadeui-color-orange-700)] dark:to-[#7C2D12] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#7C2D12]
       dark:hover:from-[var(--shadeui-color-orange-800)] dark:hover:to-[#7C2D12] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#7C2D12,0px_1px_2px_0px_#7C2D12]
       dark:focus:from-[var(--shadeui-color-orange-800)] dark:to-[#7C2D12] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_5px_rgba(234,_88,_12,_0.12),_0px_0px_0px_2px_#7C2D12]
       dark:active:from-[var(--shadeui-color-orange-900)] dark:active:to-[#431407] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#431407,0px_1px_2px_0px_#431407]
       
        dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
     purple: `
       bg-gradient-to-b from-[var(--shadeui-color-purple-600)] to-[#9333EA] border border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#3B0764]
       hover:bg-gradient-to-b hover:from-[var(--shadeui-color-purple-700)] hover:to-[#7E22CE] hover:border-[var(--shadeui-color-white-20)] hover:shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#3B0764]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-purple-700)] focus:to-[#7E22CE] focus:border-[var(--shadeui-color-white-20)] focus:shadow-[0px_0px_0px_5px_rgba(168,_85,_247,_0.12),_0px_0px_0px_2px_#FFF]
       active:bg-gradient-to-b active:from-[var(--shadeui-color-purple-800)] active:to-[#6B21A8] active:border-[var(--shadeui-color-white-20)] active:shadow-[0px_0px_0px_1px_#3B0764,0px_1px_2px_0px_#3B0764]
       
        disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:from-[var(--shadeui-color-purple-800)] dark:to-[#581C87] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#581C87]
       dark:hover:from-[var(--shadeui-color-purple-900)] dark:hover:to-[#581C87] dark:hover:border-[var(--shadeui-color-white-10)] dark:hover:shadow-[0px_0px_0px_1px_#581C87,0px_1px_2px_0px_#581C87]
       dark:focus:from-[var(--shadeui-color-purple-900)] dark:to-[#581C87] dark:focus:border-[var(--shadeui-color-white-10)] dark:focus:shadow-[0px_0px_0px_5px_rgba(147,_51,_234,_0.12),_0px_0px_0px_2px_#581C87]
       dark:active:from-[var(--shadeui-color-purple-950)] dark:active:to-[#3B0764] dark:active:border-[var(--shadeui-color-white-10)] dark:active:shadow-[0px_0px_0px_1px_#3B0764,0px_1px_2px_0px_#3B0764]
       
        dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
     neutral: `
       bg-gradient-to-b from-[var(--shadeui-color-slate-25)] to-[var(--shadeui-color-slate-50)] border border-[var(--shadeui-color-black-20)] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#cbd5e1] text-[var(--shadeui-color-text-700)]
       hover:bg-gradient-to-b from-[var(--shadeui-color-slate-50)] hover:to-[var(--shadeui-color-slate-100)] hover:border-[var(--shadeui-color-black-20)] hover:shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#e2e8f0] hover:text-[var(--shadeui-color-text-800)]
       focus:bg-gradient-to-b focus:from-[var(--shadeui-color-slate-50)] focus:to-[var(--shadeui-color-slate-100)] focus:border-[var(--shadeui-color-black-20)] focus:shadow-[0px_0px_0px_4px_#f1f5f9,0px_0px_0px_2px_#e2e8f0] focus:text-[var(--shadeui-color-text-800)]
       active:bg-gradient-to-b  active:from-[var(--shadeui-color-slate-100)] active:to-[var(--shadeui-color-slate-200)] active:border-[var(--shadeui-color-black-20)] active:shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#e2e8f0] active:text-[var(--shadeui-color-text-800)]
       
        disabled:bg-[var(--shadeui-color-slate-100)] disabled:text-[var(--shadeui-color-slate-400)] disabled:pointer-events-none
       disabled:from-[var(--shadeui-color-slate-100)] disabled:to-[var(--shadeui-color-slate-100)] disabled:border-[var(--shadeui-color-slate-100)] disabled:shadow-[0px_0px_0px_0px]

       dark:from-[var(--shadeui-color-slate-800)] dark:to-[var(--shadeui-color-slate-900)] dark:border-[var(--shadeui-color-slate-600)] dark:shadow-[0px_0px_0px_1px_var(--shadeui-color-slate-700),0px_1px_2px_0px_var(--shadeui-color-slate-800)]
       dark:hover:from-[var(--shadeui-color-slate-700)] dark:hover:to-[var(--shadeui-color-slate-800)] dark:hover:border-[var(--shadeui-color-slate-500)] dark:hover:shadow-[0px_0px_0px_1px_var(--shadeui-color-slate-500),0px_1px_2px_0px_var(--shadeui-color-slate-600)]
       dark:focus:from-[var(--shadeui-color-slate-700)] dark:focus:to-[var(--shadeui-color-slate-800)] dark:focus:border-[var(--shadeui-color-slate-500)] dark:focus:shadow-[0px_0px_0px_5px_rgba(148,_163,_184,_0.12),_0px_0px_0px_2px_var(--shadeui-color-slate-400)]
       dark:active:from-[var(--shadeui-color-slate-700)] dark:active:to-[var(--shadeui-color-slate-800)] dark:active:border-[var(--shadeui-color-slate-400)] dark:active:shadow-[0px_0px_0px_1px_var(--shadeui-color-slate-400),0px_1px_2px_0px_var(--shadeui-color-slate-500)]
       
        dark:disabled:bg-[var(--shadeui-color-slate-800)] dark:disabled:text-[var(--shadeui-color-slate-600)] dark:disabled:shadow-[0px_0px_0px_0px]
       dark:disabled:from-[var(--shadeui-color-slate-800)] dark:disabled:to-[var(--shadeui-color-slate-800)] dark:disabled:border-[var(--shadeui-color-slate-800)]
     `,
   //variantClasses - End
 };

 const activeStyleMap: Record<Color, string> = {
    blue: `
      bg-gradient-to-b from-[var(--shadeui-color-blue-800)] to-[#314CC4] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#314CC4,0px_1px_2px_0px_#2E3F9F]   
      dark:from-[var(--shadeui-color-blue-700)] dark:to-[#3C63DF] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#3C63DF,0px_1px_2px_0px_#2A3B8C] 
    `,
    slate: `
      bg-gradient-to-b from-[var(--shadeui-color-slate-950)] to-[#0F172A] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#0F172A,0px_1px_2px_0px_#1E293B] 
      dark:from-[var(--shadeui-color-slate-800)] dark:to-[#1e293b] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#1e293b,0px_1px_2px_0px_#1e293b]
    `,
    zinc: `
      bg-gradient-to-b from-[var(--shadeui-color-zinc-950)] to-[#18181b] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#18181b,0px_1px_2px_0px_#27272a] 
      dark:from-[var(--shadeui-color-zinc-800)] dark:to-[#27272a] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#27272a,0px_1px_2px_0px_#27272a]
    `,
    gray: `
      bg-gradient-to-b from-[var(--shadeui-color-gray-950)] to-[#111827] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#111827,0px_1px_2px_0px_#1f2937] 
      dark:from-[var(--shadeui-color-gray-800)] dark:to-[#1f2937] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#1f2937,0px_1px_2px_0px_#1f2937]
    `,
    danger: `
      bg-gradient-to-b from-[var(--shadeui-color-red-800)] to-[#991B1B] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A]
      dark:from-[var(--shadeui-color-red-950)] dark:to-[#450a0a] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#450a0a,0px_1px_2px_0px_#450a0a]
    `,
    orange: `
      bg-gradient-to-b from-[var(--shadeui-color-orange-800)] to-[#7C2D12] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#450A0A,0px_1px_2px_0px_#450A0A] 
      dark:from-[var(--shadeui-color-orange-900)] dark:to-[#431407] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#431407,0px_1px_2px_0px_#431407]
    `,
    purple: `
      bg-gradient-to-b from-[var(--shadeui-color-purple-800)] to-[#6B21A8] border-[var(--shadeui-color-white-20)] shadow-[0px_0px_0px_1px_#3B0764,0px_1px_2px_0px_#3B0764]  
      dark:from-[var(--shadeui-color-purple-950)] dark:to-[#3B0764] dark:border-[var(--shadeui-color-white-10)] dark:shadow-[0px_0px_0px_1px_#3B0764,0px_1px_2px_0px_#3B0764]
    `,
    neutral: `
      bg-gradient-to-b  from-[var(--shadeui-color-slate-100)] to-[var(--shadeui-color-slate-200)] border-[var(--shadeui-color-black-20)] shadow-[0px_0px_0px_1px_#e2e8f0,0px_1px_2px_0px_#e2e8f0] text-[var(--shadeui-color-text-800)] 
      dark:from-[var(--shadeui-color-slate-700)] dark:to-[var(--shadeui-color-slate-800)] dark:border-[var(--shadeui-color-slate-400)] dark:shadow-[0px_0px_0px_1px_var(--shadeui-color-slate-400),0px_1px_2px_0px_var(--shadeui-color-slate-500)]
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
  isDisabled,
  
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

export default BezelButton;


