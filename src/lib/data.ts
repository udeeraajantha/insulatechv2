import type { LucideIcon } from 'lucide-react';
import { Building, Factory, Home, Droplets, Wind, Warehouse, Thermometer, Shield } from 'lucide-react';

export const services = [
  {
    slug: 'residential',
    title: 'Residential Insulation',
    description: 'Keep your home comfortable year-round with our top-quality residential insulation services. We help you save on energy bills and improve your living environment.',
    longDescription: 'Our residential insulation solutions are designed to provide maximum thermal performance for your home. We use a variety of materials, including spray foam, fiberglass, and cellulose, to ensure a perfect fit for your specific needs and budget. A well-insulated home not only stays cooler in the summer and warmer in the winter but also benefits from noise reduction and improved indoor air quality. Our expert team will assess your home and recommend the best insulation strategy to achieve optimal energy efficiency and comfort.',
    icon: Home,
    image: 'https://picsum.photos/600/400?random=31',
    imageHint: 'modern house attic',
    features: [
      'Cellulose & fiberglass',
      'Attic insulation',
      'Wall retrofits',
      'Fire-resistant',
    ]
  },
  {
    slug: 'commercial',
    title: 'Spray Foam Insulation',
    description: 'High-performance spray foam for maximum energy efficiency and air sealing. Tailored for various commercial applications.',
    longDescription: 'InsulaTech Pro provides comprehensive insulation services for commercial properties of all sizes. From office buildings and retail stores to warehouses and multi-family housing, we have the expertise to handle complex projects. Our commercial insulation helps maintain consistent indoor temperatures, reduces HVAC system strain, and lowers utility expenses. We work around your business operations to minimize disruption and deliver a professional, timely installation that meets all building codes and standards.',
    icon: Wind,
    image: 'https://picsum.photos/600/400?random=32',
    imageHint: 'commercial roof insulation',
    features: [
      'Open & closed cell foam',
      'Air sealing',
      'R-value optimization',
      'Eco-friendly options',
    ]
  },
  {
    slug: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    description: 'Complete moisture protection for basements and foundations with advanced membrane systems.',
    longDescription: 'Industrial facilities have unique insulation requirements, from thermal control for processes to personnel protection and fire safety. InsulaTech Pro offers specialized industrial insulation services for pipes, tanks, and equipment. Our solutions are built to withstand harsh conditions, reduce energy loss, and improve workplace safety. We have experience working in a variety of industrial settings, including manufacturing plants, power generation facilities, and refineries, providing durable and effective insulation systems.',
    icon: Droplets,
    image: 'https://picsum.photos/600/400?random=33',
    imageHint: 'basement concrete wall',
    features: [
      'Exterior waterproofing',
      'Interior drainage systems',
      'Crack injection',
      'Lifetime warranty',
    ]
  },
  {
    slug: 'commercial-insulation',
    title: 'Commercial Insulation',
    description: 'Large-scale insulation solutions for commercial buildings, warehouses, and industrial facilities.',
    longDescription: 'Large-scale insulation solutions for commercial buildings, warehouses, and industrial facilities. We provide roof and wall insulation systems, HVAC duct insulation, pipe and tank insulation, fire-rated insulation, code compliance certification, and project management services to ensure your commercial space is energy-efficient and compliant.',
    icon: Building,
    image: 'https://picsum.photos/600/400?random=34',
    imageHint: 'commercial building construction',
    features: [
      'Roof and wall insulation systems',
      'HVAC duct insulation',
      'Pipe and tank insulation',
      'Fire-rated insulation',
      'Code compliance certification',
      'Project management services'
    ]
  },
  {
    slug: 'moisture-control',
    title: 'Moisture Control Systems',
    description: 'Comprehensive moisture management solutions to prevent mold, mildew, and structural damage.',
    longDescription: 'Our comprehensive moisture management solutions are designed to prevent mold, mildew, and structural damage. We offer crawl space encapsulation, dehumidification systems, ventilation improvements, mold remediation, air quality testing, and ongoing maintenance plans to protect your property from moisture-related issues.',
    icon: Shield,
    image: 'https://picsum.photos/600/400?random=35',
    imageHint: 'water drops condensation',
    features: [
      'Crawl space encapsulation',
      'Dehumidification systems',
      'Ventilation improvements',
      'Mold remediation',
      'Air quality testing',
      'Ongoing maintenance plans'
    ]
  },
  {
    slug: 'thermal-bridging',
    title: 'Thermal Bridging Solutions',
    description: 'Advanced thermal bridge mitigation to eliminate heat loss and condensation issues in modern construction.',
    longDescription: 'We offer advanced thermal bridge mitigation to eliminate heat loss and condensation issues in modern construction. Our services include continuous insulation systems, thermal break installation, building envelope analysis, energy modeling, performance verification, and LEED compliance support to maximize your building\'s energy performance.',
    icon: Thermometer,
    image: 'https://picsum.photos/600/400?random=36',
    imageHint: 'thermal imaging building',
    features: [
      'Continuous insulation systems',
      'Thermal break installation',
      'Building envelope analysis',
      'Energy modeling',
      'Performance verification',
      'LEED compliance support'
    ]
  }
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
