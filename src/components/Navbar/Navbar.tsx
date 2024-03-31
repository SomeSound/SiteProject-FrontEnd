import { useContext } from 'react';
import { Modal } from '../Modal';
import { Avatar, Input, Link, useDisclosure } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { TrackDTO } from '../../services/track/types';
import { saveTracks } from '../../services/track';
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login';
import { AuthContext } from '../../context/AuthContext';

import './styles.scss';

export const Navbar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { signed } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  async function handleSaveTrack(data: TrackDTO) {
    try {
      const response = await saveTracks('1', data);
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

      <Modal.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Header text="Login" />
        <Modal.Body rememberPass forgotPass>
          <div>
            <NavLink to={'/register'} onClick={onClose}>
              Clique aqui para cadastrar
            </NavLink>
          </div>
          <Login onOpenChange={onOpenChange} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal.Root>

      <div className="div-navbar-root">
        <div className="div-nav-logo">
          <NavLink to={'/'}>Logo</NavLink>
        </div>
        <div className="div-navbar-items flex">
          <div className="div-nav-item">
            <NavLink to={'/'}>Gêneros</NavLink>
          </div>
          <div className="div-nav-item">
            <NavLink to={'/'}>Músicas</NavLink>
          </div>
          <div className="div-nav-item">
            <NavLink to={'/'}>Artistas</NavLink>
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
        <div className="flex">
          {/* <Container.Root>
            <Container.Body>
              <Button onClick={onOpenChange}>Upload Track</Button>
            </Container.Body>
          </Container.Root> */}
        </div>
        <div className="div-nav-avatar">
          {signed ? (
            <Avatar src="/profile" />
          ) : (
            <>
              <Link onPress={onOpen} color="foreground">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
