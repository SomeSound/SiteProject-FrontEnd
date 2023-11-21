import { Input } from '@material-tailwind/react';

export function InputLabel() {
  return (
    <div className="h-10 flex gap-6 items-center">
      <div className="w-96">
        <Input crossOrigin={undefined} />
      </div>
    </div>
  );
}

export default InputLabel;
