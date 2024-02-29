import { Button, ModalProps } from '@nextui-org/react';

interface ModalRootProps extends ModalProps {
  onOpenChange: (isOpen: boolean) => void;
  isOpen: boolean;
}

export const ModalCloseButton = () => {
  return (
    <Button color="danger" variant="flat">
      Fechar
    </Button>
  );
};
