// components/ui/breadcrumbs.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have shadcn's cn utility

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className }) => {
  return (
    <nav aria-label="breadcrumb" className={cn("flex text-sm text-gray-500", className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <Link href={item.href} className="hover:text-gray-700 transition-colors">
              {item.label}
            </Link>
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 ml-2 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};