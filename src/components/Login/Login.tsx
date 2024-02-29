import { Input } from '@nextui-org/react';

export const Login = () => {
  return (
    <>
      <form action="">
        <div className="input">
          <Input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <Input type="password" placeholder="Password" />
        </div>
      </form>
    </>
  );
};
