import { Register } from '../../components/Register/index';

import './styles.scss';

export const RegisterCustomer = () => {
  return (
    <div className="register_customer_page">
      <Register.Root>
        <Register.Customer />
      </Register.Root>
    </div>
  );
};
