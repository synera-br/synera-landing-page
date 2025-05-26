import Link from 'next/link';
import { SyneraLogo } from '@/components/icons/SyneraLogo';
import { COMPANY_NAME } from '@/lib/constants';

export function Header() {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
          <SyneraLogo className="h-8 w-auto" />
          <span>{COMPANY_NAME}</span>
        </Link>
        {/* Navigation links can be added here if needed in the future */}
      </div>
    </header>
  );
}
