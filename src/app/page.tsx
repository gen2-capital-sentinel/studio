import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, BarChart, Shield, UserPlus, Banknote, Landmark } from 'lucide-react';
import { LandingHeader } from './(landing)/components/LandingHeader';
import { LandingFooter } from './(landing)/components/LandingFooter';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { DisclaimerModal } from './(landing)/components/DisclaimerModal';

export default function Home() {
  const features = [
    {
      icon: <Bot className="h-8 w-8 text-accent" />,
      title: 'AI-Powered Insights',
      description: 'Leverage cutting-edge AI to get personalized investment advice and market analysis.',
    },
    {
      icon: <BarChart className="h-8 w-8 text-accent" />,
      title: 'Automated Portfolio Management',
      description: 'Our smart algorithms automatically rebalance your portfolio to maximize returns and minimize risk.',
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: 'Bank-Level Security',
      description: 'Your assets and data are protected with state-of-the-art encryption and security protocols.',
    },
  ];

  const howItWorks = [
    {
      icon: <UserPlus className="h-10 w-10 text-primary" />,
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up in minutes and tell us about your financial goals. Our platform will instantly generate a personalized investment plan for you.',
    },
    {
      icon: <Banknote className="h-10 w-10 text-primary" />,
      step: '02',
      title: 'Fund Your Account',
      description: 'Securely link your bank account and fund your portfolio with a one-time transfer or set up recurring deposits to grow your wealth over time.',
    },
    {
      icon: <Landmark className="h-10 w-10 text-primary" />,
      step: '03',
      title: 'Invest with Intelligence',
      description: "Approve your AI-generated plan and watch your money grow. Our platform monitors the market 24/7 and automatically adjusts your portfolio.",
    },
  ];
  
  const benefits = [
    {
      title: 'Smart Investing',
      description: 'Our AI-driven approach takes the guesswork out of investing, helping you make smarter financial decisions.',
    },
    {
      title: 'Simple and Intuitive',
      description: "You don't need to be an expert. Our platform is designed for ease of use, from onboarding to tracking performance.",
    },
    {
      title: 'Secure and Transparent',
      description: 'We prioritize your security and provide full transparency into your investments and our fees. No hidden costs.',
    },
  ];

  const team = [
    PlaceHolderImages.find(p => p.id === 'team-member-1'),
    PlaceHolderImages.find(p => p.id === 'team-member-2'),
    PlaceHolderImages.find(p => p.id === 'team-member-3'),
    PlaceHolderImages.find(p => p.id === 'team-member-4'),
  ].map(p => ({ ...p, name: p?.description.split(',')[0], title: p?.description.split(',')[1] }));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <DisclaimerModal />
      <LandingHeader />
      <main className="flex-1">
        <section className="relative flex h-[80vh] min-h-[600px] items-center justify-center text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-50"
            style={{ backgroundImage: "url('https://cdn.prod.website-files.com/68d1c44cb47e9938233be95e/68d1cbc86f7ad91715e10293_012667c0-22bf-47a8-bd52-51b176730e71.avif')" }}
            data-ai-hint="finance technology"
          />
          <div className="relative z-10 max-w-3xl px-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              The future of wealth is intelligent.
            </h1>
            <p className="mt-6 text-lg text-white/80 md:text-xl">
              Gen2 Wealth combines advanced AI with expert financial strategies to build and protect your wealth for generations to come.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 bg-secondary md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                A new era of wealth management
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're not just another investment platform. We're your partner in financial prosperity, using technology to unlock your wealth's true potential.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col text-center">
                  <CardContent className="flex flex-1 flex-col items-center justify-center p-6">
                    {feature.icon}
                    <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="how-it-works" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Getting started on your journey to financial freedom is simple.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {howItWorks.map((item, index) => (
                <Card key={item.step} className="relative flex flex-col items-center overflow-hidden text-center">
                   <CardContent className="flex flex-col items-center p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary shadow-md">
                        {item.icon}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                    <div className="absolute -top-5 -right-5 text-8xl font-bold text-muted-foreground/5 -z-0">
                        {item.step}
                    </div>
                   </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Smart, Simple, Secure
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience a wealth management platform that's powerful yet easy to use, built on a foundation of trust and security.
              </p>
            </div>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-1 text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are a passionate team of innovators, financial experts, and technologists dedicated to democratizing wealth management.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                member && (
                  <div key={member.name} className="text-center">
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                       <Image
                        src={member.imageUrl}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover"
                        data-ai-hint={member.imageHint}
                      />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight">{member.name}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{member.title}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="relative text-white py-16 md:py-24 text-center overflow-hidden">
           <div
            className="absolute inset-0 bg-cover bg-center brightness-75"
            style={{ 
              backgroundImage: "url('https://pub-11134a6be96f479ebe08254c1e1fa2f6.r2.dev/Homepage_Section_Background.png')",
              transform: 'scale(1.1)' 
            }}
            data-ai-hint="modern city"
          />
          <div className="container relative z-10 mx-auto px-4">
             <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to build your legacy?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Join Gen2 Wealth today and take the first step towards a smarter financial future.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/signup">
                Create Account
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
