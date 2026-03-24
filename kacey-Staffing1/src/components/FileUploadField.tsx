
import React from 'react';
import { useFileUpload } from '@/hooks/useFileUpload';

interface FileUploadFieldProps {
  id: string;
  label: string;
  accept?: string;
  required?: boolean;
  onFileUploaded: (url: string) => void;
  uploadFolder: string;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  id,
  label,
  accept = ".pdf,.doc,.docx",
  required = false,
  onFileUploaded,
  uploadFolder
}) => {
  const { uploadFile, isUploading } = useFileUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = await uploadFile(file, uploadFolder);
    if (url) {
      onFileUploaded(url);
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      <div className="mt-1 relative">
        <input 
          type="file" 
          id={id}
          accept={accept}
          onChange={handleFileChange}
          disabled={isUploading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-custom-blue file:text-white hover:file:bg-opacity-80 disabled:opacity-50" 
          required={required}
        />
        {isUploading && (
          <div className="mt-2">
            <div className="h-1 w-full bg-gray-200 rounded">
              <div className="h-1 bg-custom-blue rounded animate-pulse"></div>
            </div>
            <p className="mt-1 text-sm text-blue-600">Uploading... Please wait</p>
          </div>
        )}
      </div>
      <p className="mt-1 text-xs text-gray-500">
        Accepted formats: PDF, DOC, DOCX. Maximum size: 10MB
      </p>
    </div>
  );
};

export default FileUploadField;
