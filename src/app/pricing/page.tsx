
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Zap, CodeXml, Milestone, ShieldCheck, PlayCircle, BadgeCheck, User } from 'lucide-react';
import Particles from '@/components/particles';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';


const websitePlans = [
    {
        title: "Website Starter",
        price: "₹2,999 / month",
        tagline: "Local businesses, shops, aur professionals ke liye jo ek sundar online presence chahte hain.",
        features: [
            "Professional 5-Page Website",
            "High-Speed Hosting & SSL Included",
            "Monthly Maintenance & Security",
            "Basic Content Updates",
            "Mobile Friendly Design",
            "No Setup Fee"
        ],
        ctaText: "Start Your 7-Day Trial",
        ctaLink: "/#contact",
        isPrimary: false,
    },
    {
        title: "Business Pro + CRM",
        price: "₹5,999 / month",
        tagline: "Businesses jo sirf website nahi, balki leads manage karne ke liye ek poora system chahte hain.",
        features: [
            "Everything in 'Starter' PLUS:",
            "Free Basic CRM Setup",
            "Advanced, Multi-Page Website",
            "Lead Generation Forms",
            "Priority Support",
            "No Setup Fee"
        ],
        ctaText: "Start Your 7-Day Trial",
        ctaLink: "/#contact",
        isPrimary: true,
    }
];

const faqs = [
    {
        question: "Setup Fee sach mein nahi hai? Koi hidden charge toh nahi?",
        answer: "Bilkul nahi. Humare subscription plans mein koi hidden setup fee nahi hai. Aap bas monthly charge pay karte hain. Humara model transparency par based hai."
    },
    {
        question: "Security Amount (Booking Amount) kitna hai?",
        answer: "Yeh aapke chune gaye plan par depend karta hai, usually yeh aapke pehle mahine ke bill ka 25% hota hai. Yeh ek chhota sa amount hai jo project shuru karne ke liye humare mutual commitment ko ensure karta hai."
    },
    {
        question: "Agar 7-day trial pasand nahi aaya toh?",
        answer: "Aap aage continue na karne ke liye bilkul free hain. Is case mein, aapka non-refundable booking amount humare initial setup time aur resources ko cover karega. Isse dono parties ke liye process fair rehta hai."
    }
];

const processSteps = [
    { icon: Milestone, title: "Step 1: Consultation (Free)", description: "Hum 1-on-1 call par aapki zaroorat ko samjhenge. (Bilkul free)." },
    { icon: ShieldCheck, title: "Step 2: Start Project (Booking Amount)", description: "Project start karne ke liye, aapko ek chhota, non-refundable 'Booking Amount' (security amount) pay karna hoga. (Ye aapke pehle mahine ke bill ka hissa hoga). Yeh isliye taaki hum aapka project serious hoke shuru kar sakein aur humara initial time/resource secure ho." },
    { icon: PlayCircle, title: "Step 3: 7-Day Trial/Review", description: "Hum aapko service ka pehla version denge. Aapke paas use test karne ke liye poore 7 din honge. Agar aap khush hain, toh hi aage badhein." },
    { icon: BadgeCheck, title: "Step 4: Continue Service", description: "Trial pasand aane par, aap pehle mahine ka bacha hua payment karein, aur aapki service poori tarah live ho jayegi!" },
];


export default function PricingPage() {
    const { ref, isVisible } = useAnimation(0.1);

    return (
        <div className="bg-background text-foreground min-h-screen">
            <Particles />
            <div ref={ref} className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <Link href="/" className="absolute top-6 left-6 z-20">
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                    </Button>
                </Link>

                <div className="text-center pt-24 pb-12">
                    <h1 className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-primary transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                        Pricing & Plans (For Bhopal)
                    </h1>
                    <p className={cn("mt-4 max-w-2xl mx-auto text-lg text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? 'opacity-100' : 'opacity-0')}>
                        Transparent pricing for services that deliver real value to your business.
                    </p>
                </div>

                {/* Website Services Section */}
                <section id="website-pricing" className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
                            <CodeXml className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">Aapki Dukaan, Ab Online. Bina Bhaari Kharch.</h2>
                        <p className="text-muted-foreground mt-2">Bhopal ke businesses ke liye special subscription plans. Koi setup fee nahi. Bas mahine ka chhota sa charge aur aapki website taiyaar.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {websitePlans.map((plan) => (
                            <Card key={plan.title} className={cn("glassmorphism flex flex-col", plan.isPrimary && "border-primary glow-shadow-primary")}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <CardDescription>{plan.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        <p className="font-semibold text-primary">No Setup Fee</p>
                                    </div>
                                    <ul className="space-y-3">
                                        {plan.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href={plan.ctaLink} className="w-full">
                                        <Button className="w-full" variant={plan.isPrimary ? "default" : "outline"}>
                                            {plan.ctaText}
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                     <div className="mt-12 text-center glassmorphism max-w-2xl mx-auto p-6 rounded-lg">
                        <h3 className="text-xl font-semibold">Ya, Ek Baar Mein Banwayein</h3>
                        <p className="text-muted-foreground mt-2 mb-4">Agar aap subscription nahi chahte, toh aap ₹20,000 (starting) ki one-time fee mein bhi website banwa sakte hain. (Hosting aur maintenance alag se lagega).</p>
                        <Link href="/#contact">
                            <Button variant="secondary">Get a One-Time Quote</Button>
                        </Link>
                    </div>
                </section>

                {/* AI & Automation Services Section */}
                <section id="automation-pricing" className="mb-24">
                     <div className="text-center mb-12">
                        <div className="inline-block bg-accent/10 p-3 rounded-full mb-4">
                            <Zap className="h-8 w-8 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-glow-accent">Apne Business Ko Automatic Banayein, Bina Badi Investment Ke.</h2>
                        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                           Aap chahe ek professional hon, chhota business chala rahe hon, ya ek badi company, humare paas aapke liye sahi automation plan hai. Bina setup fee ke, chhota sa monthly subscription chunein.
                        </p>
                    </div>

                    <Tabs defaultValue="small-business" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="individual">For Individuals</TabsTrigger>
                            <TabsTrigger value="small-business">For Small Businesses</TabsTrigger>
                            <TabsTrigger value="enterprise">For Enterprises</TabsTrigger>
                        </TabsList>
                        <TabsContent value="individual" className="pt-8">
                           <div className="max-w-md mx-auto">
                                <h3 className="text-2xl font-bold text-center mb-4">Aapke Personal Tasks Ke Liye</h3>
                               <Card className="glassmorphism flex flex-col border-accent glow-shadow-accent">
                                    <CardHeader>
                                        <CardTitle>Personal Productivity Plan</CardTitle>
                                        <CardDescription>Working professionals, managers, aur freelancers ke liye jo apne daily tasks ko automate karna chahte hain.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">₹3,500 / month</span>
                                            <p className="font-semibold text-accent">No Setup Fee</p>
                                        </div>
                                        <ul className="space-y-3 text-left">
                                            {["Smart Email Automation", "Daily Task Automation", "Personal Calendar Management", "Personalized Reminder Bots"].map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/#contact" className="w-full">
                                            <Button className="w-full" style={{backgroundColor: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent))'} as React.CSSProperties}>
                                                Start Your 7-Day Trial
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="small-business" className="pt-8">
                             <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold">Aapke Local Business Ke Liye (Bhopal Special)</h3>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Card className="glassmorphism flex flex-col">
                                    <CardHeader>
                                        <CardTitle>WhatsApp Lead Gen</CardTitle>
                                        <CardDescription>Coaching, restaurants, ya service providers ke liye 24/7 lead capture.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">₹4,000 / month</span>
                                            <p className="font-semibold text-accent">No Setup Fee</p>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Advanced WhatsApp Bot", "24/7 Lead Capture (Name, Phone, Query)", "Automated Welcome Messages", "Leads ko Google Sheet mein save karna", "Monitoring & Support"].map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/#contact" className="w-full">
                                            <Button className="w-full" variant="outline">
                                                Start Your 7-Day Trial
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                                <Card className="glassmorphism flex flex-col border-accent glow-shadow-accent">
                                     <CardHeader>
                                        <CardTitle>Full Business Automation</CardTitle>
                                        <CardDescription>Poore business ko streamline karne ke liye (WhatsApp + CRM + Internal Tasks).</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">₹9,000 / month</span>
                                            <p className="font-semibold text-accent">No Setup Fee</p>
                                        </div>
                                        <ul className="space-y-3">
                                            {["Everything in 'WhatsApp Lead Gen' PLUS:", "Custom n8n Workflows", "CRM ke saath Gehra Integration", "Automated Appointment Booking", "Internal Task Automation (e.g., Reporting)", "Priority Support"].map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/#contact" className="w-full">
                                            <Button className="w-full" style={{backgroundColor: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent))'} as React.CSSProperties}>
                                                Start Your 7-Day Trial
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>
                        <TabsContent value="enterprise" className="pt-8">
                            <div className="max-w-md mx-auto">
                                 <h3 className="text-2xl font-bold text-center mb-4">Aapke Bade Operations Ke Liye</h3>
                                <Card className="glassmorphism flex flex-col">
                                    <CardHeader>
                                        <CardTitle>Enterprise Custom Solution</CardTitle>
                                        <CardDescription>Badi companies jinko high-volume, complex automation ki zaroorat hai (jaise Hiring, Support, Finance).</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="mb-6">
                                            <span className="text-4xl font-bold">Custom Monthly Pricing</span>
                                        </div>
                                        <ul className="space-y-3 text-left">
                                            {[ "Hiring Automation (Application scanning, interview scheduling)", "Advanced Customer Support (Multi-platform AI bots)", "Finance Automation (Invoicing, payment reminders)", "Full API & Internal Database Integration"].map(feature => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-accent" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-6 text-sm text-muted-foreground p-3 bg-card rounded-md border border-border">
                                            <strong>Important Note:</strong> Enterprise-level projects ki complexity ke kaaran, inme 'No Setup Fee' policy laagu nahi hoti. Project ke scope ke aadhaar par ek custom setup fee aur 'Booking Amount' laagu hogi.
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href="/#contact" className="w-full">
                                            <Button className="w-full" variant="secondary">
                                                Book an Enterprise Audit
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
                
                {/* Fair Start Process Section */}
                <section id="process" className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Humara 'Fair-Start' Process (Aapke Aur Humare Trust Ke Liye)</h2>
                    </div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <step.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold">{step.title}</h3>
                                    <p className="text-muted-foreground mt-1">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* FAQ Section */}
                <section id="faq" className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index+1}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>
        </div>
    );
}
