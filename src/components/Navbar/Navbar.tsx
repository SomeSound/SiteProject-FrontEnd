import { useState } from 'react';
import { Register } from '../Register/Register';
import { Modal } from '../Modal';
import { Avatar, Input, Link, useDisclosure } from '@nextui-org/react';

import './styles.scss';

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Header text="Entrar/Cadastrar" />
        <Modal.Body rememberPass forgotPass>
          <Register />
        </Modal.Body>
        <Modal.Footer>
          <Modal.SignInButton />
        </Modal.Footer>
      </Modal.Root>

      <div className="div-navbar-root">
        <div className="div-nav-logo">
          <Link href="/" color="foreground">
            Logo Here
          </Link>
        </div>
        <div className="div-navbar-items flex">
          <div className="div-nav-item">
            <Link href="/" color="foreground">
              Gêneros
            </Link>
          </div>
          <div className="div-nav-item">
            <Link href="/" color="foreground">
              Músicas
            </Link>
          </div>
          <div className="div-nav-item">
            <Link href="/" color="foreground">
              Artistas
            </Link>
          </div>
        </div>
        <div className="div-nav-search">
          <Input
            label="Procurar"
            isClearable
            classNames={{
              label: 'text-black/50 dark:text-white/90',
              input: [
                'bg-transparent',
                'text-black/90 dark:text-white/90',
                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
              ],
              innerWrapper: 'bg-transparent',
            }}
            placeholder="artistas, músicas, álbums..."
          ></Input>
        </div>
        <div className="div-nav-avatar">
          {isLogged ? (
            <Avatar src="/profile" />
          ) : (
            <>
              <Link onPress={onOpen} color="foreground" className="">
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
