import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import SolidBadge  from '../Badge/SolidBadge';
import LinkButton  from '../Button/LinkButton';

export type Color = 'slate' | 'blue' | 'gray' | 'orange' | 'purple' | 'zinc'  ;
export type Variant = 'fill' | 'accent' ;
export type Screen = 'web' | 'mobile' ; 

export type RoundBannerProps = {
    label?: string;
    variant?: Variant;
    color?: Color;
    screen?: Screen;
    badge?: React.ReactNode;
    showBadge?: boolean;
    linkButton?: React.ReactNode;
    showLinkButton?: boolean;
    closeButton?: React.ReactNode;
    showCloseButton?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function RoundBanner({
  label,
  variant = 'fill',
  color = 'blue',
  screen = 'web',
  badge,
  showBadge = false,
  linkButton,
  showLinkButton = false,
  closeButton,
  showCloseButton = false,
  className,
  ...props
}: RoundBannerProps){

    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    

    const baseStyles = 'flex w-[full] flex-col justify-center items-center';

    const screenClasses: Record<Screen, string> = {
      web: 'text-sm font-normal leading-[16px] tracking-[0.168px]',
      mobile: 'text-[13px] font-normal leading-[14px] tracking-[0.144px]',
    };

    const bannerStyle: Record<Screen, string>  = {
      web: "flex px-3 py-1 justify-center items-center gap-[10px] self-stretch ",
      mobile: "flex h-11 px-3 py-1 justify-center items-center self-stretch "
    };

    const variantClasses: Record<Variant, string> = {
      accent:"text-[var(--shadeui-color-black-100)] dark:text-[var(--shadeui-color-white-80)] h-11 rounded-lg mx-4 my-3 ",
      fill:"text-[var(--shadeui-color-white-100)] dark:text-[var(--shadeui-color-white-80)] h-11 rounded-lg mx-4 my-3 "
    }

    const linkColor = variant === 'fill' ? 'neutral' : color;
    const badgeVariant = variant === 'fill' ? 'accent' : 'fill';
    const LinkSize = screen === 'web' ? 'md' : 'sm';



    const colorClasses:  Record<Variant, Record<Color, string>>= {
      accent:{
        slate:` bg-[var(--shadeui-color-slate-25)] border border-[var(--shadeui-color-slate-100)] dark:bg-[var(--shadeui-color-slate-800)] dark:border-[var(--shadeui-color-slate-900)]  `, 
        blue:` bg-[var(--shadeui-color-blue-25)]  border border-[var(--shadeui-color-blue-100)] dark:bg-[var(--shadeui-color-blue-800)] dark:border-[var(--shadeui-color-blue-900)]  `,
        gray:`bg-[var(--shadeui-color-gray-25)]  border border-[var(--shadeui-color-gray-100)] dark:bg-[var(--shadeui-color-gray-800)] dark:border-[var(--shadeui-color-gray-900)]  `,
        orange:`bg-[var(--shadeui-color-orange-25)] border border-[var(--shadeui-color-orange-100)] dark:bg-[var(--shadeui-color-orange-600)] dark:border-[var(--shadeui-color-orange-800)]  `,
        purple:`bg-[var(--shadeui-color-purple-25)] border border-[var(--shadeui-color-purple-100)] dark:bg-[var(--shadeui-color-purple-800)] dark:border-[var(--shadeui-color-purple-900)]  `,
        zinc:`bg-[var(--shadeui-color-zinc-25)] border border-[var(--shadeui-color-zinc-100)] dark:bg-[var(--shadeui-color-zinc-800)] dark:border-[var(--shadeui-color-zinc-900)]  `,
      } , 
      fill:{
        slate:` bg-[var(--shadeui-color-slate-600)]  dark:bg-[var(--shadeui-color-slate-800)] `,
        blue:` bg-[var(--shadeui-color-blue-600)]  dark:bg-[var(--shadeui-color-blue-800)] `,
        gray:` bg-[var(--shadeui-color-gray-600)]  dark:bg-[var(--shadeui-color-gray-800)] `,
        orange:` bg-[var(--shadeui-color-orange-600)]  dark:bg-[var(--shadeui-color-orange-800)] `,
        purple:` bg-[var(--shadeui-color-purple-600)]  dark:bg-[var(--shadeui-color-purple-800)] `,
        zinc:` bg-[var(--shadeui-color-zinc-600)]  dark:bg-[var(--shadeui-color-zinc-800)] `,
      } 
    }


    const roundBannerClassNames = cn(
      baseStyles,
      screenClasses[screen],
      {...props},
      className
    )


  return (
    <div className={roundBannerClassNames}>

      <div className={cn(colorClasses[variant][color], variantClasses[variant], bannerStyle[screen])}>
        <div  className={cn( 'absolute flex gap-2 justify-center items-center ') } >
        {showBadge && (badge ?? <SolidBadge size='sm' label='New feature' color={color} variant={badgeVariant} />)}
        {label && <span className='' >{label}</span>}
        {showLinkButton && (linkButton ?? <LinkButton label="Learn more" color={linkColor} size={LinkSize}  />)}
        </div>

        {showCloseButton && (
          <button
          onClick={() => setVisible(false)}
          className='ml-auto cursor-pointer'
          >
            {closeButton ?? <X size={16} className="text-current" />}
          </button>
        )}
        </div>

    </div>
  )
}



export default RoundBanner