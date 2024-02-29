import { ModalHeader as Header } from '@nextui-org/react';

interface ModalHeaderProps {
  text: string;
}

export const ModalHeader = ({ text }: ModalHeaderProps) => {
  return <Header className="flex flex-col gap-1">{text}</Header>;
};
