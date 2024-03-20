import './styles.scss';

interface UploadRootProps {
  children: React.ReactNode;
}

export const UploadRoot = ({ children }: UploadRootProps) => {
  return <div>{children}</div>;
};
