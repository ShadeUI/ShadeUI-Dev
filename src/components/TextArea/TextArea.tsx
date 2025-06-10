import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export type TextAreaProps = {
    headerLabel?: string;
    showHeaderLabel?: boolean;
    hintIcon?: React.ReactNode;
    showHint?: boolean;
    hintLabel?: string;
    className?: string;
    characterLimit?: number;
    warningThreshold?: number; 
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({
    headerLabel,
    showHeaderLabel = false,
    hintIcon,
    hintLabel,
    showHint = false,
    className,
    characterLimit,
    warningThreshold = 0.9,
    onChange,
    ...props
}: TextAreaProps) {

    const [value, setValue] = useState(props.value?.toString() || '');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        onChange?.(e); // Call external onChange if provided
    };

    const isNearLimit = characterLimit && value.length >= characterLimit * warningThreshold;

    const wrapperStyles = 'space-y-1 w-full';

    const labelRowStyles = 'flex font-medium items-center justify-between text-[15px] text-[var(--shadeui-color-black-100)] mb-2 dark:text-[var(--shadeui-color-white-100)]';

    const textareaBaseStyles = `
        w-full min-h-[160px] rounded-lg border  px-4 py-4 text-[15px] 
        
        border-[var(--shadeui-color-gray-200)]
        text-[var(--shadeui-color-black-100)] 
        bg-[var(--shadeui-color-white-100)] 
        placeholder:text-[var(--shadeui-color-black-60)] 
        hover:bg-[var(--shadeui-color-gray-50)]
        focus:outline-[var(--shadeui-color-gray-950)] focus:ring-5 focus:ring-[var(--shadeui-color-gray-100)] 

        dark:border-[var(--shadeui-color-gray-700)]
        dark:text-[var(--shadeui-color-white-100)]
        dark:bg-[var(--shadeui-color-gray-950)]
        dark:placeholder:text-[var(--shadeui-color-white-40)]
        dark:hover:bg-[var(--shadeui-color-gray-950)]
        dark:disabled:bg-[var(--shadeui-color-gray-600)]
        dark:focus:outline-[var(--shadeui-color-gray-25)] dark:focus:ring-5 focus:ring-[var(--shadeui-color-gray-800)] 

        disabled:bg-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed resize-y  disabled:bg-[var(--shadeui-color-gray-100)]
    `;

    const textareaBorderColor = isNearLimit  ? ` border-[var(--shadeui-color-red-200)] focus:ring-5 focus:ring-[var(--shadeui-color-red-50)] dark:border-[var(--shadeui-color-red-700)] dark:focus:ring-[var(--shadeui-color-red-500)]` : `border-[var(--shadeui-color-gray-200)]  focus:ring-5 focus:ring-[var(--shadeui-color-gray-100)] dark:border-[var(--shadeui-color-gray-600)] dark:focus:ring-[var(--shadeui-color-gray-600)]`;

    const bottomStyle = `flex items-center justify-between`

    const footerRowStyles = `flex justify-end text-xs text-[var(--shadeui-color-black-60)] dark:text-[var(--shadeui-color-white-60)] `;

    const hintStyles = `flex items-center gap-1 text-sm text-[var(--shadeui-color-black-80)] dark:text-[var(--shadeui-color-white-80)]`;

  return (
    <div className={wrapperStyles}>
      {showHeaderLabel && (
        <div className={labelRowStyles}>
          <span>{headerLabel}</span>
        </div>
      )}

      <textarea
        ref={textareaRef}
        className={cn(textareaBaseStyles, textareaBorderColor, className)}
        value={value}
        onChange={handleChange}
        maxLength={characterLimit}
        {...props}
      />

      <div className={bottomStyle}>
            {showHint && (
                <div className={hintStyles}>
                {hintIcon && <span>{hintIcon}</span>}
                {hintLabel && <span>{hintLabel}</span>}
                </div>
            )}

            {characterLimit !== undefined && (
                <div className={footerRowStyles}>
                <span>
                    {value.length}/{characterLimit}
                </span>
                </div>
            )}
      </div>

    </div>
  );
}

export default TextArea;