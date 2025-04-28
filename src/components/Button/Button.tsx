import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

// Extend native button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'bg-blue-500 text-white px-4 py-2 rounded focus:outline-none', // Default styles
        className // Custom classes passed in
      )}
      {...props} // Spread any other button props (like onClick, disabled)
    >
      {label}
    </button>
  );
};

export default Button;
