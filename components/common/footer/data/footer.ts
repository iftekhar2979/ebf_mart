// types/footer-data.ts

interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const companyLinks: FooterSection = {
  title: "Company",
  links: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Subscription Plans", href: "/plans" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const supportLinks: FooterSection = {
  title: "Support",
  links: [
    { label: "FAQs", href: "/faqs" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Customer Support", href: "/support" },
  ],
};

export const contactInfo = {
  address: "House #7, Green Street, Dhaka",
  phone: "+880 1XXX-XXXXXX",
  email: "info@ebfmart.com",
};