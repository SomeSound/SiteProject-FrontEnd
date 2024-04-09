import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { CustomerDTO } from '../../services/customer/types';
import { createCustomer } from '../../services/customer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
    <div className="registerCustomer">
      <form onSubmit={handleSubmit(handleRegisterCustomer)}>
        <div>
          <p>name</p>
          <Input {...register('name')} type="text" placeholder="Name" />
          <p>email</p>
          <Input {...register('email')} type="text" placeholder="email" />
          <p>password</p>
          <Input {...register('password')} type="text" placeholder="password" />
          <p>country</p>
          <Input {...register('country')} type="text" placeholder="country" />
          <p>avatar</p>
          <Input {...register('avatar')} type="text" placeholder="avatar" />
          <p>birthDate</p>
          <Input
            {...register('birthDate')}
            type="text"
            placeholder="birthDate"
          />
          <br />
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </div>
  );
};
