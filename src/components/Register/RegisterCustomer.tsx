import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { CustomerDTO } from '../../services/customer/types';
import { createCustomer } from '../../services/customer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './styles.scss';

export const RegisterCustomer = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleRegisterCustomer(data: CustomerDTO) {
    try {
      data.subscription = 1;
      const response = await createCustomer(data);
      navigate('/');
      toast.success(`Seja bem vindo(a) a Hyper, ${response.data.name}!!`);
    } catch (error) {
      toast.error('Usuário e/ou senha inválidos. Tente novamente.');
      console.log('Error create customer', error);
    }
  }

  return (
    <div className="register_customer_div">
      <form onSubmit={handleSubmit(handleRegisterCustomer)}>
        <div className="flex input_login_div">
          <Input
            {...register('name')}
            type="text"
            placeholder="Name"
            className="input_register"
          />
          <Input
            {...register('avatar')}
            type="text"
            placeholder="avatar"
            className="input_register"
          />
        </div>

        <div className="input_register_div">
          <Input
            {...register('email')}
            type="text"
            placeholder="email"
            className="input_register"
          />
          <Input
            {...register('password')}
            type="text"
            placeholder="password"
            className="input_register"
          />
        </div>

        <div className="flex input_register_div">
          <Input
            {...register('country')}
            type="text"
            placeholder="country"
            className="input_register"
          />
          <Input
            {...register('birthDate')}
            type="text"
            placeholder="birthDate"
            className="input_register"
          />
        </div>

        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </div>
  );
};
