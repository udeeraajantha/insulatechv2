import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our professional insulation services for residential, commercial, and industrial properties.',
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Professional Insulation & Waterproofing Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            Comprehensive solutions to protect your property, improve energy efficiency, and ensure long-term comfort. Serving residential and commercial clients across the UAE.
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Complete Range of Services</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              From residential waterproofing to large-scale commercial insulation, we have the expertise and equipment to handle projects of any size.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col text-left hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg">
                <CardHeader className="flex-row items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col p-6 pt-0">
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                           <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                </CardContent>
                <CardFooter className="p-6 pt-0 mt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/contact?service=${service.slug}`}>Get Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
