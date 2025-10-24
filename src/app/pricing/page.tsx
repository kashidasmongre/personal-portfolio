
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2, Bot, CodeXml, Zap } from 'lucide-react';
import Particles from '@/components/particles';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const websitePlans = [
    {
        title: "Website as a Service",
        price: "₹3,000 / month",
        tagline: "The 'peace of mind' plan. Your complete website solution: design, hosting, and support for one low monthly fee.",
        features: [
            "Custom, Modern Website Design",
            "High-Speed Hosting Included",
            "SSL Security Certificate",
            "Monthly Maintenance & Security Backups",
            "Basic Content Updates (text/images)",
            "Mobile & Tablet Responsive"
        ],
        ctaText: "Start Your Website Today",
        ctaLink: "/#contact",
        isPrimary: false,
    },
    {
        title: "One-Time Website Project",
        price: "Starts at ₹25,000",
        priceDetail: "One-Time Fee",
        tagline: "For those who want full ownership. A powerful, custom-built website that you own completely.",
        features: [
            "Full Custom Design & Development",
            "You Get All Source Code",
            "CMS Integration (e.g., WordPress/Headless)",
            "Full SEO Setup",
            "Training on How to Manage Your Site",
            "30 Days of Free Support"
        ],
        ctaText: "Get a Custom Quote",
        ctaLink: "/#contact",
        isPrimary: true,
    }
];

const automationPlans = [
    {
        title: "Automation Starter",
        setupFee: "Starts at ₹15,000",
        retainer: "Starts at ₹5,000 / month",
        tagline: "Perfect for automating one key process, like lead capture or basic support.",
        features: [
            "Basic WhatsApp Bot (Greeting, Data Collection)",
            "Website Contact Form to Google Sheet/CRM",
            "Automated Email Acknowledgement",
            "Basic Website FAQ Chatbot"
        ],
        ctaText: "Book a Consultation",
        ctaLink: "/#contact",
        isPrimary: false,
    },
    {
        title: "Automation Elite",
        setupFee: "Custom Quote (Starts at ₹40,000+)",
        retainer: "Starts at ₹12,000 / month",
        tagline: "For businesses ready for a fully integrated, AI-powered system that runs itself.",
        features: [
            "Advanced AI-Powered WhatsApp Bot",
            "Custom n8n/Make.com Workflows",
            "Corporate Process Automation",
            "Full Integration with Your Existing Software",
            "Priority Support & Performance Monitoring"
        ],
        ctaText: "Book Your FREE Automation Audit",
        ctaLink: "/#contact",
        isPrimary: true,
    }
];

const faqs = [
    {
        question: "Why are Website and Automation services priced separately?",
        answer: "Website services build your online foundation and credibility, while AI & Automation services are an investment in operational efficiency that saves you time and money. Separating them allows you to choose exactly what you need and understand the value each provides."
    },
    {
        question: "What is included in the 'One-Time Setup Fee' for automation?",
        answer: "The setup fee covers the expert work of designing, building, testing, and deploying your custom automation system. This is a one-time investment to create the robust 'engine' that will power your business processes."
    },
    {
        question: "What does the monthly 'Automation Retainer' cover?",
        answer: "The retainer covers all the ongoing costs to keep your system running smoothly 24/7. This includes third-party tool costs (like API access and server fees), continuous monitoring, regular maintenance, and dedicated support for any updates or issues."
    },
    {
        question: "What tools do you use?",
        answer: "I use a modern, flexible stack of powerful tools including n8n, Make.com, the WhatsApp Business API, various AI models from providers like OpenAI, and other platforms to create the most effective and scalable solutions for your specific needs."
    }
]

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
                        Pricing & Plans
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
                        <h2 className="text-3xl font-bold">Your Professional Online Foundation</h2>
                        <p className="text-muted-foreground mt-2">A professional website is the first step to building trust and credibility online.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {websitePlans.map((plan, index) => (
                            <Card key={plan.title} className={cn("glassmorphism flex flex-col", plan.isPrimary && "border-primary glow-shadow-primary")}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <CardDescription>{plan.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold">{plan.price}</span>
                                        {plan.priceDetail && <span className="text-muted-foreground"> {plan.priceDetail}</span>}
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
                                    <Button asChild className="w-full" variant={plan.isPrimary ? "default" : "outline"}>
                                        <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* AI & Automation Services Section */}
                <section id="automation-pricing" className="mb-24">
                     <div className="text-center mb-12">
                        <div className="inline-block bg-accent/10 p-3 rounded-full mb-4">
                            <Zap className="h-8 w-8 text-accent" />
                        </div>
                        <h2 className="text-3xl font-bold text-glow-accent">Stop Manual Work. Start Scaling with AI.</h2>
                        <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                            Automation isn't a cost; it's an investment that saves time and money. Pricing is split into a one-time setup fee for building your custom system and a monthly retainer for ongoing costs, monitoring, and support.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {automationPlans.map((plan) => (
                            <Card key={plan.title} className={cn("glassmorphism flex flex-col", plan.isPrimary && "border-accent glow-shadow-accent")}>
                                <CardHeader>
                                    <CardTitle>{plan.title}</CardTitle>
                                    <CardDescription>{plan.tagline}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="mb-6 space-y-2">
                                        <div>
                                            <p className="font-semibold text-lg">{plan.setupFee}</p>
                                            <p className="text-sm text-muted-foreground">One-Time Setup Fee</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-lg">{plan.retainer}</p>
                                            <p className="text-sm text-muted-foreground">Monthly Retainer</p>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {plan.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                     <Button asChild className="w-full" variant={plan.isPrimary ? "default" : "outline"} style={plan.isPrimary ? {backgroundColor: 'hsl(var(--accent))', borderColor: 'hsl(var(--accent))'} as React.CSSProperties : {}}>
                                        <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-12 text-center glassmorphism max-w-2xl mx-auto p-6 rounded-lg">
                        <h3 className="text-xl font-semibold">Need Just One Specific Bot?</h3>
                        <p className="text-muted-foreground mt-2 mb-4">If you have a single, specific automation project (like one WhatsApp bot) and don't need a monthly retainer, I offer one-time project pricing. Note: You will be responsible for your own API and server costs.</p>
                        <Button asChild variant="secondary">
                            <Link href="/#contact">Get a Custom Bot Quote</Link>
                        </Button>
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

