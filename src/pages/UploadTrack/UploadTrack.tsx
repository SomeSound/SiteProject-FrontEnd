import { Button, Input } from '@nextui-org/react';
import { saveTracks } from '../../services/track';
import { Container } from '../../components/Container';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UploadDropzone } from '../../components/Upload/UploadDropzone';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export const UploadTrack = () => {
  const { register, handleSubmit } = useForm();
  const { artist } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSaveTrack(data: any) {
    try {
      data.artistId = artist.id;
      await saveTracks(data);
      toast.success('Track salva com sucesso!!');
      navigate('/');
    } catch (error) {
      toast.error('Track salva com sucesso!!');
      console.log('Error save track', error);
    }
  }

  return (
    <div className="upload_track_root">
      <form onSubmit={handleSubmit(handleSaveTrack)}>
        <Container.Body>
          <div>
            <Input
              {...register('name')}
              type="text"
              placeholder="Name"
              className="input_upload_track"
            />
            <Input
              {...register('genre')}
              type="text"
              placeholder="Genre"
              className="input_upload_track"
            />
            <Input
              {...register('image')}
              type="text"
              placeholder="Image"
              className="input_upload_track"
            />
          </div>

          <div>
            {/* <UploadDropzone {...register('file')} /> */}
            <input
              {...register('file')}
              type="file"
              className="input_upload_track"
            />
          </div>
        </Container.Body>

        <Button color="success" variant="flat" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
