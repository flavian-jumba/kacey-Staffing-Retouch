"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2, Upload, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useJ1Application, J1ApplicationData } from "@/hooks/useJ1Application";
import FileUploadField from "@/components/FileUploadField";

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "education", title: "Education" },
  { id: "program", title: "Program" },
  { id: "eligibility", title: "Eligibility" },
  { id: "documents", title: "Documents" },
  { id: "review", title: "Review" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

const YesNoRadio = ({
  name,
  value,
  onChange,
}: {
  name: string;
  value: boolean;
  onChange: (val: boolean) => void;
}) => (
  <RadioGroup
    value={value.toString()}
    onValueChange={(v) => onChange(v === "true")}
    className="flex items-center space-x-6"
  >
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="true" id={`${name}-yes`} />
      <Label htmlFor={`${name}-yes`} className="cursor-pointer">
        Yes
      </Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="false" id={`${name}-no`} />
      <Label htmlFor={`${name}-no`} className="cursor-pointer">
        No
      </Label>
    </div>
  </RadioGroup>
);

const ApplicationMultiStepForm = () => {
  const { submitApplication, isSubmitting } = useJ1Application();
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState<J1ApplicationData>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "",
    email: "",
    phone: "",
    educationLevel: "",
    university: "",
    experience: "",
    program: "",
    otherProgram: "",
    authorizedToWork: false,
    visaFiled: false,
    visaScreenCertificate: false,
    ieltsToefl: false,
    consent: false,
    resumeUrl: "",
    transcriptUrl: "",
  });

  const update = (field: keyof J1ApplicationData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((p) => p + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((p) => p - 1);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== "" &&
          formData.dateOfBirth !== "" &&
          formData.country.trim() !== ""
        );
      case 1:
        return (
          formData.educationLevel !== "" &&
          formData.university.trim() !== "" &&
          formData.experience.trim() !== ""
        );
      case 2:
        return (
          formData.program !== "" &&
          (formData.program !== "other" || formData.otherProgram.trim() !== "")
        );
      case 3:
        return true; // boolean fields always have a value
      case 4:
        return formData.resumeUrl !== "";
      case 5:
        return formData.consent;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    const success = await submitApplication(formData);
    if (success) {
      setFormData({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        country: "",
        email: "",
        phone: "",
        educationLevel: "",
        university: "",
        experience: "",
        program: "",
        otherProgram: "",
        authorizedToWork: false,
        visaFiled: false,
        visaScreenCertificate: false,
        ieltsToefl: false,
        consent: false,
        resumeUrl: "",
        transcriptUrl: "",
      });
      setCurrentStep(0);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      {/* Progress indicator */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-[#8B1A4A]"
                    : index === currentStep
                    ? "bg-[#8B1A4A] ring-4 ring-[#8B1A4A]/20"
                    : "bg-muted"
                )}
                onClick={() => {
                  if (index <= currentStep) setCurrentStep(index);
                }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className={cn(
                  "text-xs mt-1.5 hidden sm:block",
                  index === currentStep
                    ? "text-[#8B1A4A] font-medium"
                    : "text-muted-foreground"
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-[#8B1A4A]"
            initial={{ width: 0 }}
            animate={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border shadow-md rounded-3xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              {/* ── Step 1: Personal Info ─────────────────────────────── */}
              {currentStep === 0 && (
                <>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Tell us some basic details about yourself
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="e.g. Jane"
                          value={formData.firstName}
                          onChange={(e) => update("firstName", e.target.value)}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          placeholder="e.g. Doe"
                          value={formData.lastName}
                          onChange={(e) => update("lastName", e.target.value)}
                        />
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => update("email", e.target.value)}
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={(e) => update("phone", e.target.value)}
                        />
                      </motion.div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) =>
                            update("dateOfBirth", e.target.value)
                          }
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          placeholder="e.g. Kenya"
                          value={formData.country}
                          onChange={(e) => update("country", e.target.value)}
                        />
                      </motion.div>
                    </div>
                  </CardContent>
                </>
              )}

              {/* ── Step 2: Education & Experience ───────────────────── */}
              {currentStep === 1 && (
                <>
                  <CardHeader>
                    <CardTitle>Education & Experience</CardTitle>
                    <CardDescription>
                      Your academic background and professional experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label>Highest Education Level *</Label>
                      <RadioGroup
                        value={formData.educationLevel}
                        onValueChange={(v) => update("educationLevel", v)}
                        className="space-y-2"
                      >
                        {[
                          "Diploma",
                          "Bachelors/ Degree",
                          "Masters",
                          "PHD/Doctorate",
                        ].map((level, i) => (
                          <motion.div
                            key={level}
                            className="flex items-center space-x-2 rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: 1,
                              x: 0,
                              transition: { delay: 0.08 * i, duration: 0.3 },
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <RadioGroupItem
                              value={level}
                              id={`edu-${level}`}
                            />
                            <Label
                              htmlFor={`edu-${level}`}
                              className="cursor-pointer w-full"
                            >
                              {level}
                            </Label>
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="university">
                        College / University Name *
                      </Label>
                      <Input
                        id="university"
                        placeholder="e.g. University of Nairobi"
                        value={formData.university}
                        onChange={(e) => update("university", e.target.value)}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="experience">
                        Years of Experience / Specialty *
                      </Label>
                      <Input
                        id="experience"
                        placeholder="e.g. 5 Years / Pediatrics"
                        value={formData.experience}
                        onChange={(e) => update("experience", e.target.value)}
                      />
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 3: Program Selection ─────────────────────────── */}
              {currentStep === 2 && (
                <>
                  <CardHeader>
                    <CardTitle>Program Selection</CardTitle>
                    <CardDescription>
                      Which programme are you applying for?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <RadioGroup
                        value={formData.program}
                        onValueChange={(v) => {
                          update("program", v);
                          if (v !== "other") update("otherProgram", "");
                        }}
                        className="space-y-2"
                      >
                        {[
                          {
                            value: "CNA - Certified Nurse Assistant",
                            label: "CNA – Certified Nurse Assistant",
                          },
                          { value: "Hospitality", label: "Hospitality" },
                          { value: "Teaching", label: "Teaching" },
                          { value: "other", label: "Other" },
                        ].map((prog, i) => (
                          <motion.div
                            key={prog.value}
                            className="flex flex-col rounded-md border p-3 cursor-pointer hover:bg-accent transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: { delay: 0.08 * i, duration: 0.3 },
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value={prog.value}
                                id={`prog-${prog.value}`}
                              />
                              <Label
                                htmlFor={`prog-${prog.value}`}
                                className="cursor-pointer w-full"
                              >
                                {prog.label}
                              </Label>
                            </div>
                            {prog.value === "other" &&
                              formData.program === "other" && (
                                <div className="mt-3 ml-6">
                                  <Input
                                    id="other-program-input"
                                    placeholder="Please specify your program"
                                    value={formData.otherProgram}
                                    onChange={(e) =>
                                      update("otherProgram", e.target.value)
                                    }
                                    autoFocus
                                  />
                                </div>
                              )}
                          </motion.div>
                        ))}
                      </RadioGroup>
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 4: Eligibility ───────────────────────────────── */}
              {currentStep === 3 && (
                <>
                  <CardHeader>
                    <CardTitle>Eligibility Questions</CardTitle>
                    <CardDescription>
                      Please answer honestly — this helps us match you with the
                      right opportunity
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        field: "authorizedToWork" as keyof J1ApplicationData,
                        question:
                          "Are you currently authorised to work in the US?",
                        value: formData.authorizedToWork as boolean,
                      },
                      {
                        field: "visaFiled" as keyof J1ApplicationData,
                        question:
                          "Has a US Immigrant Visa ever been filed on your behalf?",
                        value: formData.visaFiled as boolean,
                      },
                      {
                        field: "visaScreenCertificate" as keyof J1ApplicationData,
                        question:
                          "Have you ever had a Visa Screen Certificate?",
                        value: formData.visaScreenCertificate as boolean,
                      },
                      {
                        field: "ieltsToefl" as keyof J1ApplicationData,
                        question:
                          "Have you passed the academic IELTS or TOEFLiBT exam within the last 2 years?",
                        value: formData.ieltsToefl as boolean,
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.field as string}
                        className="space-y-2 rounded-md border p-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 * i, duration: 0.3 },
                        }}
                      >
                        <Label className="text-sm font-medium leading-snug">
                          {item.question}
                        </Label>
                        <YesNoRadio
                          name={item.field as string}
                          value={item.value}
                          onChange={(val) => update(item.field, val)}
                        />
                      </motion.div>
                    ))}
                  </CardContent>
                </>
              )}

              {/* ── Step 5: Documents ─────────────────────────────────── */}
              {currentStep === 4 && (
                <>
                  <CardHeader>
                    <CardTitle>Document Upload</CardTitle>
                    <CardDescription>
                      Upload your resume/CV and any academic certificates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <FileUploadField
                        id="resume-upload"
                        label="Resume / CV *"
                        accept=".pdf,.doc,.docx"
                        required
                        onFileUploaded={(url) => update("resumeUrl", url)}
                        uploadFolder="resumes"
                      />
                      {formData.resumeUrl && (
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Resume uploaded successfully
                        </p>
                      )}
                    </motion.div>
                    <motion.div variants={fadeInUp} className="space-y-2">
                      <FileUploadField
                        id="transcript-upload"
                        label="Nursing School Transcripts & Certificate (optional)"
                        accept=".pdf,.doc,.docx"
                        required={false}
                        onFileUploaded={(url) => update("transcriptUrl", url)}
                        uploadFolder="transcripts"
                      />
                      {formData.transcriptUrl && (
                        <p className="text-sm text-green-600 flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Transcript uploaded successfully
                        </p>
                      )}
                    </motion.div>
                  </CardContent>
                </>
              )}

              {/* ── Step 6: Review & Submit ──────────────────────────── */}
              {currentStep === 5 && (
                <>
                  <CardHeader>
                    <CardTitle>Review & Submit</CardTitle>
                    <CardDescription>
                      Check your details before submitting
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Summary grid */}
                    <motion.div
                      variants={fadeInUp}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                    >
                      {[
                        {
                          label: "Full Name",
                          value: `${formData.firstName} ${formData.lastName}`,
                        },
                        { label: "Email", value: formData.email },
                        { label: "Phone", value: formData.phone },
                        { label: "Country", value: formData.country },
                        {
                          label: "Education",
                          value: formData.educationLevel,
                        },
                        { label: "University", value: formData.university },
                        {
                          label: "Experience",
                          value: formData.experience,
                        },
                        {
                          label: "Program",
                          value:
                            formData.program === "other"
                              ? formData.otherProgram
                              : formData.program,
                        },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="bg-muted/40 rounded-lg p-3 border"
                        >
                          <p className="text-muted-foreground text-xs uppercase tracking-wide mb-0.5">
                            {row.label}
                          </p>
                          <p className="font-medium truncate">
                            {row.value || "—"}
                          </p>
                        </div>
                      ))}
                    </motion.div>

                    {/* Document status */}
                    <motion.div
                      variants={fadeInUp}
                      className="flex gap-4 text-sm"
                    >
                      <span
                        className={cn(
                          "flex items-center gap-1",
                          formData.resumeUrl
                            ? "text-green-600"
                            : "text-muted-foreground"
                        )}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Resume{" "}
                        {formData.resumeUrl ? "uploaded" : "not uploaded"}
                      </span>
                      <span
                        className={cn(
                          "flex items-center gap-1",
                          formData.transcriptUrl
                            ? "text-green-600"
                            : "text-muted-foreground"
                        )}
                      >
                        <CheckCircle className="h-4 w-4" />
                        Transcript{" "}
                        {formData.transcriptUrl ? "uploaded" : "not uploaded"}
                      </span>
                    </motion.div>

                    {/* Consent */}
                    <motion.div
                      variants={fadeInUp}
                      className="flex items-start space-x-3 rounded-md border p-4"
                    >
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) =>
                          update("consent", Boolean(checked))
                        }
                      />
                      <div>
                        <Label
                          htmlFor="consent"
                          className="font-semibold cursor-pointer"
                        >
                          Privacy Policy & Terms Agreement *
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          I agree to the privacy policy and terms and
                          conditions. I consent to the processing of my personal
                          data for application purposes.
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </>
              )}
            </motion.div>
          </AnimatePresence>

          <CardFooter className="flex justify-between pt-4 pb-6 px-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-1 rounded-2xl"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="button"
                onClick={
                  currentStep === steps.length - 1 ? handleSubmit : nextStep
                }
                disabled={!isStepValid() || isSubmitting}
                className="flex items-center gap-1 rounded-2xl bg-[#8B1A4A] hover:bg-[#a01f57] text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : currentStep === steps.length - 1 ? (
                  <>
                    Submit <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Next <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <motion.div
        className="mt-4 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length}:{" "}
        <span className="font-medium text-foreground">
          {steps[currentStep].title}
        </span>
      </motion.div>
    </div>
  );
};

export default ApplicationMultiStepForm;
