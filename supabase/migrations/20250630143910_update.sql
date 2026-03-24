
-- Create a table to store J1 program applications
CREATE TABLE public.j1_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  country TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  education_level TEXT NOT NULL,
  university TEXT NOT NULL,
  experience TEXT NOT NULL,
  program TEXT NOT NULL,
  authorized_to_work BOOLEAN NOT NULL,
  visa_filed BOOLEAN NOT NULL,
  visa_screen_certificate BOOLEAN NOT NULL,
  ielts_toefl BOOLEAN NOT NULL,
  resume_url TEXT,
  transcript_url TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public for now since this is a public application form
ALTER TABLE public.j1_applications ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert applications (public form)
CREATE POLICY "Anyone can submit J1 applications" 
  ON public.j1_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows reading applications (you may want to restrict this later)
CREATE POLICY "Anyone can view J1 applications" 
  ON public.j1_applications 
  FOR SELECT 
  USING (true);
