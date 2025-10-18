'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'For Individuals', href: '#client-types' },
    { name: 'For Businesses', href: '#client-types' },
    { name: 'For Advisors', href: '#client-types' },
    { name: 'Fees and Charges', href: '#about' },
  ];

  const linkClassName = "text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary/50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
           {navLinks.map((link) => (
             <Link key={link.name} href={link.href} className={linkClassName}>
                {link.name}
             </Link>
           ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
           <Button variant="ghost" asChild className={linkClassName}>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
        <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("hover:bg-accent", linkClassName)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 p-6">
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                        <Logo />
                    </Link>
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-foreground hover:text-primary">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto flex flex-col gap-4">
                         <Button variant="outline" asChild>
                            <Link href="/login">Sign In</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/signup">Get Started</Link>
                        </Button>
                    </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
