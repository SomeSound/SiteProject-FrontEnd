import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UseFormProps } from 'react-hook-form';

interface UploadDropzoneProps extends UseFormProps {}

export const UploadDropzone = ({}: UploadDropzoneProps) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    const filesWithStatus = acceptedFiles.map((file: any) => ({
      file: file,
      loaded: false,
    }));
    setUploadedFiles(filesWithStatus);
  }, []);

  const onUploadComplete = useCallback((index: any) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[index].loaded = true;
      return updatedFiles;
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed gray',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
      >
        <input {...getInputProps()} />
        <p>Arraste e solte os arquivos aqui,</p>
        <p>ou clique para selecionar arquivos</p>
      </div>
      <div>
        <ul>
          {uploadedFiles.map((item, index) => (
            <li key={index}>
              {item.file.name} - {<br />}
              {item.loaded ? 'Carregado' : 'Aguardando carregamento'}
              <button onClick={() => onUploadComplete(index)}>
                Marcar como carregado
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
