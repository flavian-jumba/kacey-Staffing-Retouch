-- Add other_program column and update constraints
ALTER TABLE public.j1_applications
  ADD COLUMN other_program TEXT,
  ALTER COLUMN resume_url SET NOT NULL;

-- Add constraint to validate other_program when program is 'other'
ALTER TABLE public.j1_applications
  ADD CONSTRAINT validate_other_program 
  CHECK (
    (program != 'other') OR 
    (program = 'other' AND other_program IS NOT NULL AND other_program != '')
  );

-- Add constraint to validate date_of_birth format and range
ALTER TABLE public.j1_applications
  ADD CONSTRAINT validate_date_of_birth
  CHECK (
    date_of_birth IS NOT NULL AND
    date_of_birth <= CURRENT_DATE AND
    date_of_birth >= '1900-01-01'::date
  );