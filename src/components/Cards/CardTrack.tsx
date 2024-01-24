import { Card, Image } from '@nextui-org/react';
import './styles.scss';

export const CardTrack = () => {
  return (
    <Card isBlurred radius="sm" className="border-none">
      <Image
        className="object-cover"
        height={100}
        src="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
        width={100}
      />
    </Card>
  );
};
