interface HeaderDescriptionProps {
  text: string;
}

export function HeaderDescription({ text }: HeaderDescriptionProps) {
  return <h6>{text}</h6>;
}
