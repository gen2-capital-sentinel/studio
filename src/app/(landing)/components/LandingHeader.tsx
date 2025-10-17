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
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
           {navLinks.map((link) => (
             <Link key={link.name} href={link.href} className={cn("text-sm font-medium transition-colors", isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white")}>
                {link.name}
             </Link>
           ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
           <Button variant="ghost" asChild className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/20")}>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
        <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/20")}>
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
