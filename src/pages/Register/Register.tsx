import { Button, Input } from '@nextui-org/react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { CustomerDTO } from '../../services/customer/types';
import { createCustomer } from '../../services/customer';

export const Register = () => {
  const { register, handleSubmit } = useForm();

  async function handleRegisterCustomer(data: CustomerDTO) {
    try {
      data.name = 'Admin';
      data.email = 'testeeeee@testeeeeeee.com';
      data.password = 'admin';
      data.country = 'Brasil';
      data.avatar = 'avatarURL';
      data.birthDate = 'birth';
      data.role = 'ADMIN';
      data.subscription = 1;
      console.log(data);
      const response = await createCustomer(data);
      console.log(response);
    } catch (error) {
      console.log('Error create customer', error);
    }
  }

  return (
    <div className="registerCustomer">
      <form onSubmit={handleSubmit(handleRegisterCustomer)}>
        <div>
          <Input {...register('name')} type="text" placeholder="Name" />
          <Input {...register('email')} type="text" placeholder="email" />
          <Input {...register('password')} type="text" placeholder="password" />
          <Input {...register('country')} type="text" placeholder="country" />
          <Input {...register('avatar')} type="text" placeholder="avatar" />
          <Input
            {...register('birthDate')}
            type="text"
            placeholder="birthDate"
          />
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </div>
  );
};
