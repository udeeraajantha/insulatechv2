import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about InsulaTech Pro, our mission, values, and the team dedicated to providing the best insulation services.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Insula Tech</h1>
                    <p className="max-w-xl text-lg text-primary-foreground/90">
                        For over a decade, we've been the UAE's trusted partner for professional insulation and waterproofing solutions. Our commitment to excellence and customer satisfaction has made us the preferred choice for property owners across the Emirates.
                    </p>
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/contact">Work With Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                        <CardContent className="p-6 text-center">
                            <p className="text-4xl font-bold text-accent">10+</p>
                            <p className="text-sm text-primary-foreground/80 mt-2">Years in Business</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                        <CardContent className="p-6 text-center">
                            <p className="text-4xl font-bold text-accent">500+</p>
                            <p className="text-sm text-primary-foreground/80 mt-2">Projects Completed</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                        <CardContent className="p-6 text-center">
                            <p className="text-4xl font-bold text-accent">98%</p>
                            <p className="text-sm text-primary-foreground/80 mt-2">Client Satisfaction</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                        <CardContent className="p-6 text-center">
                            <p className="text-4xl font-bold text-accent">24/7</p>
                            <p className="text-sm text-primary-foreground/80 mt-2">Emergency Service</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2013, Insula Tech began with a simple mission: to provide the UAE with reliable, professional insulation and waterproofing services that protect properties and improve lives.
              </p>
              <p className="text-muted-foreground">
                What started as a small team of dedicated professionals has grown into one of the region's most trusted contractors, serving residential and commercial clients from Dubai to Abu Dhabi and beyond.
              </p>
              <p className="text-muted-foreground">
                Our success is built on three pillars: technical expertise, quality materials, and unwavering commitment to customer satisfaction. We don't just complete projects – we build lasting relationships with our clients.
              </p>
            </div>
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Licensed & Insured</h3>
                        <p className="text-muted-foreground mt-1">Fully licensed contractors with comprehensive insurance coverage for your peace of mind.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Expert Team</h3>
                        <p className="text-muted-foreground mt-1">Certified professionals with specialized training in the latest insulation and waterproofing technologies.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-primary">
                        <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">Quality Guarantee</h3>
                        <p className="text-muted-foreground mt-1">We stand behind our work with comprehensive warranties and ongoing support.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
