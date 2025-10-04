
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from 'lucide-react';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Basic',
    price: '₹1,500',
    frequency: '/month',
    description: 'Ideal for small businesses or startups wanting a simple online presence.',
    features: [
      '1-3 static pages',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
    ],
    isPopular: false,
  },
  {
    name: 'Dynamic',
    price: '₹2,500',
    frequency: '/month',
    description: 'Perfect for growing businesses that need to update content regularly.',
    features: [
      '5-10 dynamic pages',
      'Blog/news section',
      'Interactive forms',
      'Basic analytics & SEO',
    ],
    isPopular: true,
  },
  {
    name: 'E-Commerce',
    price: '₹5,000',
    frequency: '/month',
    description: 'For businesses starting online sales, like retailers or service providers.',
    features: [
      'Unlimited pages',
      'Product catalog',
      'Payment integration',
      'Shopping cart & checkout',
      'Sales analytics & Advanced SEO',
    ],
    isPopular: false,
  },
  {
    name: 'Custom',
    price: '₹8,000+',
    frequency: '/month',
    description: 'Tailored for businesses needing unique features and advanced integrations.',
    features: [
      'Fully customized website',
      'Multiple integrations (CRM, ERP)',
      'Advanced analytics & reporting',
      'Priority support',
    ],
    isPopular: false,
  },
];

const allFeatures = [
    'Pages', 'Design', 'Content Updates', 'Blog/News', 'Contact Form', 'Interactive Forms', 'Basic Analytics', 'Advanced Analytics', 'SEO', 'Product Catalog', 'Payment Gateway', 'Shopping Cart', 'Integrations', 'Support'
];

const planFeaturesMapping: { [key: string]: { [key: string]: string | boolean } } = {
    'Basic': {
        'Pages': '1-3 static', 'Design': 'Responsive', 'Content Updates': false, 'Blog/News': false, 'Contact Form': true, 'Interactive Forms': false, 'Basic Analytics': false, 'Advanced Analytics': false, 'SEO': 'Basic', 'Product Catalog': false, 'Payment Gateway': false, 'Shopping Cart': false, 'Integrations': false, 'Support': 'Standard'
    },
    'Dynamic': {
        'Pages': '5-10 dynamic', 'Design': 'Responsive', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': false, 'SEO': 'Standard', 'Product Catalog': false, 'Payment Gateway': false, 'Shopping Cart': false, 'Integrations': false, 'Support': 'Standard'
    },
    'E-Commerce': {
        'Pages': 'Unlimited', 'Design': 'Customized', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': false, 'SEO': 'Advanced', 'Product Catalog': true, 'Payment Gateway': true, 'Shopping Cart': true, 'Integrations': 'Basic', 'Support': 'Priority'
    },
    'Custom': {
        'Pages': 'Unlimited', 'Design': 'Fully Tailored', 'Content Updates': true, 'Blog/News': true, 'Contact Form': true, 'Interactive Forms': true, 'Basic Analytics': true, 'Advanced Analytics': true, 'SEO': 'Advanced + Strategy', 'Product Catalog': true, 'Payment Gateway': true, 'Shopping Cart': true, 'Integrations': 'Advanced (CRM, ERP)', 'Support': 'Dedicated'
    }
}


export default function SubscriptionPlans() {
  const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="subscription-plans" ref={ref} className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
            <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
                Website Solutions for Your Business
                <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
            </h2>
            <p className={cn("mt-4 max-w-2xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
                Choose a plan that fits your needs. All plans include hosting, maintenance, and support.
            </p>
        </div>

        <Tabs defaultValue="cards" className="w-full">
            <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="cards">Card View</TabsTrigger>
                <TabsTrigger value="table">Compare Plans</TabsTrigger>
            </TabsList>
            <TabsContent value="cards">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.name}
                            className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                            style={{ transitionDelay: `${index * 150 + 300}ms` }}
                        >
                            <Card className={cn('bg-card h-full flex flex-col transition-all duration-300', plan.isPopular ? 'border-primary ring-2 ring-primary/50' : 'border-border hover:border-primary')}>
                                <CardHeader className="relative">
                                    {plan.isPopular && <div className="absolute top-0 right-0 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-bl-lg rounded-tr-md">Most Popular</div>}
                                    <CardTitle className="pt-6">{plan.name}</CardTitle>
                                    <div className="text-4xl font-bold">{plan.price}<span className="text-lg font-normal text-muted-foreground">{plan.frequency}</span></div>
                                    <CardDescription className="text-center h-12 pt-1">{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow pt-2">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant={plan.isPopular ? 'default' : 'outline'} className="w-full">Get Started</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="table">
                 <Card className="overflow-x-auto">
                    <table className="w-full min-w-[800px] comparison-table">
                        <thead>
                            <tr>
                                <th className="w-1/4">Features</th>
                                {plans.map(plan => <th key={plan.name} className="text-center">{plan.name}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {allFeatures.map(feature => (
                                <tr key={feature}>
                                    <td>{feature}</td>
                                    {plans.map(plan => (
                                        <td key={plan.name} className="text-center">
                                            {typeof planFeaturesMapping[plan.name][feature] === 'boolean' ? (
                                                planFeaturesMapping[plan.anme]?.[feature] ? <Check className="mx-auto check-icon" /> : <X className="mx-auto cross-icon" />
                                            ) : (
                                                <span>{planFeaturesMapping[plan.name][feature]}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                             <tr>
                                <td></td>
                                {plans.map(plan => (
                                    <td key={plan.name} className="text-center p-4">
                                        <Button variant={plan.isPopular ? 'default' : 'outline'}>Get Started</Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
