
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const uploadFile = async (file: File, folder: string): Promise<string | null> => {
    setIsUploading(true);
    
    try {
      // Validate file size (max 10MB)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        throw new Error('File size must be less than 10MB');
      }

      // Validate file type
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!validTypes.includes(fileExt)) {
        throw new Error('Invalid file type. Please upload a PDF or Word document.');
      }

      // Create a clean filename
      const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${folder}/${Date.now()}-${cleanFileName}`;
      
      // Upload the file
      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('j1-documents')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      // Get the public URL
      const { data } = supabase.storage
        .from('j1-documents')
        .getPublicUrl(fileName);

      if (!data.publicUrl) {
        throw new Error('Failed to get public URL for uploaded file');
      }

      // Verify the file was uploaded successfully
      const { data: verifyData, error: verifyError } = await supabase.storage
        .from('j1-documents')
        .download(fileName);

      if (verifyError || !verifyData) {
        throw new Error('Failed to verify uploaded file');
      }

      console.log('File uploaded successfully:', {
        fileName,
        publicUrl: data.publicUrl,
        size: file.size,
        type: file.type
      });

      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadFile,
    isUploading,
  };
};
