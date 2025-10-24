"use client";

import { Laptop, Rocket, Workflow, Building2, Bot, User, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Services = () => {
    const { ref, isVisible } = useAnimation(0.1);
  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Aapki Har Business Zaroorat Ke Liye Ek Solution
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
           <p className={cn("mt-4 max-w-3xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            Main sirf website nahi banata, balki 'Online Presence' (Website) se lekar 'Business Efficiency' (Automation) tak, poora end-to-end digital partner hoon.
          </p>
        </div>

        {/* Part 1: Website Services */}
        <div className="mb-24">
            <div className="mb-12 text-center">
                <h3 className="text-3xl font-bold text-glow-primary">Professional Website Solutions</h3>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Aaj ke zamaane mein, bina website ke business adhoora hai. Agar aapki koi online dukaan nahi hai ya aapki puraani website mobile par theek se nahi chalti, toh aap har din customers kho rahe hain.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                    icon={Laptop}
                    title="Website Subscription Plan (Tension-Free)"
                    description="Yeh ek 'Website Rent' jaisa hai. Ek saath 25,000 kharch nahi karne. Bas mahine ka chhota sa subscription dein aur aapko ek shaandaar website, hosting, maintenance, sab kuch mil jayega."
                    features={[
                        "Aapke business se match karti sundar design.",
                        "Website ko 24/7 online aur safe rakhne ki zimmedaari meri.",
                        "Koi naya offer ya photo daalna hai? Main kar dunga.",
                        "Aane waali har lead ko manage karne ke liye Free CRM system."
                    ]}
                    index={0}
                    isVisible={isVisible}
                />
                <ServiceCard
                    icon={Rocket}
                    title="One-Time Website Project"
                    description="Agar aap subscription nahi chahte aur website ka poora control (ownership) apne paas rakhna chahte hain, toh yeh plan aapke liye hai. Ek baar banwayein, poori website aapki."
                    features={[
                        "Website ka poora code aur files aapki.",
                        "Aap khud bhi aasaani se content badal payenge.",
                        "Poori tarah se Google-friendly banakar denge."
                    ]}
                    index={1}
                    isVisible={isVisible}
                />
            </div>
            <div className="mt-12 text-center">
                <Button asChild size="lg">
                    <Link href="/pricing">Website Plans Ki Pricing Dekhein</Link>
                </Button>
            </div>
        </div>

        <Separator className="my-24" />

        {/* Part 2: AI & Automation */}
        <div className="mb-24">
            <div className="mb-12 text-center">
                <h3 className="text-3xl font-bold text-glow-accent">AI & Automation Services</h3>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Kya aap apna poora din chhote-mote kaamo mein (jaise WhatsApp check karna, email ka jawab dena, ya data entry) mein bita dete hain? Automation se in kaamo ko auto-pilot par daalein.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AutomationServiceCard
                    icon={User}
                    title="For Professionals"
                    subtitle="Personal Productivity Automation"
                    description="Managers, freelancers, aur busy professionals ke liye. Apne email, calendar, aur daily tasks ko automate karein."
                    benefits={[
                        "Aapka Email Inbox apne aap organize ho jayega.",
                        "Meetings apne aap schedule hongi.",
                        "To-do list ke tasks automatically manage honge."
                    ]}
                    index={0}
                    isVisible={isVisible}
                />
                 <AutomationServiceCard
                    icon={Bot}
                    title="For Small Businesses"
                    subtitle="WhatsApp & Lead Automation"
                    description="Yeh humari sabse popular service hai. Humara AI Bot aapke liye 24/7 leads pakdega, unse baat karega, aur unhe book karega."
                    benefits={[
                        "24/7 Lead Capture: Raat ko 2 baje bhi koi query karega to bot detail le lega.",
                        "Instant Replies: Customer ko turant jawab milega.",
                        "CRM Integration: Saari leads ek jagah save hongi."
                    ]}
                    index={1}
                    isVisible={isVisible}
                />
                 <AutomationServiceCard
                    icon={Building2}
                    title="For Large Businesses"
                    subtitle="Custom Enterprise Automation"
                    description="Badi companies jinke process complex hain. Hum aapke internal systems (jaise finance, HR, support) ko automate karne ke liye custom n8n workflows banate hain."
                    benefits={[
                        "Hiring Automation: Resume shortlisting se interview scheduling tak.",
                        "Customer Support Bots: Aapki support team ka 70% load kam karein.",
                        "Finance & Data Automation: Invoicing aur daily reports apne aap generate honge."
                    ]}
                    index={2}
                    isVisible={isVisible}
                />
            </div>
            <div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" style={{backgroundColor: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent))'} as React.CSSProperties}>
                    <Link href="/pricing#automation-pricing">Automation Plans Ki Pricing Dekhein</Link>
                </Button>
                 <Button asChild size="lg" variant="outline">
                    <Link href="/#contact">Book Your FREE Automation Audit</Link>
                </Button>
            </div>
        </div>

        <Separator className="my-24" />

        {/* Part 3: The Process */}
        <div className="text-center">
             <h3 className="text-3xl font-bold">Humara Process: Simple & Transparent</h3>
             <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                    <div key={step.title} className={cn('text-center transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                    style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                        <div className="mb-4 text-primary font-bold text-lg">Step {index + 1}</div>
                        <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

const processSteps = [
    { title: "Free Consultation", description: "Call par aapki zaroorat samjhenge" },
    { title: "Project Booking", description: "Ek chhota 'Booking Amount' dekar project start karein" },
    { title: "7-Day Trial", description: "Humara kaam dekhein, test karein" },
    { title: "Go Live & Support", description: "Khush hone par hi poora payment dein" },
];

const ServiceCard = ({ icon: Icon, title, description, features, index, isVisible }: { icon: any, title: string, description: string, features: string[], index: number, isVisible: boolean }) => (
    <div
      className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
        <Card className="glassmorphism h-full transform-gpu overflow-hidden text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8 text-glow-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6">{description}</p>
                <h4 className="font-semibold mb-4 text-left text-foreground/90">Isme Kya Milta Hai:</h4>
                <ul className="space-y-3 text-left">
                    {features.map(feature => (
                        <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
);

const AutomationServiceCard = ({ icon: Icon, title, subtitle, description, benefits, index, isVisible }: { icon: any, title: string, subtitle:string, description: string, benefits: string[], index: number, isVisible: boolean }) => (
     <div
      className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
        <Card className="glassmorphism h-full transform-gpu overflow-hidden text-center transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
            <CardHeader className="items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-8 w-8 text-glow-accent" />
                </div>
                <p className='text-sm font-bold text-accent'>{title}</p>
                <CardTitle className="text-xl">{subtitle}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6 text-sm">{description}</p>
                <h4 className="font-semibold mb-4 text-left text-foreground/90">Isse Kya Hoga:</h4>
                <ul className="space-y-3 text-left">
                    {benefits.map(benefit => (
                        <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    </div>
);


export default Services;
