import { Register } from '../../components/Register/index';

export const RegisterCustomer = () => {
  return (
    <div className="registerCustomer">
      <Register.Root>
        <Register.Customer />
      </Register.Root>
    </div>
  );
};
