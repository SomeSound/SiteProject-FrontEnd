import { HTMLAttributes, ReactNode } from 'react';

interface RegisterRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const RegisterRoot = ({ children }: RegisterRootProps) => {
  return <div>{children}</div>;
};
