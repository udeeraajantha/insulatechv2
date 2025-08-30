import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Heart, Shield, Zap, Award, Users, Target, Clock, LifeBuoy, Wrench } from 'lucide-react';
import type { Metadata } from 'next';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { leadershipTeam } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about InsulaTech Pro, our mission, values, and the team dedicated to providing the best insulation services.',
};

const coreValues = [
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Quality First",
        description: "We never compromise on quality. Every project is completed to the highest standards using premium materials and proven techniques."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Customer Focus",
        description: "Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Innovation",
        description: "We stay ahead with the latest technologies and methods to provide the most effective insulation and waterproofing solutions."
    }
]

const achievements = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Industry Recognition",
        description: "UAE Building Excellence Award 2023"
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        title: "Licensed & Certified",
        description: "Full licensing and insurance coverage"
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Client Satisfaction",
        description: "98% client satisfaction rate"
    },
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Project Success",
        description: "500+ successful project completions"
    }
]

const whyChooseUs = [
    {
        icon: <LifeBuoy className="h-8 w-8 text-primary" />,
        title: "Comprehensive Warranties",
        description: "Up to lifetime warranties on select services, giving you complete peace of mind."
    },
    {
        icon: <Clock className="h-8 w-8 text-primary" />,
        title: "24/7 Emergency Service",
        description: "Round-the-clock availability for urgent waterproofing and moisture issues."
    },
    {
        icon: <Wrench className="h-8 w-8 text-primary" />,
        title: "Industry Leading Methods",
        description: "Latest technologies and proven techniques for superior, long-lasting results."
    }
]

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

      <section className="py-12 md:py-20 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
                <p className="mt-4 text-muted-foreground">The principles that guide everything we do and define who we are as a company.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.map((value) => (
                    <div key={value.title} className="flex flex-col items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                            {value.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-primary">{value.title}</h3>
                        <p className="mt-2 text-muted-foreground">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">Our Leadership Team</h2>
                <p className="mt-4 text-muted-foreground">Meet the experienced professionals who lead our company and ensure every project meets our exacting standards.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {leadershipTeam.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                        <Avatar className="h-28 w-28 bg-primary text-primary-foreground">
                            <AvatarFallback className="text-3xl bg-primary text-primary-foreground">{member.initials}</AvatarFallback>
                        </Avatar>
                        <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground">{member.experience}</p>
                        <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 lg:py-24 bg-accent/10">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">Our Achievements</h2>
                <p className="mt-4 text-muted-foreground">Recognition and milestones that reflect our commitment to excellence and client satisfaction.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement) => (
                    <div key={achievement.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-md">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            {achievement.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-bold text-primary">{achievement.title}</h3>
                        <p className="mt-2 text-muted-foreground">{achievement.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-primary">Why Choose Insula Tech?</h2>
                <p className="mt-4 text-muted-foreground">What sets us apart from other contractors and makes us the preferred choice for discerning property owners.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChooseUs.map((item) => (
                     <Card key={item.title}>
                        <CardContent className="p-8 flex flex-col items-center text-center">
                             <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Work with the Best?</h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Experience the Insula Tech difference. Contact us today for a free consultation and discover why we're the UAE's most trusted insulation and waterproofing contractor.
          </p>
          <div className="mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Started Today <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
