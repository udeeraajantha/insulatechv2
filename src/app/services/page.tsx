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

const processSteps = [
    {
        step: 1,
        title: "Initial Assessment",
        description: "Comprehensive site inspection and moisture/thermal analysis.",
    },
    {
        step: 2,
        title: "Custom Solution",
        description: "Tailored approach based on your specific needs and budget.",
    },
    {
        step: 3,
        title: "Professional Installation",
        description: "Expert installation using premium materials and proven techniques.",
    },
    {
        step: 4,
        title: "Quality Guarantee",
        description: "Performance verification and comprehensive warranty coverage.",
    },
]

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

      <section className="py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Professional Process</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              We follow a proven methodology to ensure every project meets our high standards and exceeds client expectations.
            </p>
          </div>
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex flex-col items-center text-center relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-xl z-10">
                  {step.step}
                </div>
                <h3 className="mt-4 font-semibold text-lg text-primary">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border -translate-x-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Project?</h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote. Our experts will help you choose the right solution for your specific needs and budget.
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}