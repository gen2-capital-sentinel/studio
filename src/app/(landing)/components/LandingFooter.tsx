import { Logo } from '@/components/Logo';
import Link from 'next/link';

export function LandingFooter() {
  const footerLinks = {
    platform: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    // Placeholder for social icons
    { name: 'Facebook', href: '#', icon: 'FB' },
    { name: 'Twitter', href: '#', icon: 'TW' },
    { name: 'LinkedIn', href: '#', icon: 'LI' },
  ]

  return (
    <footer className="bg-background text-foreground dark:bg-[hsl(204_38%_10%)] dark:text-[hsl(206_28%_95%)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              The future of wealth is intelligent.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-9 md:grid-cols-3">
            <div>
              <h3 className="font-semibold">Platform</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.platform.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Gen2 Wealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
