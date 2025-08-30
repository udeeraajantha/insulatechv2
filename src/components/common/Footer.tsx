import Link from 'next/link';
import { Layers, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg text-primary">InsulaTech Pro</span>
            </Link>
            <p className="text-sm">Your trusted partner for professional insulation solutions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/residential" className="hover:text-primary transition-colors">Residential</Link></li>
              <li><Link href="/services/commercial" className="hover:text-primary transition-colors">Commercial</Link></li>
              <li><Link href="/services/industrial" className="hover:text-primary transition-colors">Industrial</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 flex-shrink-0" /> 123 Insulation Ave, Springfield, IL</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /> contact@insulatech.pro</li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} InsulaTech Pro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
