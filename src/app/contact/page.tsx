import { ContactForm } from '@/components/contact/ContactForm';
import { ServiceAreaMap } from '@/components/contact/ServiceAreaMap';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with InsulaTech Pro for a free consultation or to ask any questions you may have.',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Contact us for a free quote or to discuss your project needs.
          </p>
        </div>
      </section>
      
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ServiceAreaMap />
          </div>
        </div>
      </section>
    </div>
  );
}
