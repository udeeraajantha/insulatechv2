import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, ArrowRight, ShieldCheck, Zap, Clock, Star } from 'lucide-react';
import { services, testimonials, portfolio } from '@/lib/data';

export default function Home() {
  const recentProjects = portfolio.slice(0, 3);
  const homeServices = services.slice(0, 3);
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-48 flex items-center justify-center text-white">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Professional insulation services"
          data-ai-hint="insulation installation"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional <br />
              <span className="text-accent">Insulation Solutions</span> <br />
              for Your Property
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-lg text-primary-foreground/90">
              Expert insulation and waterproofing services across the UAE. Energy-efficient solutions that protect your property and reduce costs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="h-10 w-10 text-accent" />
                <h3 className="font-semibold">Licensed & Insured</h3>
                <p className="text-sm text-primary-foreground/80">Full coverage protection</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Zap className="h-10 w-10 text-accent" />
                <h3 className="font-semibold">10+ Years Experience</h3>
                <p className="text-sm text-primary-foreground/80">Proven expertise</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-10 w-10 text-accent" />
                <h3 className="font-semibold">24/7 Emergency</h3>
                <p className="text-sm text-primary-foreground/80">Always available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Professional Services</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              Comprehensive insulation and waterproofing solutions designed to protect your property and improve energy efficiency.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service) => (
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
           <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Insula Tech?</h2>
            <p className="text-primary-foreground/80">
              With over 10 years of experience in the market, we deliver professional insulation and waterproofing solutions that protect your investment and improve comfort.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span>Licensed and fully insured contractors</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span>10+ years serving UAE properties</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span>Lifetime warranties on select services</span>
              </li>
               <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span>24/7 emergency response available</span>
              </li>
            </ul>
             <Button size="lg" variant="secondary" asChild>
                <Link href="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                <p className="text-4xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/80 mt-2">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center text-accent">
                        <Star className="w-7 h-7" fill="currentColor" />
                        <Star className="w-7 h-7" fill="currentColor" />
                        <Star className="w-7 h-7" fill="currentColor" />
                        <Star className="w-7 h-7" fill="currentColor" />
                        <Star className="w-7 h-7" />
                    </div>
                    <p className="text-sm text-primary-foreground/80 mt-2">Average Rating</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="recent-projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Recent Projects</h2>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
              See how we've helped property owners across the UAE with professional insulation and waterproofing solutions.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project) => (
              <Link key={project.id} href="/portfolio" className="group">
                <Card className="overflow-hidden h-full rounded-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      data-ai-hint={project.hint}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link href="/portfolio">View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
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
