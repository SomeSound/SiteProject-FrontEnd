import { Button, ModalProps } from '@nextui-org/react';
import { HTMLAttributes } from 'react';

interface ModalRootProps extends HTMLAttributes<HTMLButtonElement> {
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

export const ModalButton = ({ color, variant, text, type }: ModalRootProps) => {
  return (
    <Button color={color} variant={variant} type={type}>
      {text}
    </Button>
  );
};
