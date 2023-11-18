import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div className="w-1/6 h-10 flex gap-6 items-center">
      <Link to="/musicas" className="text-white">
        Músicas
      </Link>
      <Link to="/artists" className="text-white">
        Artistas
      </Link>
      <Link to="/albums" className="text-white">
        Albums
      </Link>
    </div>
  );
}

export default NavBar;
