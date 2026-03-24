-- Create a table to store partnership requests
CREATE TABLE public.partnership_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  organization_name TEXT NOT NULL,
  position TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  facility_type TEXT NOT NULL,
  staffing_needs TEXT NOT NULL,
  contact_method TEXT,
  timeline TEXT,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - public form
ALTER TABLE public.partnership_requests ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to insert partnership requests
CREATE POLICY "Anyone can submit partnership requests"
  ON public.partnership_requests
  FOR INSERT
  WITH CHECK (true);

-- Create policy that allows reading partnership requests
CREATE POLICY "Anyone can view partnership requests"
  ON public.partnership_requests
  FOR SELECT
  USING (true);
