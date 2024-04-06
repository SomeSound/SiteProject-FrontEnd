import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { LoginDTO } from '../../services/customer/types';
import { Button } from '../Button/Button';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import './styles.scss';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onOpenChange: (isOpen: boolean) => void;
}

export const Login = ({ onOpenChange }: LoginProps) => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleLogin(data: LoginDTO) {
    try {
      await signIn(data);
      onOpenChange(false);
      navigate('/');
    } catch (error) {
      console.log('Error to logIn', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input {...register('email')} type="text" placeholder="Email" />
        <Input {...register('password')} type="text" placeholder="Password" />

        <Button color="success" text="Entrar" type="submit" variant="solid" />
      </form>
    </>
  );
};
