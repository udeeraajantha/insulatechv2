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
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A gallery of our successful insulation projects. See the InsulaTech Pro difference.
          </p>
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
