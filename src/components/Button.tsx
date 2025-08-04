import "./Button.css";

interface ButtonProps {
  id: string;
  type: "button" | "submit" | "reset";
  variant: string;
  size: string;
  children: React.ReactNode;
}

const Button = ({ id, type, variant, size, children }: ButtonProps) => (
  <button id={id} type={type} className={`btn btn--${variant} btn--${size}`}>
    {children}
  </button>
);

export default Button;
