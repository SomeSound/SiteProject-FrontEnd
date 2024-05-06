import { ReactNode } from 'react';
import { ModalBody as Body, ModalVariantProps } from '@nextui-org/react';

interface ModalBodyProps extends ModalVariantProps {
  children: ReactNode;
}

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <Body>{children}</Body>;
};
