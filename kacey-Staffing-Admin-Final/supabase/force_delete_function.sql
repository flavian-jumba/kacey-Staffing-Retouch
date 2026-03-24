-- This SQL function provides a way to forcibly delete a J1 application
-- You can run this in the Supabase SQL Editor

CREATE OR REPLACE FUNCTION public.force_delete_application(application_id UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER -- This runs with the privileges of the function creator
AS $$
BEGIN
    -- Delete the application with the given ID
    DELETE FROM public.j1_applications 
    WHERE id = application_id;
END;
$$;

-- Grant permission to use this function to authenticated users
GRANT EXECUTE ON FUNCTION public.force_delete_application(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION public.force_delete_application(UUID) TO anon;
GRANT EXECUTE ON FUNCTION public.force_delete_application(UUID) TO service_role;