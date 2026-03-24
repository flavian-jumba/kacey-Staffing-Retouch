
-- Create a storage bucket for Ongoing ication documents
INSERT INTO storage.buckets (id, name, public)
VALUES ('j1-documents', 'j1-documents', true);

-- Create policy to allow anyone to upload files (since this is a public application form)
CREATE POLICY "Anyone can upload J1 documents"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'j1-documents');

-- Create policy to allow anyone to view uploaded files
CREATE POLICY "Anyone can view J1 documents"
ON storage.objects FOR SELECT
USING (bucket_id = 'j1-documents');

-- Create policy to allow users to update their own files
CREATE POLICY "Anyone can update J1 documents"
ON storage.objects FOR UPDATE
USING (bucket_id = 'j1-documents');

-- Create policy to allow users to delete files
CREATE POLICY "Anyone can delete J1 documents"
ON storage.objects FOR DELETE
USING (bucket_id = 'j1-documents');
