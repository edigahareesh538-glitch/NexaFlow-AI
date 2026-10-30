import { MainLayout } from "@/components/layout/MainLayout";
import { ContactHero, ContactInfo, ContactFormSection, ContactCTA } from "@/components/contact/ContactContent";

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactCTA />
    </MainLayout>
  );
}