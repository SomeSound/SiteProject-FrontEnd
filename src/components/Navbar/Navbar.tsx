import { useContext } from 'react';
import { Modal } from '../Modal';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login';
import { AuthContext } from '../../context/AuthContext';
import { Avatar } from '../Avatar';

import './styles.scss';

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { signed } = useContext(AuthContext);

  return (
    <>
      <div className="modal_root">
        <Modal.Root isOpen={isOpen} onOpenChange={onOpenChange}>
          <Modal.Header text="Login" />
          <Modal.Body>
            <div>
              <NavLink
                className="register_link"
                to={'/customer'}
                onClick={onClose}
              >
                Clique aqui para cadastrar
              </NavLink>
            </div>
            <Login onOpenChange={onOpenChange} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Root>
      </div>

      <div className="div_navbar_root">
        <div className="div_nav_logo">
          <NavLink to={'/'}>Logo</NavLink>
        </div>
        <div className="div_navbar_items flex">
          <div className="div_nav_item">
            <NavLink to={'/'}>Gêneros</NavLink>
          </div>
          <div className="div_nav_item">
            <NavLink to={'/'}>Músicas</NavLink>
          </div>
          <div className="div_nav_item">
            <NavLink to={'/'}>Artistas</NavLink>
          </div>
        </div>
        <div className="div_nav_search">
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
        <div className="div_nav_avatar">
          {signed ? (
            <div className="flex">
              <div className="upload_button">
                <Button color="default" type="button" variant="ghost">
                  <NavLink to={'/upload'}>Upload</NavLink>
                </Button>
              </div>
              <div className="avatar_dropdown_nav">
                <Avatar.Root>
                  <Avatar.Dropdown image="" />
                </Avatar.Root>
              </div>
            </div>
          ) : (
            <>
              <Button
                color="default"
                type="button"
                variant="ghost"
                onPress={onOpen}
              >
                Entrar
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
