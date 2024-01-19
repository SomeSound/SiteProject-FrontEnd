import './styles.scss';
import { Link, Listbox, ListboxItem } from '@nextui-org/react';

import './styles.scss';

interface SectionItemProps {
  id: string;
  text: string;
}

export function SectionItem({ id, text }: SectionItemProps) {
  return (
    <div className="div-section-item">
      <Listbox>
        <ListboxItem key={id}>{text}</ListboxItem>
      </Listbox>
    </div>
  );
}
