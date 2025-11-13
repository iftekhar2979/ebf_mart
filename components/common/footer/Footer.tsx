// components/EBFMartFooter.tsx

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'; // Using lucide-react for icons
import { companyLinks, contactInfo, FooterSection, supportLinks } from './data/footer';


// --- Helper Components ---

interface FooterLinksSectionProps {
    data: FooterSection;
}

/** Renders a column of links (Company or Support) */
const FooterLinksSection: React.FC<FooterLinksSectionProps> = ({ data }) => (
  <div>
    <h3 className="text-lg font-bold text-gray-900 mb-5">{data.title}</h3>
    <ul className="space-y-3">
      {data.links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-gray-600 hover:text-pink-600 transition-colors duration-200">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

/** Renders the Get in Touch section */
const GetInTouch: React.FC = () => (
  <div>
    <h3 className="text-lg font-bold text-gray-900 mb-5">Get in Touch</h3>
    <ul className="space-y-3">
      {/* Address */}
      <li className="flex items-start">
        <MapPin className="h-5 w-5 text-pink-600 mr-3 mt-1 shrink-0" />
        <span className="text-gray-600">{contactInfo.address}</span>
      </li>
      {/* Phone */}
      <li className="flex items-center">
        <Phone className="h-5 w-5 text-pink-600 mr-3 shrink-0" />
        <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-pink-600">
          {contactInfo.phone}
        </a>
      </li>
      {/* Email */}
      <li className="flex items-center">
        <Mail className="h-5 w-5 text-pink-600 mr-3 shrink-0" />
        <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-pink-600">
          {contactInfo.email}
        </a>
      </li>
    </ul>
  </div>
);

// --- Main Footer Component ---

export const EBFMartFooter: React.FC = () => {
  return (
    <footer className="relative w-full bg-blue-50/70 py-16 px-4 md:px-8 overflow-hidden">
      
      {/* Background shape/pattern (as seen in the image) */}
      <div 
        className="absolute inset-0 z-0 opacity-70"
        style={{
            backgroundImage: `url('/images/footer-bg-pattern.svg')`, // Replace with actual path to your BG SVG/image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
      >
        {/* Simplified conceptual background based on your image */}
        <svg 
            className="absolute inset-0 h-full w-full" 
            viewBox="0 0 1440 320" 
            preserveAspectRatio="none"
        >
            <path fill="white" d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,138.7C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            {/* Note: The actual complex curve/line style in your image requires a proper SVG file or complex CSS. */}
        </svg>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          
          {/* Column 1: Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-4xl font-extrabold text-pink-600 tracking-wide">
              EBF MART
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Book products, grab discounts, shop smarter & connecting you with local supermarkets, fresh deals every day.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="p-2 bg-gray-900 rounded-full text-white hover:bg-pink-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="p-2 bg-gray-900 rounded-full text-white hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <FooterLinksSection data={companyLinks} />

          {/* Column 3: Support Links */}
          <FooterLinksSection data={supportLinks} />

          {/* Column 4: Get in Touch */}
          <GetInTouch />

        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center md:text-left">
          <p className="text-sm text-gray-500">
            © 2025 EBF MART. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};