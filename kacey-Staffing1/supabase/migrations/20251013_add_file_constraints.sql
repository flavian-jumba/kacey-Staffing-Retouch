-- Add NOT NULL constraint to resume_url
ALTER TABLE j1_applications 
  ALTER COLUMN resume_url SET NOT NULL,
  ADD CONSTRAINT resume_url_not_empty CHECK (resume_url != '');

-- Add constraint to ensure other_program is provided when program is 'other'
ALTER TABLE j1_applications
  ADD CONSTRAINT valid_program_selection 
  CHECK (
    (program != 'other' AND other_program IS NULL) OR 
    (program = 'other' AND other_program IS NOT NULL AND other_program != '')
  );

-- Add a trigger to validate required fields
CREATE OR REPLACE FUNCTION validate_j1_application()
RETURNS TRIGGER AS $$
BEGIN
  -- Check for empty strings or whitespace in required fields
  IF TRIM(NEW.first_name) = '' OR
     TRIM(NEW.last_name) = '' OR
     TRIM(NEW.email) = '' OR
     TRIM(NEW.date_of_birth) = '' OR
     TRIM(NEW.country) = '' OR
     TRIM(NEW.phone) = '' OR
     TRIM(NEW.education_level) = '' OR
     TRIM(NEW.university) = '' OR
     TRIM(NEW.experience) = '' OR
     TRIM(NEW.program) = '' OR
     NEW.resume_url IS NULL OR
     TRIM(NEW.resume_url) = '' THEN
    
    RAISE EXCEPTION 'Required fields cannot be empty or contain only whitespace';
  END IF;

  -- Validate email format
  IF NEW.email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;

  -- Additional validation can be added here

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger
DROP TRIGGER IF EXISTS validate_j1_application_trigger ON j1_applications;
CREATE TRIGGER validate_j1_application_trigger
  BEFORE INSERT OR UPDATE ON j1_applications
  FOR EACH ROW
  EXECUTE FUNCTION validate_j1_application();

-- Add a comment explaining the validations
COMMENT ON TABLE j1_applications IS 'J1 Program applications with required field validations. Resume is mandatory, and other_program is required when program is "other".';