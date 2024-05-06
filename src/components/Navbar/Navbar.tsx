import { useContext } from 'react';
import { Modal } from '../Modal';
import { Button, Input, Link, User, useDisclosure } from '@nextui-org/react';
import { TrackDTO } from '../../services/track/types';
import { saveTracks } from '../../services/track';
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login';
import { AuthContext } from '../../context/AuthContext';

import './styles.scss';
import { Avatar } from '../Avatar';

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { signed } = useContext(AuthContext);

  async function handleSaveTrack(data: TrackDTO) {
    try {
      await saveTracks('1', data);
    } catch (error) {
      console.log('Error save Tracks', error);
    }
  }

  return (
    <>
      {/* <Modal.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Header text="Upload Track" />

        <form onSubmit={handleSubmit(handleSaveTrack)}>
          <Modal.Body rememberPass forgotPass>
            <div>
              <Input {...register('name')} type="text" placeholder="Name" />
              <Input
                {...register('duration')}
                type="text"
                placeholder="Duration"
              />
              <Input {...register('genre')} type="text" placeholder="Genre" />
              <Input {...register('image')} type="text" placeholder="Image" />
            </div>

            <Upload.Root>
              <div>
                <input type="file" {...register('file')} />
              </div>
              <div>
                <Upload.List />
              </div>
            </Upload.Root>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button
              color="success"
              variant="flat"
              text="Enviar"
              type="submit"
              onClick={() => onClose}
            />
          </Modal.Footer>
        </form>
      </Modal.Root> */}

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
              <div className="avatar_dropdown">
                <Avatar.Root>
                  <Avatar.Dropdown />
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
