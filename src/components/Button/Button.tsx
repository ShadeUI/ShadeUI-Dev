interface ButtonProps {
  label: string;
  className?: string; // Accepts additional Tailwind classes
}

const Button = ({ label, className = '' }: ButtonProps) => (
  <button className={`px-4 py-2 rounded focus:outline-none ${className}`}>
    {label}
  </button>
);

export default Button;
