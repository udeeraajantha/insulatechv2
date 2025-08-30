import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about InsulaTech Pro, our mission, values, and the team dedicated to providing the best insulation services.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">About InsulaTech Pro</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Your trusted partner in creating more comfortable, energy-efficient, and sustainable properties through expert insulation solutions.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-muted-foreground">
                At InsulaTech Pro, our mission is to deliver superior insulation services that enhance the quality of life for our clients. We are committed to using the highest quality materials and the latest techniques to ensure optimal energy efficiency, comfort, and safety. We strive to build lasting relationships based on trust, integrity, and unparalleled customer service.
              </p>
              <h2 className="text-3xl font-bold text-primary">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Quality & Excellence</h3>
                    <p className="text-muted-foreground">We never compromise on quality, from materials to workmanship.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Customer Centricity</h3>
                    <p className="text-muted-foreground">Our clients are at the heart of everything we do.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Integrity & Honesty</h3>
                    <p className="text-muted-foreground">We operate with transparency and uphold the highest ethical standards.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="https://picsum.photos/800/600?random=50"
                alt="InsulaTech Pro team meeting"
                data-ai-hint="team meeting office"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
