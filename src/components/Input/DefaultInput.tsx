import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export type DefaultInputProps = {
  headerLabel?: string;
  showHeaderLabel?: boolean;
  hintIcon?: React.ReactNode;
  showHint?: boolean;
  hintLabel?: string;
  leadingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  className?: string;
  required?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const COMMON_INPUT_TYPES = new Set([
  'text', 'email', 'password', 'number', 'url',
  'search', 'tel', 'date', 'datetime-local',
  'month', 'time', 'week', 'color',
]);

export function DefaultInput({
  headerLabel,
  showHeaderLabel = false,
  size,
  hintIcon,
  hintLabel,
  showHint = false,
  leadingIcon,
  showLeadingIcon = false,
  className,
  type = 'text',
  required = false, 
  ...props
}: DefaultInputProps) {

  const isValidType = COMMON_INPUT_TYPES.has(type);

  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState(props.defaultValue ?? '');

  const isEmpty = required && touched && String(value).trim() === '';

  const wrapperClass = 'flex flex-col gap-1 w-full';

  const headerLabelClass = 'font-medium flex items-center justify-between text-[15px] text-[var(--shadeui-color-black-100)] mb-2 dark:text-[var(--shadeui-color-white-100)]';

  const inputContainerBaseClass = cn(`
    relative flex items-center rounded-lg border 
    border-[var(--shadeui-color-gray-200)]
    text-[var(--shadeui-color-black-100)] 
    bg-[var(--shadeui-color-white-100)] 
    placeholder:text-[var(--shadeui-color-black-60)] 
    hover:bg-[var(--shadeui-color-gray-50)]
    focus-within:ring-5 focus-within:ring-[var(--shadeui-color-gray-100)]  focus:outline-[var(--shadeui-color-gray-950)]

    dark:border-[var(--shadeui-color-gray-700)]
    dark:text-[var(--shadeui-color-white-100)]
    dark:bg-[var(--shadeui-color-gray-950)]
    dark:placeholder:text-[var(--shadeui-color-white-40)]
    dark:hover:bg-[var(--shadeui-color-gray-950)]
    dark:disabled:bg-[var(--shadeui-color-gray-600)]
    dark:focus-within:ring-5 dark:focus-within:ring-[var(--shadeui-color-gray-800)]  dark:focus:outline-[var(--shadeui-color-gray-25)]

    disabled:bg-[var(--shadeui-color-gray-400)] disabled:cursor-not-allowed disabled:bg-[var(--shadeui-color-gray-100)]
  `,

  (!isValidType || isEmpty) && ' border border-[var(--shadeui-color-red-200)] ring-5 ring-[var(--shadeui-color-red-50)] dark:border-[var(--shadeui-color-red-700)] dark:ring-[var(--shadeui-color-red-500)]'
  );

  const inputBaseClass = 'outline-none bg-transparent text-[15px] px-1 py-3 w-full';

  const hintContainerClass = 'flex items-center gap-1 mt-1 text-sm text-[var(--shadeui-color-black-80)] dark:text-[var(--shadeui-color-white-80)]';

  const sizeWrapperStyles = `text-base px-4 text-[var(--shadeui-color-black-100)] bg-[var(--shadeui-color-white-100)]`;

  const leadingClassIconStyle = `text-[var(--shadeui-color-black-60)] pointer-events-none`;

  return (
    <div className={wrapperClass}>
      {showHeaderLabel && headerLabel && (
        <label className={headerLabelClass}>{headerLabel}</label>
      )}

      <div className={cn(inputContainerBaseClass, sizeWrapperStyles, className)}>
        {showLeadingIcon && leadingIcon && (
          <span className={leadingClassIconStyle}>{leadingIcon}</span>
        )}

        <input
          type={type}
          className={cn(inputBaseClass)}
          onBlur={() => setTouched(true)}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange?.(e);
          }}
          {...props}
        />
      </div>

      {showHint && hintLabel && (
        <div className={hintContainerClass}>
          {hintIcon && <span>{hintIcon}</span>}
          <span>{hintLabel}</span>
        </div>
      )}
    </div>
  );
}

export default DefaultInput;