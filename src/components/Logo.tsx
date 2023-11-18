import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="w-1/12 gap-6">
      <Link to="/" className="m-2">
        Hyper Logo
      </Link>
    </div>
  );
}

export default Logo;
