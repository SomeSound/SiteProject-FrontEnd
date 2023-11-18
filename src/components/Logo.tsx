import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="gap-6">
      <Link to="/" className="m-2">
        Hyper Logo
      </Link>
    </div>
  );
}

export default Logo;
