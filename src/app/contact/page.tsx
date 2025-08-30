import { ContactForm } from '@/components/contact/ContactForm';
import { GetInTouch } from '@/components/contact/GetInTouch';
import type { Metadata } from 'next';
import { CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Insula Tech for a free consultation or to ask any questions you may have.',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get Your Free Quote Today</h1>
          <p className="mt-3 max-w-2xl mx-auto">
            Ready to protect your property with professional insulation and waterproofing? Contact our experts for a free consultation and detailed project estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>No Obligation Quote</span>
              </div>
            </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <GetInTouch />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">Our Service Areas</h2>
                <p className="mt-4 text-muted-foreground">We proudly serve residential and commercial clients throughout the UAE, with our headquarters located in Ajman Free Zone.</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-primary/5 to-secondary">
                    <CardContent className="p-8 md:p-12 text-center">
                        <div className="flex justify-center mb-4">
                             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <MapPin className="h-8 w-8" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-primary">Serving All Emirates</h3>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            Dubai • Abu Dhabi • Sharjah • Ajman • Ras Al Khaimah • Fujairah • Umm Al Quwain
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

    </div>
  );
}
