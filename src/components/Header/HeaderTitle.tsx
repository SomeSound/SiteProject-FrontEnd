interface HeaderTitleProps {
  text: string;
}

export function HeaderTitle({ text }: HeaderTitleProps) {
  return <h1>{text}</h1>;
}
