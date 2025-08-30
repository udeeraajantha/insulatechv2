'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolio } from '@/lib/data';
import { MapPin, Calendar, User, CheckCircle, Award, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// export const metadata: Metadata = {
//   title: 'Project Portfolio',
//   description: 'View our portfolio of completed residential, commercial, and industrial insulation projects.',
// };

const allCategories = ['All Projects', ...Array.from(new Set(portfolio.flatMap(p => p.tags)))];


export default function PortfolioPage() {
  const [filter, setFilter] = useState('All Projects');

  const filteredProjects = filter === 'All Projects' 
    ? portfolio 
    : portfolio.filter(p => p.tags.includes(filter));

  return (
    <div className="w-full">
      <section className="bg-primary py-16 md:py-24 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Project Portfolio</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary-foreground/90">
            Explore our completed projects across the UAE. From residential waterproofing to large-scale commercial insulation, see how we deliver exceptional results.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/80 mt-2">Completed Projects</p>
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
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/80 mt-2">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    data-ai-hint={project.hint}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.map(tag => (
                       <Badge key={tag} variant="secondary" className="bg-accent/80 text-accent-foreground backdrop-blur-sm">{tag}</Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <h2 className="text-2xl font-bold text-primary mb-2">{project.title}</h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /><span>{project.location}</span></div>
                        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /><span>{project.date}</span></div>
                        <div className="flex items-center gap-2"><User className="h-4 w-4 text-primary" /><span>{project.client}</span></div>
                    </div>
                    
                    <div className="mb-6">
                        <h3 className="font-semibold text-primary mb-3">Project Features:</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto bg-accent/10 p-4 rounded-md">
                        <h3 className="font-semibold text-primary mb-2 flex items-center gap-2"><Award className="h-5 w-5 text-accent"/>Results:</h3>
                        <p className="text-sm text-primary/90">{project.results}</p>
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Start Your Project?</h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Insula Tech difference. Contact us today for a free consultation and detailed project proposal.
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
