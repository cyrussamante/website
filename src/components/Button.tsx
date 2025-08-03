import "./Button.css";

interface ButtonProps {
  id: string;
  variant: string;
  size: string;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const classNames = `btn btn--${props.variant} btn--${props.size}`;
  return (
    <button id={props.id} className={classNames}>
      {props.children}
    </button>
  );
}

export default Button;
