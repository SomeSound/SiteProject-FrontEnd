// import { Avatar, Typography } from '@material-tailwind/react';
import { InputLabel } from './Input';
import Logo from './Logo';
import { NavBar } from './NavBar';
import { Profile } from './Profile';

function Header() {
  return (
    <div className="flex bg-red-600 h-20 justify-between items-center px-5 rounded-xl m-0.5">
      <Logo />
      <NavBar />
      <div>
        <InputLabel />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default Header;
