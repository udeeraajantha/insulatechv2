import { notFound } from 'next/navigation';
import Image from 'next/image';
import { services } from '@/lib/data';
import { FaqGenerator } from '@/components/services/FaqGenerator';
import type { Metadata, ResolvingMetadata } from 'next'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
 
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
 
  return {
    title: service.title,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full">
       <section className="relative w-full h-80 md:h-96">
        <Image 
            src={service.image} 
            alt={service.title}
            data-ai-hint={service.imageHint}
            fill 
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">{service.title}</h1>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-3xl font-bold text-primary">Service Details</h2>
                    <p className="text-lg text-muted-foreground">{service.longDescription}</p>
                    <Button size="lg" asChild>
                      <Link href="/contact">Request Consultation</Link>
                    </Button>
                </div>
                <div className="lg:col-span-1">
                    <FaqGenerator serviceName={service.title} serviceDescription={service.longDescription} />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
