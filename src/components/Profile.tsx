import { Link } from 'react-router-dom';

export function Profile() {
  return (
    <div className="w-1/12 h-10 flex gap-6 items-center">
      <Link to="/profile" className="flex gap-6 items-center">
        Cadastro / Login
      </Link>
    </div>
  );
}

export default Profile;
