import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { services, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary">
            Superior Insulation, Unmatched Comfort
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            InsulaTech Pro delivers expert insulation solutions that enhance energy efficiency and comfort for homes and businesses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Services</h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
              We offer a comprehensive range of insulation services to meet your needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.slug} className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild>
                    <Link href={`/services/${service.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Why Choose InsulaTech Pro?</h2>
            <p className="mt-4 text-muted-foreground">
              We are committed to providing the highest quality service and results. Our experience and dedication set us apart.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Energy Savings</h3>
                  <p className="text-muted-foreground">Our insulation solutions can significantly reduce your heating and cooling costs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Improved Comfort</h3>
                  <p className="text-muted-foreground">Enjoy a more comfortable indoor environment with consistent temperatures year-round.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Expert Technicians</h3>
                  <p className="text-muted-foreground">Our certified professionals ensure a high-quality installation every time.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-80 lg:h-96">
            <Image
              src="https://picsum.photos/800/600"
              alt="Insulation professionals at work"
              data-ai-hint="insulation installation"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">What Our Clients Say</h2>
            <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
              We pride ourselves on customer satisfaction. Here's what some of our clients have to say.
            </p>
          </div>
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardContent className="pt-6 flex-grow">
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <CardFooter className="pt-4 border-t">
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Improve Your Property?</h2>
          <p className="mt-3 max-w-xl mx-auto">
            Contact us today for a free, no-obligation consultation and quote.
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
