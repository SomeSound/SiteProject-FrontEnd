import { ReactNode } from 'react';
import { Button, ModalFooter as Footer } from '@nextui-org/react';

interface ModalFooterProps {
  children?: ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <Footer>{children}</Footer>;
};
