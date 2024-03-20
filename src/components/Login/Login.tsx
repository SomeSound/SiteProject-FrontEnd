import { Input } from '@nextui-org/react';
import './styles.scss';

export const Register = () => {
  return (
    <>
      <form action="">
        <div className="login-input">
          <Input type="email" placeholder="Email" />
        </div>

        <div className="login-input">
          <Input type="password" placeholder="Password" />
        </div>
      </form>
    </>
  );
};