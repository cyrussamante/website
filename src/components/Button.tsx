import "./Button.css";

interface ButtonProps {
  id: string;
  variant: string;
  size: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ id, variant, size, children }) => {
  const classNames = `btn btn--${variant} btn--${size}`;
  return (
    <button id={id} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
