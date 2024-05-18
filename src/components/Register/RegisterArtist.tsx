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
  const { user } = parseCookies();

  async function handleRegisterArtist(data: ArtistDTO) {
    try {
      data.email = user;

      const response = await createArtist(data);

      navigate('/');
      window.location.reload();

      artists.push(response.data);
      selectArtist(response.data.id);
    } catch (error) {
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
