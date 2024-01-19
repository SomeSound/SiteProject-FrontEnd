import './styles.scss';
import { Input, Link } from '@nextui-org/react';

import './styles.scss';

interface NavbarSearchProps {
  text: string;
  path: string;
}

export function NavbarSearch({ text, path }: NavbarSearchProps) {
  return (
    <div className="div-nav-search">
      <Input
        label="Search"
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
        placeholder="Type to search..."
      ></Input>
    </div>
  );
}
