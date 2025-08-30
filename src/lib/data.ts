import type { LucideIcon } from 'lucide-react';
import { Building, Factory, Home } from 'lucide-react';

export const services = [
  {
    slug: 'residential',
    title: 'Residential Insulation',
    description: 'Keep your home comfortable year-round with our top-quality residential insulation services. We help you save on energy bills and improve your living environment.',
    longDescription: 'Our residential insulation solutions are designed to provide maximum thermal performance for your home. We use a variety of materials, including spray foam, fiberglass, and cellulose, to ensure a perfect fit for your specific needs and budget. A well-insulated home not only stays cooler in the summer and warmer in the winter but also benefits from noise reduction and improved indoor air quality. Our expert team will assess your home and recommend the best insulation strategy to achieve optimal energy efficiency and comfort.',
    icon: Home,
    image: 'https://picsum.photos/1200/800?random=21',
    imageHint: 'modern house'
  },
  {
    slug: 'commercial',
    title: 'Commercial Insulation',
    description: 'Optimize your commercial building\'s energy efficiency and reduce operating costs. We offer tailored solutions for offices, retail spaces, and more.',
    longDescription: 'InsulaTech Pro provides comprehensive insulation services for commercial properties of all sizes. From office buildings and retail stores to warehouses and multi-family housing, we have the expertise to handle complex projects. Our commercial insulation helps maintain consistent indoor temperatures, reduces HVAC system strain, and lowers utility expenses. We work around your business operations to minimize disruption and deliver a professional, timely installation that meets all building codes and standards.',
    icon: Building,
    image: 'https://picsum.photos/1200/800?random=22',
    imageHint: 'office building'
  },
  {
    slug: 'industrial',
    title: 'Industrial Insulation',
    description: 'Specialized insulation for industrial facilities to enhance safety, process control, and energy management in demanding environments.',
    longDescription: 'Industrial facilities have unique insulation requirements, from thermal control for processes to personnel protection and fire safety. InsulaTech Pro offers specialized industrial insulation services for pipes, tanks, and equipment. Our solutions are built to withstand harsh conditions, reduce energy loss, and improve workplace safety. We have experience working in a variety of industrial settings, including manufacturing plants, power generation facilities, and refineries, providing durable and effective insulation systems.',
    icon: Factory,
    image: 'https://picsum.photos/1200/800?random=23',
    imageHint: 'industrial factory'
  },
];

export const portfolio = [
  {
    id: 1,
    title: 'Attic Insulation Upgrade',
    category: 'Residential',
    beforeImage: 'https://picsum.photos/600/400?random=1',
    afterImage: 'https://picsum.photos/600/400?random=2',
    hint: 'attic insulation'
  },
  {
    id: 2,
    title: 'New Office Building',
    category: 'Commercial',
    beforeImage: 'https://picsum.photos/600/400?random=3',
    afterImage: 'https://picsum.photos/600/400?random=4',
    hint: 'office building'
  },
  {
    id: 3,
    title: 'Warehouse Roof Insulation',
    category: 'Commercial',
    beforeImage: 'https://picsum.photos/600/400?random=5',
    afterImage: 'https://picsum.photos/600/400?random=6',
    hint: 'warehouse roof'
  },
  {
    id: 4,
    title: 'Crawl Space Encapsulation',
    category: 'Residential',
    beforeImage: 'https://picsum.photos/600/400?random=7',
    afterImage: 'https://picsum.photos/600/400?random=8',
    hint: 'crawl space'
  },
  {
    id: 5,
    title: 'Industrial Pipe Wrapping',
    category: 'Industrial',
    beforeImage: 'https://picsum.photos/600/400?random=9',
    afterImage: 'https://picsum.photos/600/400?random=10',
    hint: 'industrial pipe'
  },
  {
    id: 6,
    title: 'Full Home Insulation Retrofit',
    category: 'Residential',
    beforeImage: 'https://picsum.photos/600/400?random=11',
    afterImage: 'https://picsum.photos/600/400?random=12',
    hint: 'house exterior'
  },
];

export const testimonials = [
  {
    quote: 'InsulaTech Pro transformed our drafty old house into a cozy home. Our energy bills have dropped significantly, and the team was incredibly professional and efficient. Highly recommended!',
    name: 'Sarah L.',
    location: 'Springfield, IL',
  },
  {
    quote: 'The difference in our office temperature is night and day. The insulation work was top-notch, and the project was completed on schedule with no disruption to our business.',
    name: 'David M.',
    location: 'Metro City, IL',
  },
  {
    quote: 'From the initial consultation to the final cleanup, the entire process was seamless. They insulated our new home\'s attic and walls, and we couldn\'t be happier with the results.',
    name: 'Emily R.',
    location: 'Oakville, IL',
  },
  {
    quote: 'As a facility manager, I need reliable contractors. InsulaTech Pro delivered on their promise for our industrial plant. Great work on the pipe insulation, a big improvement in safety and efficiency.',
    name: 'John C.',
    location: 'Industry Park, IL',
  },
];
