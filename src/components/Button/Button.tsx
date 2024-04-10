import { Button as ButtonUi } from '@nextui-org/react';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  variant:
    | 'shadow'
    | 'solid'
    | 'bordered'
    | 'light'
    | 'flat'
    | 'faded'
    | 'ghost';
  text: string;
  type: 'button' | 'submit' | 'reset';
}

export const Button = ({ color, variant, text, type }: ButtonProps) => {
  return (
    <ButtonUi color={color} variant={variant} type={type}>
      {text}
    </ButtonUi>
  );
};
