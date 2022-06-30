import { FunctionComponent, ReactNode } from 'react';

type ButtonProps = {
  onClick: () => void;
  text: ReactNode;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
};

const Button: FunctionComponent<ButtonProps> = ({ onClick, text, type = 'button', disabled }) => {
  return (
    <button
      className={`button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
