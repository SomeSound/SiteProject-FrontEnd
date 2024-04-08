import { AuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  DropdownSection,
} from '@nextui-org/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

export function AvatarDropdown() {
  const { signOut } = useContext(AuthContext);

  function handleCreateArtistPage() {
    signOut();
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered color="default" as="button" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Artist Actions" variant="flat">
          <DropdownSection aria-label="Profile Actions" showDivider>
            <DropdownItem key="be_an_artist" onClick={handleCreateArtistPage}>
              <NavLink to={'/artist'}>Seja um artista!</NavLink>
            </DropdownItem>
            <DropdownItem key="artist_profile">Perfil Artista</DropdownItem>
            <DropdownItem key="credits" endContent={0}>
              Créditos:
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="Profile Actions">
            <DropdownItem key="profile">Perfil</DropdownItem>
            <DropdownItem key="settings">Configurações</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
              Sair
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
