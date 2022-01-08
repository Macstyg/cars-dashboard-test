import React, { memo } from 'react';
import { useDropzone } from 'react-dropzone';
import './dropZone.css'

interface Props {
  onDrop: (acceptedFiles: File[]) => void;
}

const DropZone: React.FC<Props> = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="dropZone">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default memo(DropZone);
