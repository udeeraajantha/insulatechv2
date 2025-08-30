import { Phone, Mail, MapPin, Clock, MessageSquare, MailPlus, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const contactInfo = [
    {
        icon: <Phone className="h-6 w-6 text-primary" />,
        title: 'Phone',
        lines: ['+971 52 180 2244'],
    },
    {
        icon: <Mail className="h-6 w-6 text-primary" />,
        title: 'Email',
        lines: ['info@insulatech.ae'],
    },
    {
        icon: <MapPin className="h-6 w-6 text-primary" />,
        title: 'Address',
        lines: ['Office - C1 - 1F - SF3289, C1 Building', 'Ajman Free Zone, Ajman, UAE'],
    },
    {
        icon: <Clock className="h-6 w-6 text-primary" />,
        title: 'Business Hours',
        lines: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
    }
]

const quickContactOptions = [
    {
        icon: <Phone className="h-5 w-5" />,
        text: 'Call for Immediate Support',
        href: 'tel:+971521802244'
    },
    {
        icon: <MessageSquare className="h-5 w-5" />,
        text: 'WhatsApp Message',
        href: 'https://wa.me/971521802244'
    },
    {
        icon: <MailPlus className="h-5 w-5" />,
        text: 'Email Us Directly',
        href: 'mailto:info@insulatech.ae'
    }
]

export function GetInTouch() {
  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
            <p className="text-muted-foreground mt-2">
                Prefer to speak directly? Our team is available to discuss your project and answer any questions you may have.
            </p>
        </div>

        <div className="space-y-6">
            {contactInfo.map(item => (
                <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md bg-secondary">
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary">{item.title}</h3>
                        <div className="text-muted-foreground">
                            {item.lines.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div>
            <h3 className="text-lg font-bold text-primary mb-4">Quick Contact Options</h3>
            <div className="space-y-3">
                {quickContactOptions.map(option => (
                     <Button key={option.text} variant="outline" className="w-full justify-start" asChild>
                        <Link href={option.href} target="_blank">
                           {option.icon}
                           <span className="ml-2">{option.text}</span>
                        </Link>
                    </Button>
                ))}
            </div>
        </div>

        <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                24/7 Emergency Service
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
                Have a water leak or urgent moisture issue? Our emergency team is available around the clock.
            </p>
            <Button className="w-full" asChild>
                <Link href="tel:+971521802244">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Hotline: +971 52 180 2244
                </Link>
            </Button>
        </div>
    </div>
  );
}
