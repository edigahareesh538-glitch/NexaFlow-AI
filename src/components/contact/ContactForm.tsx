"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2, Mail, Building2, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

const initialErrors: FormErrors = {};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate random success/failure for demo
    const success = Math.random() > 0.3;

    setIsSubmitting(false);

    if (success) {
      setSubmitStatus("success");
      setSubmitMessage("Thanks for reaching out! We'll get back to you within 24 hours.");
      setFormData(initialFormData);
    } else {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again or email us directly at hello@nexafow.ai");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          error={errors.name}
          icon={<User className="w-5 h-5" />}
          disabled={isSubmitting}
          required
        />
        <Input
          label="Work Email"
          placeholder="john@company.com"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={errors.email}
          icon={<Mail className="w-5 h-5" />}
          disabled={isSubmitting}
          required
        />
      </div>

      <Input
        label="Company"
        placeholder="Acme Inc."
        value={formData.company}
        onChange={(e) => handleChange("company", e.target.value)}
        error={errors.company}
        icon={<Building2 className="w-5 h-5" />}
        disabled={isSubmitting}
        required
      />

      <Textarea
        label="Message"
        placeholder="Tell us about your automation needs, current stack, and what you're looking to achieve..."
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
        error={errors.message}
        icon={<MessageSquare className="w-5 h-5" />}
        disabled={isSubmitting}
        required
        rows={5}
      />

      <AnimatePresence mode="wait">
        {submitStatus !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-xl flex items-center gap-3 ${
              submitStatus === "success"
                ? "bg-green-400/10 text-green-400 border border-green-400/20"
                : "bg-red-400/10 text-red-400 border border-red-400/20"
            }`}
            role="alert"
          >
            {submitStatus === "success" ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <p className="text-sm">{submitMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        loading={isSubmitting}
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <Loader2 className="w-5 h-5" />
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our{" "}
        <a href="#" className="underline hover:text-primary">Privacy Policy</a>
        {" and consent to being contacted by our team."}
      </p>
    </form>
  );
}