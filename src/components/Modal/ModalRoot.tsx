import { ReactNode } from 'react';
import { Modal, ModalContent, ModalProps } from '@nextui-org/react';

interface ModalRootProps extends ModalProps {
  children: ReactNode;
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const ModalRoot = ({
  children,
  onOpenChange,
  isOpen,
}: ModalRootProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};
