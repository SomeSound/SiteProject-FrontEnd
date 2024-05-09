import { Button, Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createArtist } from '../../services/artist';
import { parseCookies } from 'nookies';
import { ArtistDTO } from '../../services/artist/types';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const RegisterArtist = () => {
  const { selectArtist, artists } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function handleRegisterArtist(data: ArtistDTO) {
    const { user } = parseCookies();
    try {
      data.email = user;

      const response = await createArtist(data);
      artists.push(response.data);
      selectArtist(response.data.id);

      navigate('/');
      toast.success('Perfil de artista criado!!');
    } catch (error) {
      toast.error(
        'Não foi possível criar seu perfil de artista. Tente novamente.',
      );
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
