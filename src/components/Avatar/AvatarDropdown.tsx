import { AuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
} from '@nextui-org/react';
import { HtmlHTMLAttributes, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface AvatarDropdownProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  image: string;
}

export function AvatarDropdown({ image }: AvatarDropdownProps) {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" className="dark">
        <DropdownTrigger>
          <Avatar
            as="button"
            isBordered
            className="transition-transform"
            src={image}
            alt="Avatar"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Artist Actions" variant="flat">
          <DropdownSection aria-label="Profile Actions" showDivider>
            <DropdownItem key="be_an_artist" textValue="Seja um artista!">
              <Link to={'/artist'}>Seja um artista!</Link>
            </DropdownItem>
            <DropdownItem key="artist_profile" textValue="Perfil Artista">
              Perfil Artista
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
