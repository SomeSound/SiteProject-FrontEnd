import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ArtistDTO } from '../../services/artist/types';
import { createArtist } from '../../services/artist';

export const RegisterArtist = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleRegisterArtist(data: ArtistDTO) {
    try {
      const response = await createArtist(data);
      navigate('/');
      toast.success('Seja bem vindo(a) a Hyper!!');
    } catch (error) {
      toast.error('Usuário e/ou senha inválidos. Tente novamente.');
      console.log('Error create artist', error);
    }
  }

  return (
    <div className="registerArtist">
      <form onSubmit={handleSubmit(handleRegisterArtist)}>
        <div>
          <p>Username</p>
          <Input {...register('username')} type="text" placeholder="Username" />
          <br />
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </div>
  );
};
