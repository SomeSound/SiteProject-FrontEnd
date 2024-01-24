import './styles.scss';

interface CardDescription {
  text: string;
}

export const CardDescription = ({ text }: CardDescription) => {
  return <label>{text}</label>;
};
