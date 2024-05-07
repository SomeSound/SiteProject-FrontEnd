import { ArtistDTO } from '@/src/services/artist/types';
import { AuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
  User,
  Button,
} from '@nextui-org/react';
import { HtmlHTMLAttributes, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseCookies } from 'nookies';

interface AvatarDropdownProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  image: string;
}

export function AvatarDropdown({ image }: AvatarDropdownProps) {
  const { signOut, artists, selectArtist, updateUserInfo, artist } =
    useContext(AuthContext);
  const { user } = parseCookies();

  function handleSignOut() {
    signOut();
  }

  function handleSelectArtist(id: number) {
    selectArtist(id);
  }

  useEffect(() => {
    updateUserInfo(user);
  }, []);

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" className="dark">
        <DropdownTrigger>
          <Avatar
            isBordered
            as={Button}
            className="transition-transform"
            src={image}
            alt="Avatar"
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="Artist Actions" variant="flat">
          <DropdownSection aria-label="Artist Profiles" showDivider>
            {artists !== null &&
              artists.map((item: ArtistDTO) => (
                <DropdownItem
                  key={item.id}
                  textValue={item.username}
                  onClick={() => handleSelectArtist(item.id)}
                >
                  <User
                    name={item.username}
                    description={item.credits}
                    avatarProps={{
                      src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                    }}
                  />
                  {item.id === artist.id ? 'SIM' : 'Não'}
                </DropdownItem>
              ))}
          </DropdownSection>

          <DropdownSection aria-label="Profile Actions" showDivider>
            <DropdownItem key="artist_profile" textValue="Seja um artista!">
              <Link to={'/artist'}>Criar perfil de artista</Link>
            </DropdownItem>
            <DropdownItem key="credits" endContent={0} textValue="Créditos">
              Créditos:
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="Profile Actions">
            <DropdownItem key="profile" textValue="Perfil">
              Perfil
            </DropdownItem>
            <DropdownItem key="settings" textValue="Configurações">
              Configurações
            </DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={handleSignOut}
              textValue="Sair"
            >
              Sair
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
