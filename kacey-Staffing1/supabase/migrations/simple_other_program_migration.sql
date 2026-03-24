-- Simple migration for adding other_program column
-- Copy and paste this into Supabase SQL Editor

-- Add other_program column if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'j1_applications' 
        AND column_name = 'other_program'
    ) THEN 
        ALTER TABLE j1_applications 
        ADD COLUMN other_program TEXT;
    END IF;
END $$;

-- Add constraint to validate other_program when program is 'other'
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 
        FROM pg_constraint 
        WHERE conname = 'validate_other_program'
    ) THEN 
        ALTER TABLE j1_applications
        ADD CONSTRAINT validate_other_program 
        CHECK (
            (program != 'other') OR 
            (program = 'other' AND other_program IS NOT NULL AND other_program != '')
        );
    END IF;
END $$;