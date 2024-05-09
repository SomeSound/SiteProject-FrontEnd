import { Link } from 'react-router-dom';
import './styles.scss';

interface CardDescription {
  name: string;
  artist: string;
}

export const CardInfo = ({ name, artist }: CardDescription) => {
  return (
    <div className="card_info">
      <div>
        <Link to={'/'}>{name}</Link>
      </div>
      <div>
        <Link to={'/'}>{artist}</Link>
      </div>
    </div>
  );
};
