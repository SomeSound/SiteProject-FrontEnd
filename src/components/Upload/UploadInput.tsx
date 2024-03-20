import { Input } from '@nextui-org/react';
import './styles.scss';

export const UploadInput = () => {
  return (
    <>
      <form action="">
        <div className="upload-input">
          <Input type="string" placeholder="Name" />
        </div>

        <div className="upload-input">
          <Input type="string" placeholder="Name" />
        </div>

        <div className="upload-input">
          <Input type="string" placeholder="duration" />
        </div>

        <div className="upload-input">
          <Input type="string" placeholder="genre" />
        </div>

        <div className="upload-input">
          <Input type="string" placeholder="Image" />
        </div>
      </form>
    </>
  );
};
