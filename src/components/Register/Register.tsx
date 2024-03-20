import { Input } from '@nextui-org/react';
import './styles.scss';

export const Register = () => {
  return (
    <>
      <form action="">
        <div className="register-input">
          <Input type="email" placeholder="Email" />
        </div>

        <div className="register-input">
          <Input type="password" placeholder="Password" />
        </div>
      </form>
    </>
  );
};
