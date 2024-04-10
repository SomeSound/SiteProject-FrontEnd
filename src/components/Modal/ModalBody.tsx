import { ReactNode } from 'react';
import {
  Checkbox,
  Link,
  ModalBody as Body,
  ModalVariantProps,
} from '@nextui-org/react';

interface ModalBodyProps extends ModalVariantProps {
  children: ReactNode;
  rememberPass?: boolean;
  forgotPass?: boolean;
}

export const ModalBody = ({
  children,
  rememberPass,
  forgotPass,
}: ModalBodyProps) => {
  return (
    <Body>
      {children}
      <div className="flex py-2 px-1 justify-between">
        {rememberPass && (
          <Checkbox
            classNames={{
              label: 'text-small',
            }}
          >
            Relembrar
          </Checkbox>
        )}
        {forgotPass && (
          <Link color="primary" href="#" size="sm">
            Esqueceu a senha?
          </Link>
        )}
      </div>
    </Body>
  );
};
