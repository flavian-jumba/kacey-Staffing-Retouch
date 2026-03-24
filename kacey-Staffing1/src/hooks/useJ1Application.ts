
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface J1ApplicationData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  email: string;
  phone: string;
  educationLevel: string;
  university: string;
  experience: string;
  program: string;
  otherProgram: string;  // Added for other program option
  authorizedToWork: boolean;
  visaFiled: boolean;
  visaScreenCertificate: boolean;
  ieltsToefl: boolean;
  consent: boolean;
  resumeUrl?: string;
  transcriptUrl?: string;
}

export const useJ1Application = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitApplication = async (data: J1ApplicationData) => {
    setIsSubmitting(true);
    
    try {
      // Log validation start
      console.log('Starting application submission validation:', {
        hasResume: Boolean(data.resumeUrl),
        hasTranscript: Boolean(data.transcriptUrl),
        programType: data.program,
        hasOtherProgram: Boolean(data.otherProgram),
        hasConsent: data.consent,
        allFields: Object.entries(data).reduce((acc, [key, value]) => {
          acc[key] = value ? 'Present' : 'Missing';
          return acc;
        }, {})
      });

      // Additional validation before submission
      if (!data.resumeUrl || data.resumeUrl.trim() === '') {
        throw new Error('Resume is required');
      }

      if (data.program === 'other' && (!data.otherProgram || data.otherProgram.trim() === '')) {
        throw new Error('Please specify your program in the Other field');
      }

      // Validate date format
      const dateOfBirth = new Date(data.dateOfBirth);
      if (isNaN(dateOfBirth.getTime())) {
        throw new Error('Invalid date format for date of birth');
      }

      // Format date as YYYY-MM-DD for PostgreSQL
      const formattedDate = dateOfBirth.toISOString().split('T')[0];

      // Validate email format
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }

      // Prepare the application data
      const applicationData = {
        first_name: data.firstName.trim(),
        last_name: data.lastName.trim(),
        date_of_birth: formattedDate,
        country: data.country.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        education_level: data.educationLevel.trim(),
        university: data.university.trim(),
        experience: data.experience.trim(),
        program: data.program.trim(),
        other_program: data.program === 'other' ? data.otherProgram.trim() : null,
        authorized_to_work: data.authorizedToWork,
        visa_filed: data.visaFiled,
        visa_screen_certificate: data.visaScreenCertificate,
        ielts_toefl: data.ieltsToefl,
        consent: data.consent,
        resume_url: data.resumeUrl.trim(),
        transcript_url: data.transcriptUrl?.trim() || null,
      };

      // Validate all required fields have values
      const requiredFields = [
        'first_name', 'last_name', 'date_of_birth', 'country', 
        'email', 'phone', 'education_level', 'university', 
        'experience', 'program', 'resume_url'
      ];

      const missingFields = requiredFields.filter(field => !applicationData[field]);
      if (missingFields.length > 0) {
        throw new Error(`Required fields missing: ${missingFields.join(', ')}`);
      }

      const { error } = await supabase
        .from('j1_applications')
        .insert(applicationData);

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for your interest in our J1 Program. We will review your application and contact you soon.",
      });

      // Redirect to home page after successful submission
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);

      return true;
    } catch (error) {
      // Detailed error logging
      console.error('Error submitting application:', {
        error,
        errorMessage: error instanceof Error ? error.message : String(error),
        formData: {
          ...data,
          // Exclude sensitive fields from logging
          resumeUrl: data.resumeUrl ? 'Present' : 'Missing',
          transcriptUrl: data.transcriptUrl ? 'Present' : 'Missing'
        }
      });
      
      // Handle specific database validation errors
      const errorMsg = error instanceof Error ? error.message : String(error);
      let userMessage = "There was an error submitting your application. Please try again.";
      
      console.error('Detailed error:', errorMsg);  // Log the detailed error for debugging
      
      if (errorMsg.includes('resume_url')) {
        userMessage = "Resume upload is required to submit your application.";
      } else if (errorMsg.includes('other_program')) {
        userMessage = "Please specify your program in the Other field.";
      } else if (errorMsg.includes('Required fields missing')) {
        const fields = errorMsg.split(':')[1]?.trim() || '';
        userMessage = `Please fill in all required fields: ${fields}`;
      } else if (errorMsg.includes('Invalid email')) {
        userMessage = "Please enter a valid email address.";
      } else if (errorMsg.includes('date_of_birth')) {
        userMessage = "Please enter a valid date of birth.";
      } else if (errorMsg.includes('validate_other_program')) {
        userMessage = "Please specify your program in the Other field.";
      } else if (errorMsg.includes('duplicate key')) {
        userMessage = "An application with this email already exists.";
      }

      toast({
        title: "Submission Failed",
        description: userMessage,
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitApplication,
    isSubmitting,
  };
};
