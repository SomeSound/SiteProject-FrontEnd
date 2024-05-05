import { Button, Input, useDisclosure } from '@nextui-org/react';
import { TrackDTO } from '../../services/track/types';
import { saveTracks } from '../../services/track';
import { Container } from '../../components/Container';
import { Upload } from '../../components/Upload';
import { useForm } from 'react-hook-form';

import './styles.scss';

export const UploadTrack = () => {
  const { register, handleSubmit } = useForm();

  async function handleSaveTrack(data: TrackDTO) {
    try {
      await saveTracks('1', data);
    } catch (error) {
      console.log('Error save Tracks', error);
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
              {...register('duration')}
              type="text"
              placeholder="Duration"
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

          <Upload.Root>
            <div>
              <input
                type="file"
                {...register('file')}
                className="input_upload_track"
              />
            </div>
            <div className="input_upload_track">
              <Upload.List />
            </div>
          </Upload.Root>
        </Container.Body>

        <Button color="success" variant="flat" type="submit">
          Enviar
        </Button>
      </form>
    </div>
  );
};
