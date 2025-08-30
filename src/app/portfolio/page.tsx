import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolio } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Portfolio',
  description: 'View our portfolio of completed residential, commercial, and industrial insulation projects.',
};


export default function PortfolioPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2 text-center text-muted-foreground">Before</h3>
                      <div className="relative aspect-square">
                        <Image
                          src={project.beforeImage}
                          alt={`Before shot of ${project.title}`}
                          data-ai-hint={project.hint}
                          width={600}
                          height={400}
                          className="rounded-md object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-center text-muted-foreground">After</h3>
                       <div className="relative aspect-square">
                        <Image
                          src={project.afterImage}
                          alt={`After shot of ${project.title}`}
                          data-ai-hint={project.hint}
                           width={600}
                          height={400}
                          className="rounded-md object-cover border-2 border-accent"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
