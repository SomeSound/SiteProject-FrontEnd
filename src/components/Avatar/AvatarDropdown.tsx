import { AuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import { useContext } from 'react';

export function AvatarDropdown() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar as="button" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="perfil">Perfil</DropdownItem>
          <DropdownItem key="settings">Configurações</DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleSignOut}>
            Sair
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
