import { FOOTER_TEXT } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">{FOOTER_TEXT}</p>
      </div>
    </footer>
  );
}
