import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { LoginDTO } from '../../services/customer/types';
import { ButtonComponent } from '../Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import './styles.scss';

interface LoginProps {
  onOpenChange: (isOpen: boolean) => void;
}

export const Login = ({ onOpenChange }: LoginProps) => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  async function handleLogin(data: LoginDTO) {
    try {
      console.log('lala');
      await signIn(data);
      console.log('lala');
      onOpenChange(false);
    } catch (error) {
      console.log('Error to logIn', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input {...register('email')} type="text" placeholder="Email" />
        <Input {...register('password')} type="text" placeholder="Password" />

        <ButtonComponent
          color="success"
          text="Entrar"
          type="submit"
          variant="solid"
        />
      </form>
    </>
  );
};
